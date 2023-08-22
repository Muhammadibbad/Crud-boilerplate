
import { AppBar,Toolbar,styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header=styled(AppBar)`
  background:#000000;
  font-size:20px
`
const Tabs=styled(NavLink)`
margin-right:20px;
color:inherit;
text-decoration:none;
`

const NavBar=()=>{
    return(
        <div>
            <Header position='static'>
        <Toolbar>
          <Tabs to="/">  CodeforInterview </Tabs>
          <Tabs to="add">Adduser</Tabs>
          <Tabs to="all">AllUser</Tabs>

        </Toolbar>
      </Header>

        </div>
    )
}

export default NavBar