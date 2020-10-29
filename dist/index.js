"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timeStamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timeStamp = timeStamp;
    }
}
Block.caclulateBlockHash = (index, previousHash, timeStamp, data) => CryptoJS.SHA256(index + previousHash + timeStamp + data).toString();
Block.validateStructure = (aBlock) => typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.timeStamp === "number" &&
    typeof aBlock.data === "string";
;
const genesisBlock = new Block(0, "202010280101", "", "hello", 2322);
let blockchain = [genesisBlock];
const getBlockchain = () => blockchain;
const getLatestBlock = () => blockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previousBlock = getLatestBlock();
    const newIndex = previousBlock.index + 1;
    const newTimeStamp = getNewTimeStamp();
    const newHash = Block.caclulateBlockHash(newIndex, previousBlock.hash, newTimeStamp, data);
    const newBlock = new Block(newIndex, newHash, previousBlock.hash, data, newTimeStamp);
    addBlock(newBlock);
    return newBlock;
};
const getHashforBlock = (aBlock) => Block.caclulateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timeStamp, aBlock.data);
const isBlockValid = (cadidateBlock, previousBlock) => {
    if (Block.validateStructure(cadidateBlock)) {
        return false;
    }
    else if (previousBlock.index + 1 !== cadidateBlock.index) {
        return false;
    }
    else if (previousBlock.hash !== cadidateBlock.previousHash) {
        return false;
    }
    else if (getHashforBlock(cadidateBlock) !== cadidateBlock.hash) {
        return false;
    }
    else {
        return true;
    }
};
const addBlock = (cadidateBlock) => {
    if (isBlockValid(cadidateBlock, getLatestBlock())) {
        blockchain.push(cadidateBlock);
    }
};
createNewBlock("second block");
createNewBlock("third block");
createNewBlock("fourth block");
console.log(blockchain);
//# sourceMappingURL=index.js.map