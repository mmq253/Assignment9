
    import * as React from 'react';
    import Card from '@mui/material/Card';
    import CardContent from '@mui/material/CardContent';
    import CardMedia from '@mui/material/CardMedia';
    import Typography from '@mui/material/Typography';
    import {  CardActionArea,  } from '@mui/material';
  
    
    export default function MultiActionAreaCard({data}) {
      return (
        <Card sx={{ maxWidth: 345 ,backgroundColor:'blue'}}>
          <CardActionArea >
            <CardMedia
              component="img"
              height="220"
              image={data.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" color="white" component="div">
             <p>
                 {data.title}
             </p>
              </Typography>
              <Typography variant=""  color="white">
              <p>{data.paragragh}</p>
              </Typography>
            </CardContent>
          </CardActionArea>
          {/* <CardActions> */}
            {/* <Button size="small" color="primary">
              Share
            </Button>
          </CardActions> */}
        </Card>
      );
    }
