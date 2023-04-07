import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';  
import {Link, Route, Routes} from 'react-router-dom';
import Iconify from '../components/iconify';
// sections

import {AppTrafficBySite} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------
const styles = {
  media: {
     height: 200,
     paddingTop: '56.25%' // 16:9
  },
  card: {
     position: 'relative',
  },
  overlay: {
     position: 'absolute',
     top: '20px',
     left: '20px',
     color: 'black',
     backgroundColor: 'white'
  }
}

export default function AboutusPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> About Us | Sepulkre </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography >
          <p style={{  color: "#37517e",fontSize: '32px', textAlign:"center" }}><strong >About Us</strong></p>
        </Typography>
        <Typography>
        <p style={{ fontSize: 20, textAlign:"justify"}}>Sepulkre is a professional-managed storage firm with headquarters in Bangalore that provides a variety of storage options, from household storage to records storage management. We are one of India's most creative storage firms and the only one with cutting-edge security features in Bangalore, Hyderabad, Pune, Chennai, and Mumbai. Our storage facilities are built to provide residential and commercial customers with affordable, convenient storage space. We offer facilities that are reasonably priced, practical, and safe since we value your possessions just as much as you do.</p>
        </Typography>
        <Grid container spacing={3}>

          <Grid item xs={12} md={6} lg={8}>
          
          
           <p style={{color: "#fca31c",fontSize: '32px',  textAlign:"center", marginTop:"230px"}}>
             <strong>We Value our Customer</strong>
            </p>
            
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
          <CardMedia
                sx={{ height: 500, width:500 }}
                image={'/assets/illustrations/value_our_coustomer.png'}
                title="green iguana"
            />
          </Grid>

          <Grid  item xs={12} md={6} lg={4}>
            <CardMedia
                  sx={{ height: 400, width:400 }}
                  image={'/assets/illustrations/hear_their_needs.png'}
                  title="green iguana"
              />
             
          </Grid>
            
          <Grid item xs={12} md={6} lg={8}>
          <p style={{color: "#fca31c",fontSize: '32px',  textAlign:"center", marginTop:"230px"}}>
             <strong>We hear your Needs</strong>
            </p>
          </Grid>
          
          <Grid item xs={12} md={6} lg={8}>
          
          
           <p style={{color: "#fca31c",fontSize: '32px',  textAlign:"center", marginTop:"230px"}}>
             <strong>We provide outstanding Service</strong>
            </p>
            
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
          <CardMedia
                sx={{ height: 500, width:500 }}
                image={'/assets/illustrations/giveing_them_outstanding_service.png'}
                title="green iguana"
            />
          </Grid>

          

          <Grid item xs={12} md={6} lg={4}>
          
            <AppTrafficBySite
              title="Follow us,Like us and Tag us"
              list={[
                {
                  name: 'FaceBook',
                  
                  icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} />,
                },
                {
                  name: 'Google',
                  
                  icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} />,
                },
                {
                  name: 'Linkedin',
                 
                  icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} />,
                },
                {
                  name: 'Twitter',
                  
                  icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} />,
                },
              ]}
            />
          </Grid>
           
          <Grid item xs={12} md={6} lg={8}>
          
            <h2 style={{  color: "#37517e" }}>SEPULKRE</h2>
                <p>Electronic City Phase1
                Bangalore, Karnataka 560068
                India</p>

                <p><strong>Phone:</strong> +91 9876542100</p>
                <p><strong>Email:</strong> SEPULKRE@example.com</p>
                
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
