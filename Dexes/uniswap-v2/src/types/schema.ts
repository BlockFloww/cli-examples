// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import { Document } from "@blockflow-labs/utils";

export class User {
  static entity = "User";
  static schema = {
    id: { type: "String", index: true },
    liquidityPositions: ["String"],
    usdSwapped: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
  };
}

export class TokenToPair {
  static entity = "TokenToPair";
  static schema = {
    id: { type: "String", index: true },
    pair: "string",
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
  };
}

export class UniswapFactory {
  static entity = "UniswapFactory";
  static schema = {
    id: { type: "String", index: true },
    pairCount: "String",
    totalVolumeUSD: "String",
    totalVolumeETH: "String",
    untrackedVolumeUSD: "String",
    totalLiquidityUSD: "String",
    totalLiquidityETH: "String",
    txCount: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
  };
}

export class Token {
  static entity = "Token";
  static schema = {
    id: { type: "String", index: true },
    symbol: "String",
    name: "String",
    decimals: "String",
    totalSupply: "String",
    tradeVolume: "String",
    tradeVolumeUSD: "String",
    untrackedVolumeUSD: "String",
    txCount: "String",
    totalLiquidity: "String",
    derivedETH: "String",
    tokenDayData: ["String"],
    pairDayDataBase: ["String"],
    pairDayDataQuote: ["String"],
    pairBase: ["String"],
    pairQuote: ["String"],
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
  };
}

export class Pair {
  static entity = "Pair";
  static schema = {
    id: { type: "String", index: true },
    token0: "String",
    token1: "String",
    reserve0: "String",
    reserve1: "String",
    totalSupply: "String",
    reserveETH: "String",
    reserveUSD: "String",
    trackedReserveETH: "String",
    token0Price: "String",
    token1Price: "String",
    volumeToken0: "String",
    volumeToken1: "String",
    volumeUSD: "String",
    untrackedVolumeUSD: "String",
    txCount: "String",
    createdAtTimestamp: "String",
    createdAtBlockNumber: "Number",
    liquidityProviderCount: "String",
    pairHourData: ["String"],
    liquidityPositions: ["String"],
    liquidityPositionSnapshots: ["String"],
    mints: ["String"],
    burns: ["String"],
    swaps: ["String"],
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
  };
}

export class Bundle {
  static entity = "Bundle";
  static schema = {
    id: { type: "String", index: true },
    ethPrice: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
  };
}

export class Transaction {
  static entity = "Transaction";
  static schema = {
    id: { type: "String", index: true },
    timestamp: "String",
    mints: ["String"],
    burns: ["String"],
    swaps: ["String"],
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
  };
}

export class Mint {
  static entity = "Mint";
  static schema = {
    id: { type: "String", index: true },
    transaction: "String",
    timestamp: "String",
    pair: "String",
    to: "String",
    liquidity: "String",
    sender: "String",
    amount0: "String",
    amount1: "String",
    logIndex: "String",
    amountUSD: "String",
    feeTo: "String",
    feeLiquidity: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
  };
}

export class LiquidityPosition {
  static entity = "LiquidityPosition";
  static schema = {
    id: { type: "String", index: true },
    user: "String",
    pair: "String",
    liquidityTokenBalance: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
  };
}

export class LiquidityPositionSnapshot {
  static entity = "LiquidityPositionSnapshot";
  static schema = {
    id: { type: "String", index: true },
    liquidityPosition: "String",
    timestamp: "String",
    user: "String",
    pair: "String",
    token0PriceUSD: "String",
    token1PriceUSD: "String",
    reserve0: "String",
    reserve1: "String",
    reserveUSD: "String",
    liquidityTokenTotalSupply: "String",
    liquidityTokenBalance: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
  };
}

export class PairDayData {
  static entity = "PairDayData";
  static schema = {
    id: { type: "String", index: true },
    date: "String",
    pairAddress: "String",
    token0: "String",
    token1: "String",
    reserve0: "String",
    reserve1: "String",
    totalSupply: "String",
    reserveUSD: "String",
    dailyVolumeToken0: "String",
    dailyVolumeToken1: "String",
    dailyVolumeUSD: "String",
    dailyTxns: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
  };
}

export class PairHourData {
  static entity = "PairHourData";
  static schema = {
    id: { type: "String", index: true },
    hourStartUnix: "String",
    pair: "String",
    reserve0: "String",
    reserve1: "String",
    totalSupply: "String",
    reserveUSD: "String",
    hourlyVolumeToken0: "String",
    hourlyVolumeToken1: "String",
    hourlyVolumeUSD: "String",
    hourlyTxns: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
  };
}

export class UniswapDayData {
  static entity = "UniswapDayData";
  static schema = {
    id: { type: "String", index: true },
    date: "String",
    dailyVolumeETH: "String",
    dailyVolumeUSD: "String",
    dailyVolumeUntracked: "String",
    totalVolumeETH: "String",
    totalLiquidityETH: "String",
    totalVolumeUSD: "String",
    totalLiquidityUSD: "String",
    txCount: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
  };
}

export class TokenDayData {
  static entity = "TokenDayData";
  static schema = {
    id: { type: "String", index: true },
    date: "String",
    token: "String",
    dailyVolumeToken: "String",
    dailyVolumeETH: "String",
    dailyVolumeUSD: "String",
    dailyTxns: "String",
    totalLiquidityToken: "String",
    totalLiquidityETH: "String",
    totalLiquidityUSD: "String",
    priceUSD: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
  };
}

export class Swap {
  static entity = "Swap";
  static schema = {
    id: { type: "String", index: true },
    transaction: "String",
    timestamp: "String",
    pair: "String",
    sender: "String",
    from: "String",
    amount0In: "String",
    amount1In: "String",
    amount0Out: "String",
    amount1Out: "String",
    to: "String",
    logIndex: "String",
    amountUSD: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
  };
}

export class Burn {
  static entity = "Burn";
  static schema = {
    id: { type: "String", index: true },
    transaction: "String",
    timestamp: "String",
    pair: "String",
    liquidity: "String",
    sender: "String",
    amount0: "String",
    amount1: "String",
    to: "String",
    logIndex: "String",
    amountUSD: "String",
    needsComplete: "Boolean",
    feeTo: "String",
    feeLiquidity: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
  };
}

import { String, Array, Number } from "@blockflow-labs/utils";

export interface IUser extends Document {
  id: String;
  liquidityPositions: [String];
  usdSwapped: String;
  blocknumber: String;
  entityId: String;
}

export interface ITokenToPair extends Document {
  id: string;
  pair: string;
  blocknumber: String;
  entityId: String;
}

export interface IUniswapFactory extends Document {
  id: String;
  pairCount: String;
  totalVolumeUSD: String;
  totalVolumeETH: String;
  untrackedVolumeUSD: String;
  totalLiquidityUSD: String;
  totalLiquidityETH: String;
  txCount: String;
  blocknumber: String;
  entityId: String;
}

export interface IToken extends Document {
  id: String;
  symbol: String;
  name: String;
  decimals: String;
  totalSupply: String;
  tradeVolume: String;
  tradeVolumeUSD: String;
  untrackedVolumeUSD: String;
  txCount: String;
  totalLiquidity: String;
  derivedETH: String;
  tokenDayData: [String];
  pairDayDataBase: [String];
  pairDayDataQuote: [String];
  pairBase: [String];
  pairQuote: [String];
  blocknumber: String;
  entityId: String;
}

export interface IPair extends Document {
  id: String;

  token0: String;
  token1: String;
  reserve0: String;
  reserve1: String;
  totalSupply: String;

  reserveETH: String;
  reserveUSD: String;
  trackedReserveETH: String;

  token0Price: String;
  token1Price: String;

  volumeToken0: String;
  volumeToken1: String;
  volumeUSD: String;
  untrackedVolumeUSD: String;
  txCount: String;

  createdAtTimestamp: String;
  createdAtBlockNumber: Number;

  liquidityProviderCount: String;
  pairHourData: [String];
  liquidityPositions: [String];
  liquidityPositionSnapshots: [String];
  mints: [String];
  burns: [String];
  swaps: [String];
  blocknumber: String;
  entityId: String;
}

export interface IBundle extends Document {
  id: String;
  ethPrice: String;
  blocknumber: String;
  entityId: String;
}

export interface ITransaction extends Document {
  id: String;
  timestamp: String;
  mints: [String];
  burns: [String];
  swaps: [String];
  blocknumber: String;
  entityId: String;
}

export interface IMint extends Document {
  id: String;
  transaction: String;
  timestamp: String;
  pair: String;
  to: String;
  liquidity: String;
  sender: String;
  amount0: String;
  amount1: String;
  logIndex: String;
  amountUSD: String;
  feeTo: String;
  feeLiquidity: String;
  blocknumber: String;
  entityId: String;
}

export interface ILiquidityPosition extends Document {
  id: String;
  user: String;
  pair: String;
  liquidityTokenBalance: String;
  blocknumber: String;
  entityId: String;
}

export interface ILiquidityPositionSnapshot extends Document {
  id: String;
  liquidityPosition: String;
  timestamp: String;
  user: String;
  pair: String;
  token0PriceUSD: String;
  token1PriceUSD: String;
  reserve0: String;
  reserve1: String;
  reserveUSD: String;
  liquidityTokenTotalSupply: String;
  liquidityTokenBalance: String;
  blocknumber: String;
  entityId: String;
}

export interface IPairDayData extends Document {
  id: String;
  date: String;
  pairAddress: String;
  token0: String;
  token1: String;

  reserve0: String;
  reserve1: String;

  totalSupply: String;

  reserveUSD: String;

  dailyVolumeToken0: String;
  dailyVolumeToken1: String;
  dailyVolumeUSD: String;
  dailyTxns: String;
  blocknumber: String;
  entityId: String;
}

export interface IPairHourData extends Document {
  id: String;
  hourStartUnix: String;
  pair: String;

  reserve0: String;
  reserve1: String;

  totalSupply: String;

  reserveUSD: String;

  hourlyVolumeToken0: String;
  hourlyVolumeToken1: String;
  hourlyVolumeUSD: String;
  hourlyTxns: String;
  blocknumber: String;
  entityId: String;
}

export interface IUniswapDayData extends Document {
  id: String;
  date: String;

  dailyVolumeETH: String;
  dailyVolumeUSD: String;
  dailyVolumeUntracked: String;

  totalVolumeETH: String;
  totalLiquidityETH: String;
  totalVolumeUSD: String;
  totalLiquidityUSD: String;

  txCount: String;
  blocknumber: String;
  entityId: String;
}

export interface ITokenDayData extends Document {
  id: String;
  date: String;
  token: String;

  dailyVolumeToken: String;
  dailyVolumeETH: String;
  dailyVolumeUSD: String;
  dailyTxns: String;

  totalLiquidityToken: String;
  totalLiquidityETH: String;
  totalLiquidityUSD: String;

  priceUSD: String;
  blocknumber: String;
  entityId: String;
}

export interface ISwap extends Document {
  id: String;
  transaction: String;
  timestamp: String;
  pair: String;

  sender: String;
  from: String;
  amount0In: String;
  amount1In: String;
  amount0Out: String;
  amount1Out: String;
  to: String;
  logIndex: String;

  amountUSD: String;
  blocknumber: String;
  entityId: String;
}

export interface IBurn extends Document {
  id: String;
  transaction: String;
  timestamp: String;
  pair: String;

  liquidity: String;

  sender: String;
  amount0: String;
  amount1: String;
  to: String;
  logIndex: String;
  amountUSD: String;

  needsComplete: Boolean;

  feeTo: String;
  feeLiquidity: String;
  blocknumber: String;
  entityId: String;
}
