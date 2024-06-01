// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import { Document } from "@blockflow-labs/utils";

export class burnTransactionsTable {
  static entity = "burnTransactionsTable";
  static schema = {
    id: { type: "String", index: true },
    transactionHash: "string",
    sourceDomain: "string",
    destinationDomain: "string",
    amount: "number",
    mintRecipient: "string",
    messageSender: "string",
    timeStamp: "string",
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
    chainId: { type: "String", index: true },
    instanceId: { type: "String", index: true },
  };
}

export class mintTransactionsTable {
  static entity = "mintTransactionsTable";
  static schema = {
    id: { type: "String", index: true },
    transactionHash: "string",
    sourceDomain: "string",
    destinationDomain: "string",
    mintRecipient: "string",
    timeStamp: "string",
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
    chainId: { type: "String", index: true },
    instanceId: { type: "String", index: true },
  };
}

export class attestationTable {
  static entity = "attestationTable";
  static schema = {
    id: { type: "String", index: true },
    attestationHash: "string",
    messageHash: "string",
    timeStamp: "string",
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
    chainId: { type: "String", index: true },
    instanceId: { type: "String", index: true },
  };
}

export class DomainsTable {
  static entity = "DomainsTable";
  static schema = {
    id: { type: "String", index: true },
    domainName: "string",
    chainid: "number",
    tokenAddress: "string",
    permessageburnlimit: "number",
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
    chainId: { type: "String", index: true },
    instanceId: { type: "String", index: true },
  };
}

import { String, Array } from "@blockflow-labs/utils";

export interface IburnTransactionsTable extends Document {
  id: String;
  transactionHash: string;
  sourceDomain: string;
  destinationDomain: string;
  amount: number;
  mintRecipient: string;
  messageSender: string;
  timeStamp: string;
  blocknumber: String;
  entityId: String;
  instanceId: String;
  chainId: String;
}

export interface ImintTransactionsTable extends Document {
  id: String;
  transactionHash: string;
  sourceDomain: string;
  destinationDomain: string;
  mintRecipient: string;
  timeStamp: string;
  blocknumber: String;
  entityId: String;
  instanceId: String;
  chainId: String;
}

export interface IattestationTable extends Document {
  id: String;
  attestationHash: string;
  messageHash: string;
  timeStamp: string;
  blocknumber: String;
  entityId: String;
  instanceId: String;
  chainId: String;
}

export interface IDomainsTable extends Document {
  id: String;
  domainName: string;
  chainid: number;
  tokenAddress: string;
  permessageburnlimit: number;
  blocknumber: String;
  entityId: String;
  instanceId: String;
  chainId: String;
}