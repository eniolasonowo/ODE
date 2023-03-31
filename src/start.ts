import { ArbitrumSequencerFeed } from "./ArbitrumSequencerFeed";
import { writeFileSync } from "fs";


const seqFeed = new ArbitrumSequencerFeed()

async function main(datacenter:string){
    seqFeed.onUpdate(async(tx )=> {
        const { data, to, value,hash,chainId,gasPrice,gasLimit,maxFeePerGas,maxPriorityFeePerGas,nonce,type,typeName } = tx
        const now = new Date()
        const timestamp = now.getTime()
        const txData :{hash:string | null,timestamp:number} = {
            hash:hash,
            timestamp:timestamp
        }
        if(to === "0xa3Fb9C1B0355F5b736BE139332eac8E4F6030356"){

            console.log(hash,type,typeName,maxPriorityFeePerGas,maxFeePerGas,)  
        }
      //  writeFileSync(`${datacenter}`,`${JSON.stringify(txData)}, \n`,{flag:"a+"})
    })
    seqFeed.init()
}


const datacenterLocation = ""
//main(datacenterLocation)
try{
    main(datacenterLocation)
}catch(err:any){
    //console.log(err)
}


