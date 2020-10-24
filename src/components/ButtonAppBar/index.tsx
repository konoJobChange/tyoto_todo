import React, { useCallback, useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Avatar,
  AppBar,
  Button,
  Toolbar,
  Typography,
  Popover,
  List,
  ListItemText,
  ListItem,
  Divider,
  ListItemIcon,
  Link,
} from '@material-ui/core';
import { deepPurple, red } from '@material-ui/core/colors';
import { useAuth } from 'src/modules/hooks/useAuth';
import { useRouter } from 'next/router';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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
    logout: {
      color: red[500],
    },
  }),
);

const ButtonAppBar = () => {
  const classes = useStyles();
  const { login: handleLogin, logout: handleLogout, user } = useAuth();
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(false);
  const [popoverEl, setPopoverEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  useEffect(() => {
    if (!user) {
      setIsLogin(false);
      return;
    }
    setIsLogin(true);
  }, [user, setIsLogin]);

  const goToProfile = () => router.push('/profile');

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setPopoverEl(event.currentTarget);
    },
    [setPopoverEl],
  );

  const handleClose = () => {
    setPopoverEl(null);
  };

  const isOpen = Boolean(popoverEl);
  const popoverId = isOpen ? 'menu-popover' : undefined;

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link href="#" onClick={() => router.push('/')}>
              Todo List
            </Link>
          </Typography>

          {!isLogin ? (
            <Button
              color="secondary"
              onClick={handleLogin}
              className={classes.login}
            >
              Login
            </Button>
          ) : (
            <Button onClick={handleClick} aria-describedby={popoverId}>
              <Avatar
                className={classes.purple}
                alt={user?.displayName ?? undefined}
                src={user?.photoURL ?? undefined}
              />
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Popover
        id={popoverId}
        open={isOpen}
        anchorEl={popoverEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <List>
          <ListItem key="profile" button onClick={goToProfile}>
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText>プロフィール</ListItemText>
          </ListItem>
          <Divider />
          <ListItem key="logout" button onClick={handleLogout}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText className={classes.logout}>ログアウト</ListItemText>
          </ListItem>
        </List>
      </Popover>
    </div>
  );
};

export default ButtonAppBar;
