import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CodeIcon from '@material-ui/icons/Code';
import { NavLink, Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <CodeIcon className={classes.menuButton}/>
            <Typography variant="h6" className={classes.title}>
                <Link className={classes.link} to="/">EZ SHOP</Link> 
            </Typography>

            <NavLink className={classes.link} to="/todos" activeClassName="active-menu">
              <Button color="inherit">Todos</Button>
            </NavLink>
     
            <NavLink className={classes.link} to="/albums" activeClassName="active"> 
              <Button color="inherit">Albums</Button> 
            </NavLink>
            
      
            <Button color="inherit">Register</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
