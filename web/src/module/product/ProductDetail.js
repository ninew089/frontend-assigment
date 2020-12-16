import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, IconButton, Divider } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { NavLink } from 'react-router-dom'
import { Facebook } from 'react-sharingbuttons'
import LinkIcon from '@material-ui/icons/Link';
import 'react-sharingbuttons/dist/main.css'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 16
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1000,
  },
  image: {
    [theme.breakpoints.only('xs')]: {
      width: 60,
      height: 60,

    },
    width: 100,
    height: 100,
    margin: 4
  },
  img: {
    [theme.breakpoints.only('lg')]: {
      width: '400px',
      height: '400px',
      objectFit: 'cover'
    },
    margin: 'auto',
    display: 'block',
    width: '100%',
    height: '400px',


  }, desc: {

    overflow: 'hidden',
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',

    color: '#434a54',

  }
  , dot: {
    height: '10px',
    width: '10px',
    backgroundColor: '#bbb',
    borderRadius: ' 50%',
    display: 'inline-block',
    marginRight: 4
  },
  category: {
    borderRadius: 48,
    fontWeight: 500,

    color: '#0070a7'
  }, items: {

    fontSize: 14,
    color: 'black',
  }
}));

export default function ComplexGrid({ items }) {
  const classes = useStyles();


  return (
    <div>


      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>

              <img className={classes.img} alt="complex" src={items.photos[0]} />

            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Box fontSize={24} fontWeight={600} >
                    <a href={items.url} style={{ textDecoration: 'none', color: '#141415de' }}>
                      {items.title}
                    </a>

                  </Box>
                  <Divider />
                  <Grid item container direction="row" alignItems='center' >
                    <div className={classes.category}>หมวดหมู่ :</div>
                    {items.tags.map((text, index) => (
                      <NavLink to={`/?tags_like=${text}`} style={{ textDecoration: 'none', margin: 8 }} key={index}>
                       <div className={classes.items}  >
                      <div className={classes.dot} />{text}
                       </div>
                    </NavLink>
                    )
                    )}

                  </Grid>
                  <Box fontSize={16} fontWeight={300} className={classes.desc}>
                    &nbsp; &nbsp;  {items.description}

                  </Box>
                  <a href={items.url} style={{ color: '#0070a7', fontWeight: 600 }}>อ่านเพิ่มเติม{'>>'}</a>

                </Grid>
                <Grid item container direction="row" justify="flex-start" >
                  <img className={classes.image} alt="complex" src={items.photos[1]} />
                  <img className={classes.image} alt="complex" src={items.photos[2]} />
                  <img className={classes.image} alt="complex" src={items.photos[3]} />
                </Grid>
                <Grid item container direction="row" justify="flex-start" alignItems='center' >
                  <Box fontSize={16} fontWeight={500}>share :</Box>

                  <Facebook url={items.url} />

                  <IconButton onClick={() => { navigator.clipboard.writeText(items.url) }}>
                    <LinkIcon />
                  </IconButton>
                </Grid>
              </Grid>

            </Grid>
          </Grid>
        </Paper>
      </div>




    </div>
  );
}
