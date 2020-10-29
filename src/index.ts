import * as CryptoJS from "crypto-js";

class Block{
   
    static caclulateBlockHash = (
        index:number, 
        previousHash:string, 
        timeStamp:number, 
        data:string
    ): string => CryptoJS.SHA256(index+previousHash+timeStamp+data).toString();
    
        static validateStructure = (aBlock : Block) : boolean => 
        typeof aBlock.index ==="number" && 
        typeof aBlock.hash ==="string" && 
        typeof aBlock.previousHash === "string" &&
        typeof aBlock.timeStamp === "number" &&
        typeof aBlock.data === "string" ;
        
        public index:number;
        public hash: string;
        public previousHash:string;
        public data : string;
        public timeStamp : number;

    constructor(
        index:number,
        hash: string,
        previousHash:string,
        data : string,
        timeStamp : number
    ){
        this.index = index ;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data ;
        this.timeStamp = timeStamp
    }
};

const genesisBlock:Block = new Block(0,"202010280101","","hello",2322);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length-1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime()/ 1000);

const createNewBlock=(data:string): Block=>{
    const previousBlock : Block = getLatestBlock();
    const newIndex : number = previousBlock.index + 1;
    const newTimeStamp : number = getNewTimeStamp();
    const newHash : string = Block.caclulateBlockHash(
        newIndex, 
        previousBlock.hash,
        newTimeStamp,
         data
         );
    const newBlock : Block = new Block(
        newIndex, 
        newHash, 
        previousBlock.hash, 
        data, 
        newTimeStamp
    );
    addBlock(newBlock);
    return newBlock;
}

const getHashforBlock = (aBlock :Block):string =>
     Block.caclulateBlockHash(
         aBlock.index, 
         aBlock.previousHash, 
         aBlock.timeStamp, 
         aBlock.data
    );

const isBlockValid = (cadidateBlock : Block, previousBlock:Block) : boolean =>{
    if(Block.validateStructure(cadidateBlock) ){
        return false;
    }else if(previousBlock.index + 1 !== cadidateBlock.index  ){
        return false;
    }else if(previousBlock.hash !== cadidateBlock.previousHash){
        return false;
    }else if( getHashforBlock(cadidateBlock)!== cadidateBlock.hash){
        return false;
    }else{
        return true;
    }
};

const addBlock = (cadidateBlock : Block ) : void =>{
    if(isBlockValid(cadidateBlock, getLatestBlock())){
        blockchain.push(cadidateBlock);
    }
};

createNewBlock("second block");
createNewBlock("third block");
createNewBlock("fourth block");

console.log(blockchain);
export {};