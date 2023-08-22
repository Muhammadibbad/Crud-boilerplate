
import axios from "axios";
const URL="http://localhost:8000";

export const addUser= async (data)=>{
    
        
           try{
            return await axios.post(`${URL}/add`,data);

           }catch(error){
                console.log("Error while calling Api",error)
           } 

        
    
}
export const getUser= async ()=>{
    
        
     try{
      return await axios.get(`${URL}/all`);

     }catch(error){
          console.log("Error while calling Api",error)
     } 

  

}

export const loadUser=async(id)=>{
     try{
          return await axios.get(`${URL}/${id}`);

     }catch(error){
          console.log("Error while calling",error)
     }
}





