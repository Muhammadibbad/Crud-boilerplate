import mongoose from "mongoose";


const Connection= async (username,password)=>{
    const URL= `mongodb://${username}:${password}@ac-m4djzfn-shard-00-00.rxinjfa.mongodb.net:27017,ac-m4djzfn-shard-00-01.rxinjfa.mongodb.net:27017,ac-m4djzfn-shard-00-02.rxinjfa.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-2g8jzr-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
        mongoose.set('strictQuery',false);
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true, })
        console.log("Database Connected")
    }catch(error){
        console.log("Error while connect database",error)
    }

}

export default Connection;