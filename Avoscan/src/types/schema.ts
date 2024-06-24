// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import { Document } from "@blockflow-labs/utils";

export class avoData {
  static entity = "avoData";
  static schema = {
    id: { type: "String", index: true },
    transactionHash: "string",
    broadcaster: "string",
    status: "string",
    time: "string",
    network: "string",
    actions: [
      { value: "string", to: "string", from: "string", address: "string" },
    ],
    user: "string",
    avocadoWallet: "string",
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
    chainId: { type: "String", index: true },
    instanceId: { type: "String", index: true },
  };
}

import { String, Array } from "@blockflow-labs/utils";

type Action = {
  value: string;
  to: string;
  from: string;
  address: string;
};

export interface IavoData extends Document {
  id: String;
  transactionHash: string;
  broadcaster: string;
  status: string;
  time: string;
  network: string;
  actions: [Action];
  user: string;
  avocadoWallet: string;
  blocknumber: String;
  entityId: String;
  instanceId: String;
  chainId: String;
}
