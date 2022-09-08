import React,{useContext,useState} from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import { NavLink } from "react-router-dom";
import { GlobalContext } from './../../GlobalContext';
import axios from 'axios'
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
import Button from "@mui/material/Button";



const useStyles = makeStyles((theme) => ({
  links: {
    marginLeft: theme.spacing(5),
    display: "flex",
    color: "white"
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  Navlink: {
    textDecoration: "none",
    color: "white",
    // fontSize: "20px",
    marginLeft: theme.spacing(2),
    "&:hover": {
      color: "yellow",
      // borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {

  const context = useContext(GlobalContext);

  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);

  const [isLogged,setIsLogged] = context.authApi.isLogged;
  const [isAdmin,setIsAdmin] = context.authApi.isAdmin;
  const [isUser,setIsUser] = context.authApi.isUser;

  const logoutUser = async () => {
    if(window.confirm(`Are u sure to logout`)){
      await axios.get('/api/v1/auth/logout');
    localStorage.clear();
    if(isAdmin){
      setIsAdmin(false);
    }
    if(isUser){
      setIsUser(false);
    }
    setIsLogged(false);
    toast.success("logout success")
    navigate('/');
    window.location.reload();
    }else {
      toast.warning("logout terminated")
    }
  }


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const commonRoute = () =>{

    return (
      <div>
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="outlined"
        >
          <NavLink to='#' className={classes.Navlink} >
            Account
          </NavLink>
          </Button>

          <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
            <MenuItem onClick={handleClose}><NavLink to={'/profile'} >Profiles</NavLink></MenuItem>

            <MenuItem onClick={handleClose}>
              {
                isUser ? <NavLink to={`/user/dashboard`} >User dashboard</NavLink> : null
              }
              {
                isAdmin ? <NavLink to={`/admin/dashboard`} >Admin dashboard</NavLink> : null
              }
            </MenuItem>
            <MenuItem onClick={handleClose}><NavLink to={`/orders`} >Orders</NavLink></MenuItem>
              
            {/* <li className='dropdown-divider'></li> */}

            <MenuItem onClick={handleClose}>
              <NavLink to={`/`} onClick={logoutUser} >Logout</NavLink>
            </MenuItem>
          </Menu>
       
      </div>
    )
  }

  
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="sticky">
      <CssBaseline />
      <Toolbar>
        
        <Typography variant="h4" className={classes.logo} >
          {/* Navbar */}
        {isMobile ? " " : " Dev-Kart"}
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <Typography  >
             
            <Button  ><NavLink to={"/"} className={classes.Navlink} >
              Home
            </NavLink></Button>
            <Button><NavLink to={"/explore"} className={classes.Navlink}>
              Explore
            </NavLink></Button>
            <Button><NavLink to={"/contact"} className={classes.Navlink} >
              Contact
            </NavLink></Button>
           
          </Typography>
        )}
        {
          isLogged ? commonRoute() : (
            <Typography >
            <Button><NavLink to={"/login"} className={classes.Navlink}>
              Login
            </NavLink></Button>
            <Button><NavLink to={"/register"} className={classes.Navlink}>
              Register
            </NavLink></Button>
           
          </Typography>
          )
        }
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;

