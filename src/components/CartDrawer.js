import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Badge from '@mui/material/Badge';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EmailForm from './EmailForm'
import { getCartTotal } from '../utils/Cart'

export default function TemporaryDrawer(props) {
  const { cartData } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const list = (cartData) => (
    <div>
      <List>
        {cartData?.map((text, index) => {
          console.log('text', text);
          return (
          <ListItem button key={index}>
            <div style={{ padding: "20px" }}>${text.price}</div>
            <div>{text.title}</div>
          </ListItem>
        )})}
      </List>
      <Divider />
      <List>
          <ListItem>
            Total: ${getCartTotal(cartData)}
          </ListItem>
      </List>
    </div>
  );

  const containerStyle = {
    display: "block",
    width: "33vw",
    textAlign: "end",
    position: "fixed",
  }

  return (
    <div style={containerStyle}>
      <Tooltip title="Shopping Cart">
        <Badge badgeContent={cartData.length}>
          <IconButton onClick={toggleDrawer} style={{ right: "75px" }}>
            <ShoppingCartRoundedIcon style={{ height: '48px', width: '48px', color: 'white',   filter: "drop-shadow(1px 1px 0px black) drop-shadow(-1px 1px 0px black) drop-shadow(1px -1px 0px black) drop-shadow(-1px -1px 0px black)" }} />
          </IconButton>
        </Badge>
      </Tooltip>
          <Drawer anchor={'right'} open={open} onClose={toggleDrawer}>
            {list(cartData)}
            <EmailForm { ...{ cartData } } />
          </Drawer>
    </div>
  );
}
