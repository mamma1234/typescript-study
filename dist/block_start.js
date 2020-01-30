"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlock = new Block(0, "20202020202", "", "Hello", 123456);
let blockchain = [genesisBlock];
//   let blockchain: Block[] = [genesisBlock];
console.log(blockchain);
// [ Block {
//     index: 0,
//     hash: '20202020202',
//     previousHash: '',
//     data: 'Hello',
//    timestamp: 123456 } ]
//# sourceMappingURL=block_start.js.map