import { ArbitrumSequencerFeed } from "./ArbitrumSequencerFeed";
import { writeFileSync } from "fs";


const seqFeed = new ArbitrumSequencerFeed()

async function main(datacenter:string){
    seqFeed.onUpdate(tx => {
        const { data, to, value,hash,chainId,gasPrice,gasLimit,maxFeePerGas,maxPriorityFeePerGas,nonce } = tx
        const now = new Date()
        const timestamp = now.getTime()
        const txData :{hash:string | null,timestamp:number} = {
            hash:hash,
            timestamp:timestamp
        }
       // console.log(txData)  
        writeFileSync(`${datacenter}`,`${JSON.stringify(txData)}, \n`,{flag:"a+"})
    })
    seqFeed.init()
}


const datacenterLocation = ""
//main(datacenterLocation)
try{
    main(datacenterLocation)
}catch(err:any){
    console.log(err)
}


