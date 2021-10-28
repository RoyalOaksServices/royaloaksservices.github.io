import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function FooterNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');
  const history = useHistory();

  const navigate = (newValue) => {
    history.push(newValue);
  }

  const handleChange = (event, newValue) => {
    navigate(newValue)
    window.scrollTo(0,0);
    setValue(newValue);
  };

  return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <BottomNavigation value={value} onChange={handleChange} className={classes.root} style={{ backgroundColor: '#1A3309', width: '40vw' }}>
            <BottomNavigationAction label="Home" value="" icon={<HomeIcon fontSize="large" style={{ fill: 'white' }} />} />
            <BottomNavigationAction label="Bio" value="biography" icon={<EmojiPeopleIcon fontSize="large" style={{ fill: 'white' }} />} />
            <BottomNavigationAction label="Services" value="services" icon={<FavoriteIcon fontSize="large" style={{ fill: 'white' }} />} />
            <BottomNavigationAction label="Donations" value="donate" icon={<LoyaltyIcon fontSize="large" style={{ fill: 'white' }} />} />
        </BottomNavigation>
        <div style={{ 
            backgroundColor: 'white', 
            color: '#1A3309', 
            height: '5vh',
            width: "100vw",
            fontFamily: "Apple Chancery",
            textAlign: "center",
            fontSize: "28px", 
        }}>
            "Turning Dreams Into Reality"
        </div>
      </div>
  );
}