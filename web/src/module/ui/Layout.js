import React from 'react';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import logo from '../../assets/image/wongnai.webp'
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Box, AppBar, CssBaseline, Toolbar, Typography, Divider, IconButton } from '@material-ui/core';

import InputBase from '@material-ui/core/InputBase';
import { useForm, Controller } from "react-hook-form";
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Route from './Route'
import '../../assets/css/style.css'
import { useHistory } from 'react-router-dom'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: '#f3f4f5'

  },
  appBar: {

    background: '#fff',
    justify: 'cener',
    borderBottom: '2px solid rgb(0, 112, 168)',
    marginBottom: 10
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    height: 100
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  root_search: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.only('xs')]: {
      width: 280,
    },

    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  logo: {
    padding: 4
  }, title: {
    color: '#096fa9'
  }
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const history = useHistory()
  const themes = createMuiTheme({
    typography: {
      fontFamily: ['Prompt', 'sans-serif'].join(','),
    }
  })

  const { control, handleSubmit } = useForm();
  const onSubmit = search => {

    history.push(`/search?q=${search.q}`)


  }

  return (
    <ThemeProvider theme={themes}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classes.appBar}
        >
          <Toolbar>

            <Typography variant="h6" noWrap>
              <img src={logo} alt="wongnai" height={54} />
            </Typography>
          </Toolbar>
        </AppBar>



        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Toolbar className={classes.drawerHeader} />

          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >


            <Box fontSize={48} className={classes.title}>
              เที่ยวกัน
          </Box>

          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >

            <Paper component="form" className={classes.root_search}>
              <Controller
                as={
                  <InputBase
                    className={classes.input}


                    placeholder="หาที่เที่ยวเเล้วไปกัน..."
                  />
                }
                control={control}
                name="q"
              />

              <Divider className={classes.divider} orientation="vertical" />
              <IconButton className={classes.iconButton} onClick={handleSubmit(onSubmit)}>
                <SearchIcon />
              </IconButton>
            </Paper>

          </Grid>
          <Route />

        </Grid>



      </div>
    </ThemeProvider>
  );
}

