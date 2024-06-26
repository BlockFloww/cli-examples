import {
  IEventContext,
  IBind,
  Instance,
  ISecrets,
} from "@blockflow-labs/utils";
import { ILidoConfig, LidoConfig } from "../../../types/schema";
import { _loadLidoConfigEntity } from "../../../helpers";

/**
 * @dev Event::StakingLimitSet(uint256 maxStakeLimit, uint256 stakeLimitIncreasePerBlock)
 * @param context trigger object with contains {event: {maxStakeLimit ,stakeLimitIncreasePerBlock }, transaction, block, log}
 * @param bind init function for database wrapper methods
 */
export const StakingLimitSetHandler = async (
  context: IEventContext,
  bind: IBind,
  secrets: ISecrets
) => {
  // Implement your event handler logic for StakingLimitSet here

  const { event, transaction, block, log } = context;
  const { maxStakeLimit, stakeLimitIncreasePerBlock } = event;

  const lidoConfigDB: Instance = bind(LidoConfig);

  let entity: ILidoConfig = await _loadLidoConfigEntity(lidoConfigDB);

  entity.max_stake_limit = maxStakeLimit.toString();
  entity.stake_limit_increase_per_block = stakeLimitIncreasePerBlock.toString();

  await lidoConfigDB.save(entity);
};
