import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Grid, Container, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import { createTheme, ThemeProvider,  styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';

export default function Household() {
    
  
    return (
      <>
        <Helmet>
          <title> Household Storage| Sepulkre </title>
        </Helmet>
  
        <Typography variant="h4" align="center" sx={{ mb: 5 }}>
        <strong style={{  color: "#f46424" }}>HOUSEHOLD STORAGE</strong>
        </Typography>
        <Grid>
        <Typography variant="h6" sx={{ mb: 5 }}>
        For the safe and secure personal storage space of any precious belongings, Sepulkre offers storage services for all your needs.
        </Typography>
       </Grid>

      {/* Card1 */}
        
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg:3 }}>
        <Grid item xs={4}>
            <Card sx={{ maxWidth: 400 , boxShadow: 4 }}>
            <CardMedia
                sx={{ height: 300 }}
                image={'/assets/images/ordernow/documentboxsize/small_box_1.jpg'}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Small Box 1
                </Typography>
            </CardContent>
            <CardActions>
            <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
            </IconButton>
            <IconButton color="primary" aria-label="More info">
                <InfoIcon />
            </IconButton>
            </CardActions>
            </Card>
        </Grid>

        <Grid item xs={4}>
                <Card sx={{ maxWidth: 400 ,boxShadow: 4 }}>
                <CardMedia
                    sx={{ height: 300 }}
                    image={'/assets/images/ordernow/documentboxsize/small_box_2.webp'}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Small box 2
                    </Typography>
                </CardContent>
                <CardActions>
                <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>
                <IconButton color="primary" aria-label="More info">
                    <InfoIcon />
                </IconButton>
                </CardActions>
                </Card>
        </Grid>
        <Grid item xs={4}>
                <Card sx={{ maxWidth: 400,boxShadow: 4 }}>
                <CardMedia
                    sx={{ height:300 }}
                    image={'/assets/images/ordernow/documentboxsize/medium_box_1.jpg'}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Medium Box 1
                    </Typography>
                </CardContent>
                <CardActions>
                <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>
                <IconButton color="primary" aria-label="More info">
                    <InfoIcon />
                </IconButton>
                </CardActions>
                </Card>
        </Grid>
        <Grid item xs={4}>
            <Card sx={{ maxWidth: 400 , boxShadow: 4}}>
            <CardMedia
                sx={{ height: 300 }}
                image={'/assets/images/ordernow/documentboxsize/medium_box_2.jpg'}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Medium box 2
                </Typography>
            </CardContent>
            <CardActions>
            <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
            </IconButton>
            <IconButton color="primary" aria-label="More info">
                <InfoIcon />
              </IconButton>
            </CardActions>
            </Card>
        </Grid>
        <Grid item xs={4}>
            <Card sx={{ maxWidth: 400 , boxShadow: 4}}>
            <CardMedia
                sx={{ height: 300 }}
                image={'/assets/images/ordernow/documentboxsize/large_box_1.jfif'}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Large Box 1
                </Typography>
            </CardContent>
            <CardActions>
            <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
            </IconButton>
            <IconButton color="primary" aria-label="More info">
                <InfoIcon />
            </IconButton>
            </CardActions>
            </Card>
        </Grid>
        <Grid item xs={4}>
            <Card sx={{ maxWidth: 400 , boxShadow: 4 }}>
            <CardMedia
                sx={{ height: 300 }}
                image={'/assets/images/ordernow/documentboxsize/large_box_2.jpg'}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
               Large Box 2
                </Typography>
            </CardContent>
            <CardActions>
            <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
            </IconButton>
            <IconButton color="primary" aria-label="More info">
                <InfoIcon />
            </IconButton>
            </CardActions>
            </Card>
        </Grid>
        </Grid>


      
      </>
    );
  }