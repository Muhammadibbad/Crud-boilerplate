import { FormControl, FormGroup, InputLabel,Input, Typography,styled, Button } from "@mui/material";
import { useState } from "react";
import { addUser } from "./service/api";
import {useNavigate} from "react-router-dom"

const Container=styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto;
`
const defaultval={
    name:"",
    username:"",
    email:"",
    phone:""    
}
const AddUser=()=>{
    const [user,setUser]=useState(defaultval)
    const navigate=useNavigate()

  const handleChange=(e)=>{
    console.log(e.target.value)
   setUser({...user,[e.target.name]:e.target.value})
   console.log(user)
  }

 const addUserDetail= async (e)=>{
   await addUser(user)
   navigate("/all")
   
 } 
    return(
        <div>
            
            <Container>
            <Typography variant="h3">Add User</Typography>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e)=>handleChange(e)} name="name"></Input>
                </FormControl>
                <FormControl>
                    <InputLabel>Username</InputLabel>
                    <Input onChange={(e)=>handleChange(e)} name="username"></Input>
                </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e)=>handleChange(e)} name="email"></Input>
                </FormControl>
                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input onChange={(e)=>handleChange(e)} name="phone" ></Input>
                </FormControl>
                <Button onClick={(e)=>addUserDetail(e)} variant="contained">Add User</Button>
            </Container>

        </div>
    )
}

export default AddUser