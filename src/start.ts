import { ArbitrumSequencerFeed } from "./ArbitrumSequencerFeed";
import { writeFileSync } from "fs";


const seqFeed = new ArbitrumSequencerFeed()
import ethers from 'ethers'



seqFeed.onUpdate(tx => {
    const { data, to, value,hash,chainId,gasPrice,gasLimit,maxFeePerGas,maxPriorityFeePerGas,nonce } = tx

    const now = new Date()
    const timestamp = now.getTime()


    const txData :{hash:string | null,timestamp:number} = {
        hash:hash,
        timestamp:timestamp
    }
    
    writeFileSync("tx.json",`${JSON.stringify(txData)}, \n`,{flag:"a+"})
})


seqFeed.init()