import * as CryptoJS from "crypto-js";
class Block{
    public index:number;
    public hash: string;
    public previousHash:string;
    public data : string;
    public timeStamp : number;

    static caclulateBlockHash = (
        index:number, 
        previousHash:string, 
        timeStamp:number, 
        data:string
    ): string => CryptoJS.SHA256(index+previousHash+timeStamp+data).toString();

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
        return newBlock;
}

console.log(createNewBlock("hello"), createNewBlock("bye bye"));

export {};

