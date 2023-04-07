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

import {
  AppTasks,
  ServicesPage,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

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

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Dashboard | Sepulkre </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          <strong style={{  color: "#37517e",fontSize: '32px' }}>Hi, Welcome back</strong>
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Days Time Left" total={7} icon={'icomoon-free:hour-glass'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="New Users" total={15} color="info" icon={'mdi:people-group'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Item Orders" total={1723315} color="warning" icon={'ant-design:apartment-outlined'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Precent profile complete"  total={15} color="error" icon={'carbon:user-profile'} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
          <h2 style={{ color:"#37517e", fontSize:"43px", fontWeight:"400"}}>Why Sepulkre Storage Services?</h2>
          
          <p style={{ fontSize: 20, textAlign:"justify"}}>Sepulkre is a professional-managed storage firm with headquarters in Bangalore that provides a variety of storage options, from household storage to records storage management. We are one of India's most creative storage firms and the only one with cutting-edge security features in Bangalore, Hyderabad, Pune, Chennai, and Mumbai. Our storage facilities are built to provide residential and commercial customers with affordable, convenient storage space. We offer facilities that are reasonably priced, practical, and safe since we value your possessions just as much as you do.</p>
           <p style={{ fontSize: 20, textAlign:"justify"}}>
              We offer affordable, unique storage solutions for everything from personal 
              belongings to records management. We are a one-stop shop for all of your 
              storage requirements. 
            </p>
            
            <ul style={{ fontSize: 20,color:"#202020", fontWeight: 'bold'}}>
              <li> Pick up from door step</li>
              <li> 24x7 customer support</li>
              <li> Reliability & Punctuality</li>
            </ul>
            
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
          <CardMedia
                sx={{ height: 400, width:500 }}
                image={'/assets/illustrations/dashboard-img1.png'}
                title="green iguana"
            />
          </Grid>

          <Grid  item xs={12} md={6} lg={4}>
            <CardMedia
                  sx={{ height: 400, width:400 }}
                  image={'/assets/illustrations/dashboard-img2.png'}
                  title="green iguana"
              />
             
          </Grid>
            
          <Grid item xs={12} md={6} lg={8}>
          <h3 style={{ color:"#37517e", fontSize:"43px", fontWeight:"400",textAlign:"justify"}} >Safe, secure, reliable<strong> and affordable storage service</strong></h3>
          <p style={{fontSize: 20, textAlign:"justify"}}>
              We offer affordable, unique storage solutions for everything from personal 
              belongings to records management. We are a one-stop shop for all of your 
              storage requirements. 
            </p>
            <ol style={{ fontSize: 20,color:"#202020", fontWeight: 'bold'}}>
              <li> Pick up from door step</li>
              <li> 24x7 customer support</li>
              <li> Reliability & Punctuality</li>
            </ol>
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <ServicesPage
              title="Services we Provide"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  'Document Storage',
                  'Household Storage',
                  'Automobile Storage',
                  'Box Storage',
                  'Business Storage',
                ][index],
                description: faker.name.jobTitle(),
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Order Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  'New order placed #XF-2356',
                  'Order Aprroved',
                  'Order Pick Up',
                  'Ware house alloted',
                  'Order Completed',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
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
