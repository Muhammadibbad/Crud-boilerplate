import { TableCell, TableHead, TableRow,Table, TableBody,Button } from "@mui/material"
import { useState } from "react";
import { useEffect } from "react";
import {getUser} from "./service/api.js";
import { Link } from "react-router-dom";




const AllUser=()=>{
 
    const [users,setUsers]=useState([]);

useEffect(()=>{
  getAllUser();
}
 
,[])

const getAllUser= async ()=>{
    let response= await getUser();
    setUsers(response.data)
    console.log(response.data)
    
    
}

    return(
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                   { users.map((user,i) => (
                           <TableRow>
                            <TableCell >{user._id}</TableCell>
                            <TableCell >{user.name}</TableCell>
                            <TableCell >{user.username}</TableCell>
                            <TableCell >{user.email}</TableCell>
                            <TableCell >{user.phone}</TableCell>
                            
                           <TableCell><Button variant="contained" component={Link} to={`/edit/${user._id}`}>Edit </Button></TableCell>
                            <TableCell><Button variant="contained" color="secondary" style={{marginRight:100}}>Delete </Button></TableCell>
                            
                           </TableRow>
))
                    }
                </TableBody>


            </Table>

        </div>
    )
}

export default AllUser