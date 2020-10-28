"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timeStamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timeStamp = timeStamp;
    }
}
;
const genesisBlock = new Block(0, "202010280101", "", "hello", 2322);
let blockchain = [genesisBlock];
console.log(blockchain);
//# sourceMappingURL=index.js.map