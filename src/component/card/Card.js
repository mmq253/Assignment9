
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {styles} from './CardStyle'
import icon from "../../assets/icon (2).png"
import icon1 from '../../assets/icon (3).png'
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);



export default function OutlinedCard({data}) {
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
      <img src={data.img}/>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
       <p style={styles.heading1}> {data.title}</p>
        </Typography>
        <Typography variant="body2">
        <p style={styles.paragraph1}>{data.paragraph}</p>
        </Typography>
      </CardContent>
    </React.Fragment>
  );
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
