import * as web3 from '../web3.js';
import { Config } from '../config.js';
import { Address, Engine } from '@aurora-is-near/engine';
import { Logger } from 'pino';
export declare abstract class SkeletonServer implements web3.Service {
    readonly config: Config;
    readonly logger: Logger;
    readonly engine: Engine;
    constructor(config: Config, logger: Logger, engine: Engine);
    protected abstract _init(): Promise<void>;
    protected _isBannedEOA(address: Address): boolean;
    protected _isBannedCA(address: Address): boolean;
    protected _enforceBans(address: Address, method: string): void;
    protected _enforceEOABan(address: Address, method: string): void;
    protected _enforceCABan(address: Address, method: string): void;
    protected _scanForCABans(bytes: string): string | null;
    protected _banIP(ip: string, reason?: string): Promise<void>;
    web3_clientVersion(_request: any): Promise<string>;
    web3_sha3(_request: any, input: web3.Data): Promise<web3.Data>;
    net_listening(_request: any): Promise<boolean>;
    net_peerCount(_request: any): Promise<web3.Quantity>;
    net_version(_request: any): Promise<string>;
    eth_accounts(_request: any): Promise<web3.Data[]>;
    eth_blockNumber(_request: any): Promise<web3.Quantity>;
    eth_call(_request: any, _transaction: web3.TransactionForCall, _blockNumber?: web3.Quantity | web3.Tag): Promise<web3.Data>;
    eth_chainId(_request: any): Promise<web3.Quantity>;
    eth_coinbase(_request: any): Promise<web3.Data>;
    eth_compileLLL(_request: any, _code: string): Promise<web3.Data>;
    eth_compileSerpent(_request: any, _code: string): Promise<web3.Data>;
    eth_compileSolidity(_request: any, _code: string): Promise<web3.Data>;
    eth_estimateGas(_request: any, _transaction: web3.TransactionForCall, _blockNumber?: web3.Quantity | web3.Tag): Promise<web3.Quantity>;
    eth_gasPrice(_request: any): Promise<web3.Quantity>;
    eth_getBalance(_request: any, _address: web3.Data, _blockNumber?: web3.Quantity | web3.Tag): Promise<web3.Quantity>;
    eth_getBlockByHash(_request: any, _blockHash: web3.Data, _fullObject?: boolean): Promise<web3.BlockResult | null>;
    eth_getBlockByNumber(_request: any, _blockNumber: web3.Quantity | web3.Tag, _fullObject?: boolean): Promise<web3.BlockResult | null>;
    eth_getBlockTransactionCountByHash(_request: any, _blockHash: web3.Data): Promise<web3.Quantity | null>;
    eth_getBlockTransactionCountByNumber(_request: any, _blockNumber: web3.Quantity | web3.Tag): Promise<web3.Quantity | null>;
    eth_getCode(_request: any, _address: web3.Data, _blockNumber: web3.Quantity | web3.Tag): Promise<web3.Data>;
    eth_getCompilers(_request: any): Promise<string[]>;
    eth_getFilterChanges(_request: any, _filterID: web3.Quantity): Promise<web3.LogObject[]>;
    eth_getFilterLogs(_request: any, _filterID: web3.Quantity): Promise<web3.LogObject[]>;
    eth_getLogs(_request: any, _filter: web3.FilterOptions): Promise<web3.LogObject[]>;
    eth_getProof(_request: any, _address: web3.Data, _keys: web3.Data[], _blockNumber: web3.Quantity | web3.Tag): Promise<web3.ProofResult>;
    eth_getStorageAt(_request: any, _address: web3.Data, _key: web3.Quantity, _blockNumber: web3.Quantity | web3.Tag): Promise<web3.Data>;
    eth_getTransactionByBlockHashAndIndex(_request: any, _blockHash: web3.Data, _transactionIndex: web3.Quantity): Promise<web3.TransactionResult | null>;
    eth_getTransactionByBlockNumberAndIndex(_request: any, _blockNumber: web3.Quantity | web3.Tag, _transactionIndex: web3.Quantity): Promise<web3.TransactionResult | null>;
    eth_getTransactionByHash(_request: any, _transactionHash: web3.Data): Promise<web3.TransactionResult | null>;
    eth_getTransactionCount(_request: any, _address: web3.Data, _blockNumber: web3.Quantity | web3.Tag): Promise<web3.Quantity>;
    eth_getTransactionReceipt(_request: any, _transactionHash: string): Promise<web3.TransactionReceipt | null>;
    eth_getUncleByBlockHashAndIndex(_request: any, _blockHash: web3.Data, _uncleIndex: web3.Quantity): Promise<web3.BlockResult | null>;
    eth_getUncleByBlockNumberAndIndex(_request: any, _blockNumber: web3.Quantity | web3.Tag, _uncleIndex: web3.Quantity): Promise<web3.BlockResult | null>;
    eth_getUncleCountByBlockHash(_request: any, _blockHash: web3.Data): Promise<web3.Quantity | null>;
    eth_getUncleCountByBlockNumber(_request: any, _blockNumber: web3.Quantity | web3.Tag): Promise<web3.Quantity | null>;
    eth_getWork(_request: any): Promise<web3.Data[]>;
    eth_hashrate(_request: any): Promise<web3.Quantity>;
    eth_mining(_request: any): Promise<false>;
    eth_newBlockFilter(_request: any): Promise<web3.Quantity>;
    eth_newFilter(_request: any, _filter: web3.FilterOptions): Promise<web3.Quantity>;
    eth_newPendingTransactionFilter(_request: any): Promise<web3.Quantity>;
    eth_pendingTransactions(_request: any): Promise<Record<string, string | number | null>[]>;
    eth_protocolVersion(_request: any): Promise<string>;
    eth_sendRawTransaction(_request: any, _transaction: web3.Data): Promise<web3.Data>;
    eth_sendTransaction(_request: any, _transaction: web3.TransactionForSend): Promise<web3.Data>;
    eth_sign(_request: any, _account: web3.Data, _message: web3.Data): Promise<web3.Data>;
    eth_signTransaction(_request: any, _transaction: web3.TransactionForSend): Promise<web3.Data>;
    eth_signTypedData(_request: any, _address: web3.Data, _data: web3.TypedData): Promise<web3.Data>;
    eth_submitHashrate(_request: any, _hashrate: web3.Quantity, _clientID: web3.Quantity): Promise<false>;
    eth_submitWork(_request: any, _nonce: web3.Data, _powHash: web3.Data, _mixDigest: web3.Data): Promise<false>;
    eth_syncing(_request: any): Promise<false>;
    eth_uninstallFilter(_request: any, _filterID: web3.Quantity): Promise<boolean>;
    txpool_content(_request: any): Promise<Record<string, any>>;
    txpool_inspect(_request: any): Promise<Record<string, any>>;
    txpool_status(_request: any): Promise<Record<string, number>>;
    parity_pendingTransactions(_request: any, _limit?: number | null, _filter?: Record<string, any>): Promise<any[]>;
}
