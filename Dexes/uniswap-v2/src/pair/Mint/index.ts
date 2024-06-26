import { IEventContext, IBind, Instance } from "@blockflow-labs/utils";
import { BigNumber } from "bignumber.js";

import {
  FACTORY_ADDRESS,
  createLiquidityPosition,
  createLiquiditySnapshot,
} from "../helper";

import {
  updatePairDayData,
  updatePairHourData,
  updateTokenDayData,
  updateUniswapDayData,
} from "../dayUpdates";

import {
  Pair,
  Mint,
  Bundle,
  Token,
  Transaction,
  PairDayData,
  TokenDayData,
  PairHourData,
  UniswapFactory,
  UniswapDayData,
  LiquidityPosition,
} from "../../types/schema";

import {
  IMint,
  IPair,
  IToken,
  IBundle,
  ITransaction,
  IUniswapFactory,
} from "../../types/schema";

/**
 * @dev Event::Mint(address sender, uint256 amount0, uint256 amount1)
 * @param context trigger object with contains {event: {sender ,amount0 ,amount1 }, transaction, block, log}
 * @param bind init function for database wrapper class
 */
export const MintHandler = async (
  context: IEventContext,
  bind: IBind,
  secrets: any
) => {
  // Implement your event handler logic for Mint here
  const { event, transaction, log } = context;
  let { sender, amount0, amount1 } = event;

  sender = sender.toString();
  amount0 = amount0.toString();
  amount1 = amount1.toString();

  // define all databases
  const tokenDB = bind(Token);
  const pairDB: Instance = bind(Pair);
  const factoryDB: Instance = bind(UniswapFactory);

  // update pair database
  const pair = await updatePair(pairDB, log.log_address);
  // update factory database
  await updateFactory(factoryDB);

  // update tokens database
  const token0: IToken = await updateToken(tokenDB, pair.token0);
  const token1: IToken = await updateToken(tokenDB, pair.token1);

  // taking both tokens as 18 decimals
  let token0Amount = new BigNumber(amount0).dividedBy(
    10 ** parseInt(token0.decimals)
  );
  let token1Amount = new BigNumber(amount1).dividedBy(
    10 ** parseInt(token1.decimals)
  );

  const bundleDB: Instance = bind(Bundle);
  const bundle: IBundle = await bundleDB.findOne({ id: "1" });
  let amountTotalUSD = new BigNumber(token1.derivedETH)
    .times(token1Amount)
    .plus(new BigNumber(token0.derivedETH).times(token0Amount))
    .times(bundle.ethPrice);

  const txDB: Instance = bind(Transaction);
  // prettier-ignore
  let tx: ITransaction = await txDB.findOne({ id: transaction.transaction_hash.toLowerCase() });
  let mints = tx.mints;

  const mintDB: Instance = bind(Mint);
  // prettier-ignore
  let mint: IMint = await mintDB.findOne({ id: mints[mints.length - 1].toLowerCase() });

  mint.sender = sender;
  mint.logIndex = log.log_index;
  mint.amount0 = token0Amount.toString();
  mint.amount1 = token1Amount.toString();
  mint.amountUSD = amountTotalUSD.toString();

  await mintDB.save(mint);

  // update the LP position
  const liquidityDB: Instance = bind(LiquidityPosition);
  const liquidityPosition = await createLiquidityPosition(
    log.log_address,
    mint.to,
    liquidityDB,
    pairDB
  );

  await createLiquiditySnapshot(liquidityPosition, context, bind);
  await liquidityDB.save(liquidityPosition);

  // update analytics data
  await updatePairDayData(context, bind(PairDayData), pairDB);
  await updatePairHourData(context, bind(PairHourData), pairDB);
  await updateUniswapDayData(context, bind(UniswapDayData), factoryDB);
  await updateTokenDayData(context, token0, bind(TokenDayData), bundleDB);
  await updateTokenDayData(context, token1, bind(TokenDayData), bundleDB);
};

const updatePair = async (pairDB: Instance, address: string) => {
  let pair: IPair = await pairDB.findOne({ id: address.toLowerCase() });
  pair.txCount = new BigNumber(pair.txCount).plus(1).toString();
  await pairDB.save(pair);

  return pair;
};

const updateFactory = async (factoryDB: Instance) => {
  // prettier-ignore
  let uniswap: IUniswapFactory = await factoryDB.findOne({ id: FACTORY_ADDRESS.toLowerCase()});
  uniswap.txCount = new BigNumber(uniswap.txCount).plus(1).toString();
  await factoryDB.save(uniswap);
};

const updateToken = async (tokenDB: Instance, token: string) => {
  let _token: IToken = await tokenDB.findOne({ id: token.toLowerCase() });
  _token.txCount = new BigNumber(_token.txCount).plus(1).toString();
  await tokenDB.save(_token);

  return _token;
};
