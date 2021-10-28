import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from '../logo.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "0.5rem"
  },
});

export default function ServiceTile(props) {
  const classes = useStyles();

  const onAddClick = () => {
    props.updateCartData(props.service)
  }
  const renderDescriptors = (service) => {
    return service.descriptors.map((descriptor, index) => {
      return (
        <li key={index}>
          {typeof descriptor === "string" ? descriptor : <ul>{renderDescriptors(descriptor)}</ul>}
        </li>
      )
    })
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <img style={{ height: "5vh", borderRadius: "100%" }}src={logo} className="App-logo" alt="logo" />
          <div style={{ fontSize: '36px' }}>${props.service.price}</div>
        </div>

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.service.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="span">
            <ul>
              {renderDescriptors(props.service)}
            </ul>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={onAddClick}>
          Add
        </Button>
      </CardActions>
    </Card>
  );
}
