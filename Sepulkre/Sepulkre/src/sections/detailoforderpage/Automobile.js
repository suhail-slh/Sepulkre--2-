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
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';



export default function Automobile() {
    
  
    return (
      <>
        <Helmet>
          <title> Automobile Storage| Sepulkre </title>
        </Helmet>
  
        <Typography variant="h4"  align="center" sx={{ mb: 5 }}>
        <strong style={{  color: "#f46424" }}>AUTOMOBILE STORAGE</strong>
        </Typography>
        <Grid>
        <Typography variant="h6" sx={{ mb: 5 }}>
           Storing a classic car or while going overseas, we provide a variety of solutions for your automobiles storage.
        </Typography>
       </Grid>

      {/* Card1 */}
        
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg:3 }}>
        <Grid item xs={4}>
            <Card sx={{ maxWidth: 400 , boxShadow: 4 }}>
            <CardMedia
                sx={{ height: 300 }}
                image={'/assets/images/ordernow/automobilebox_size/bike.gif'}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                Bike Storage
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 <p><b>₹300*/-per month</b></p>
                 <small>*Storage charges exclude taxes.</small>
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
                image={'/assets/images/ordernow/automobilebox_size/cars-main.gif'}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                Car Storage
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 <p><b>₹799*/-per month</b></p>
                 <small>*Storage charges exclude taxes.</small>
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
                sx={{ height: 300  }}
                image={'/assets/images/ordernow/automobilebox_size/rv-main.gif'}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                RV's
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 <p><b>₹999*/-per month</b></p>
                 <small>*Storage charges exclude taxes.</small>
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