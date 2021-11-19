import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FaEnvelope } from "react-icons/fa";
import { FaInbox } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import AdminRoute from "../../../AdminRoute/AdminRoute"
import "./Dashbored.css"


import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashBoaredHome from '../DashBoaredhome/DashBoaredHome';
import GiveReview from '../GiveReview/GiveReview';
import Paymoney from '../Paymoney/Paymoney';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../hooks/useAuth';
import ManageAllorders from '../ManageAllorders/ManageAllorders';
import ManageAllProducts from '../ManageAllproducts/ManageAllProducts';
import AddProduct from '../AddProduct/AddProduct';
import NavBar from "../../../Shared/Navigation/NavBar"
const drawerWidth = 340;

function Dashboared(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const {admin}=useAuth()
  const darkBlack="#000000"

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer =(
    <div>
      <Toolbar />
      <Box>
      
      {
        admin ?
        <>
        {/* <NavBar></NavBar> */}
      <Link to={`${url}/makeadmin`}><button className="btn-grad">Make Admin</button></Link>
      <Link to={`${url}/manageallorders`}><button  className="btn-grad-orders">Manage All orders</button></Link>
      <Link to={`${url}/manageallproducts`}><button className="btn-grad-products">Manage All Products</button></Link>
      <Link to={`${url}/addproduct`}><button className="btn-grad-add">Add a Products</button></Link>
      </>
      :
      <>
      <Link to={`${url}/pay`}><button className="btn-grad">Pay</button></Link>
      <br/>
      <Link to={`${url}/myorders`}><button className="btn-grad-orders">My orders</button></Link>
      <br/>
      <Link to={`${url}/givereview`}><button className="btn-grad-products">Review</button></Link>

        </>
      }
      <br/>
      <br/>
      </Box>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <FaInbox /> : <FaEnvelope />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        >
        <NavBar></NavBar>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <FaBars />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
              DashBoared
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}

          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },

            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            
          }}
        >
          {drawer}
        </Drawer>
        

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '.MuiDrawer-paperAnchorDockedLeft':{
            bgcolor: `${darkBlack}`,
            borderColor: 'secondary.main' 

            },

            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
       {/* <MySwitches></MySwitches> */}
       <Switch>
        <Route exact path={path}>
          {
            admin ?
            <MakeAdmin></MakeAdmin>
            :

          <DashBoaredHome></DashBoaredHome>
          }
        </Route>
        <Route path={`${path}/pay`}>
          <Paymoney></Paymoney>
        </Route>
        <Route path={`${path}/myorders`}>
          <DashBoaredHome></DashBoaredHome>
        </Route>
        <Route path={`${path}/givereview`}>
          <GiveReview></GiveReview>
        </Route>
        <AdminRoute path={`${path}/makeadmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/manageallorders`}>
          <ManageAllorders></ManageAllorders>
        </AdminRoute>
        <AdminRoute path={`${path}/manageallproducts`}>
          <ManageAllProducts></ManageAllProducts>
        </AdminRoute>
        <AdminRoute path={`${path}/addproduct`}>
          <AddProduct></AddProduct>
        </AdminRoute>
      </Switch>
       
      </Box>
    </Box>
  );
}

Dashboared.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboared;
