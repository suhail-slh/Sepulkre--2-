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
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';



export default function DocumentPage() {
    const [SB1Count, setSB1Count] = React.useState(0);
    const [SB2Count, setSB2Count] = React.useState(0);
    const [MB1Count, setMB1Count] = React.useState(0);
    const [MB2Count, setMB2Count] = React.useState(0);
    const [LB1Count, setLB1Count] = React.useState(0);
    const [LB2Count, setLB2Count] = React.useState(0);
    
    React.useEffect(updateCart,[SB1Count, SB2Count, MB1Count, MB2Count, LB1Count, LB2Count]);

    function updateCart() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                SB1Count, SB2Count, MB1Count, MB2Count, LB1Count, LB2Count
            })
        };
        fetch("http://localhost:8090/cart/", requestOptions)
            .then(res => res.text())
            .then(res => alert("Your Order Id: " + res));
    }
  
    return (
      <>
        <Helmet>
          <title> Document Storage| Sepulkre </title>
        </Helmet>
  
        <Typography variant="h4" align="center" sx={{ mb: 5 }}>
        <strong style={{  color: "#f46424" }}>DOCUMENT STORAGE</strong>
        </Typography>
        <Grid>
        <Typography variant="h6" sx={{ mb: 5 }}>
        For the safe and secure corporate storage space of official data and documents, Safe Storage offers records management document storage services for professionals and small organisations.
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
            {
            SB1Count === 0 &&
            <IconButton color="primary" aria-label="add to shopping cart" onClick={(e) => setSB1Count(SB1Count + 1)}>
                <AddShoppingCartIcon />
            </IconButton>
            }
            {
            SB1Count > 0 &&
            <IconButton color="primary" aria-label="add to shopping cart" onClick={(e) => setSB1Count(SB1Count - 1)}>
                <RemoveIcon />
            </IconButton>
            }
            {
            SB1Count > 0 &&
            <Typography gutterBottom variant="h6" component="div">
            {SB1Count}
            </Typography>
            }
            {
            SB1Count > 0 &&
            <IconButton color="primary" aria-label="add to shopping cart" onClick={(e) => setSB1Count(SB1Count + 1)}>
                <AddIcon />
            </IconButton>
            }
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
            {
            SB2Count === 0 &&
            <IconButton color="primary" aria-label="add to shopping cart" onClick={(e) => setSB2Count(SB2Count + 1)}>
                <AddShoppingCartIcon />
            </IconButton>
            }
            {
            SB2Count > 0 &&
            <IconButton color="primary" aria-label="add to shopping cart" onClick={(e) => setSB2Count(SB2Count - 1)}>
                <RemoveIcon />
            </IconButton>
            }
            {
            SB2Count > 0 &&
            <Typography gutterBottom variant="h6" component="div">
            {SB2Count}
            </Typography>
            }
            {
            SB2Count > 0 &&
            <IconButton color="primary" aria-label="add to shopping cart" onClick={(e) => setSB2Count(SB2Count + 1)}>
                <AddIcon />
            </IconButton>
            }
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
            {
            MB1Count === 0 &&
            <IconButton color="primary" aria-label="add to shopping cart" onClick={(e) => setMB1Count(MB1Count + 1)}>
                <AddShoppingCartIcon />
            </IconButton>
            }
            {
            MB1Count > 0 &&
            <IconButton color="primary" aria-label="add to shopping cart" onClick={(e) => setMB1Count(MB1Count - 1)}>
                <RemoveIcon />
            </IconButton>
            }
            {
            MB1Count > 0 &&
            <Typography gutterBottom variant="h6" component="div">
            {MB1Count}
            </Typography>
            }
            {
            MB1Count > 0 &&
            <IconButton color="primary" aria-label="add to shopping cart" onClick={(e) => setMB1Count(MB1Count + 1)}>
                <AddIcon />
            </IconButton>
            }
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
            {
            MB2Count === 0 &&
            <IconButton color="primary" aria-label="add to shopping cart" onClick={(e) => setMB2Count(MB2Count + 1)}>
                <AddShoppingCartIcon />
            </IconButton>
            }
            {
            MB2Count > 0 &&
            <IconButton color="primary" aria-label="add to shopping cart" onClick={(e) => setMB2Count(MB2Count - 1)}>
                <RemoveIcon />
            </IconButton>
            }
            {
            MB2Count > 0 &&
            <Typography gutterBottom variant="h6" component="div">
            {MB2Count}
            </Typography>
            }
            {
            MB2Count > 0 &&
            <IconButton color="primary" aria-label="add to shopping cart" onClick={(e) => setMB2Count(MB2Count + 1)}>
                <AddIcon />
            </IconButton>
            }
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
            {
            LB1Count === 0 &&
            <IconButton color="primary" aria-label="add to shopping cart" onClick={(e) => setLB1Count(LB1Count + 1)}>
                <AddShoppingCartIcon />
            </IconButton>
            }
            {
            LB1Count > 0 &&
            <IconButton color="primary" aria-label="add to shopping cart" onClick={(e) => setLB1Count(LB1Count - 1)}>
                <RemoveIcon />
            </IconButton>
            }
            {
            LB1Count > 0 &&
            <Typography gutterBottom variant="h6" component="div">
            {LB1Count}
            </Typography>
            }
            {
            LB1Count > 0 &&
            <IconButton color="primary" aria-label="add to shopping cart" onClick={(e) => setLB1Count(LB1Count + 1)}>
                <AddIcon />
            </IconButton>
            }
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
            {
            LB2Count === 0 &&
            <IconButton color="primary" aria-label="add to shopping cart" onClick={(e) => setLB2Count(LB2Count + 1)}>
                <AddShoppingCartIcon />
            </IconButton>
            }
            {
            LB2Count > 0 &&
            <IconButton color="primary" aria-label="add to shopping cart" onClick={(e) => setLB2Count(LB2Count - 1)}>
                <RemoveIcon />
            </IconButton>
            }
            {
            LB2Count > 0 &&
            <Typography gutterBottom variant="h6" component="div">
            {LB2Count}
            </Typography>
            }
            {
            LB2Count > 0 &&
            <IconButton color="primary" aria-label="add to shopping cart" onClick={(e) => setLB2Count(LB2Count + 1)}>
                <AddIcon />
            </IconButton>
            }
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