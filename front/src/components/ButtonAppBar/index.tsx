import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Avatar, AppBar, Button, Toolbar, Typography, CircularProgress } from '@material-ui/core';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { useAuth } from 'src/modules/hooks/useAuth';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
  }),
);

interface ButtonAppBar {
  isLogin: boolean;
  avatarImage: string;
}

const ButtonAppBar = ({ isLogin, avatarImage }: ButtonAppBar) => {
  const classes = useStyles();
  const { login } = useAuth();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Todo List
          </Typography>

          {!isLogin ? (
            <Button color="inherit" onClick={login}>
              Login
            </Button>
          ) : (
            <>
              {avatarImage === 'orange' && <Avatar className={classes.orange}>A</Avatar>}
              {avatarImage === 'purple' && <Avatar className={classes.orange}>B</Avatar>}
              {avatarImage === '' && <Avatar>D</Avatar>}
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ButtonAppBar;
