import {
  IEventContext,
  IBind,
  Instance,
  ISecrets,
} from "@blockflow-labs/utils";
import { ILidoConfig, LidoConfig } from "../../../types/schema";
import { _loadLidoConfigEntity } from "../../../helpers";

/**
 * @dev Event::ProtocolContactsSet(address oracle, address treasury, address insuranceFund)
 * @param context trigger object with contains {event: {oracle ,treasury ,insuranceFund }, transaction, block, log}
 * @param bind init function for database wrapper methods
 */
export const ProtocolContactsSetHandler = async (
  context: IEventContext,
  bind: IBind,
  secrets: ISecrets
) => {
  // Implement your event handler logic for ProtocolContactsSet here

  const { event, transaction, block, log } = context;
  const { oracle, treasury, insuranceFund } = event;

  const lidoConfigDB: Instance = bind(LidoConfig);

  let entity: ILidoConfig = await _loadLidoConfigEntity(lidoConfigDB);

  entity.insurance_fund = insuranceFund.toString().toLowerCase();
  entity.oracle = oracle.toString().toLowerCase();
  entity.treasury = treasury.toString().toLowerCase();

  await lidoConfigDB.save(entity);
};
