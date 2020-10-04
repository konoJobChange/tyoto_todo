import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Avatar, AppBar, Button, Toolbar, Typography } from '@material-ui/core';
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

const ButtonAppBar = () => {
  const classes = useStyles();
  const { login: handleLogin, user } = useAuth();

  const [isLogin, setIsLogin] = useState(false);
  const [firstByteInUserName, setFirstByteInUserName] = useState('');

  useEffect(() => {
    if (!user) {
      return;
    }
    setIsLogin(true);

    if (!user.displayName) {
      return;
    }
    setFirstByteInUserName(user.displayName.charAt(0));
  }, [user, user?.displayName]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Todo List
          </Typography>

          {!isLogin ? (
            <Button color="inherit" onClick={handleLogin}>
              Login
            </Button>
          ) : (
            <>
              <Avatar>{firstByteInUserName}</Avatar>
              <Avatar className={classes.orange}>A</Avatar>
              <Avatar className={classes.purple}>A</Avatar>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ButtonAppBar;
