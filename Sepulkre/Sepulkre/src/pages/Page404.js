import { Helmet } from 'react-helmet-async';
import { Typography } from '@mui/material';
// sections




export default function DashboardAppPage() {
  

  return (
    <>
      <Helmet>
        <title> Dashboard | Sepulkre </title>
      </Helmet>

     
        <Typography >
          <p style={{  color: "#37517e",fontSize: '32px', textAlign:"center" }}><strong >Error</strong></p>
        </Typography>
        <Typography>
        <p style={{ fontSize: 20, textAlign:"center"}}>404</p>
        </Typography>
        
    </>
  );
}
