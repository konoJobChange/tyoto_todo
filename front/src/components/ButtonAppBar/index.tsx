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
      color: '#333',
      flexGrow: 1,
    },
    bar: {
      backgroundColor: '#81c784',
    },
    login: {
      color: '#333',
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
  }),
);

const ButtonAppBar = () => {
  const classes = useStyles();
  const { login: handleLogin, logout: handleLogout, user } = useAuth();

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (!user) {
      setIsLogin(false);
      return;
    }
    setIsLogin(true);
  }, [user, setIsLogin]);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Todo List
          </Typography>

          {!isLogin ? (
            <Button color="secondary" onClick={handleLogin} className={classes.login}>
              Login
            </Button>
          ) : (
            <Button onClick={handleLogout}>
              <Avatar
                className={classes.purple}
                alt={firstByteInUserName}
                src={user ? user.photoURL || undefined : undefined}
              />
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ButtonAppBar;
