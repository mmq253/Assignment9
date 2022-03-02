import React from 'react'
import {styles} from "./ThirdSectionStyle"
import Card2 from '../../component/card2/Card2'
import {services} from '../../component/card/Data'
import { Grid ,Container} from '@mui/material'
function ThirdSection() {
  return (
    <div style={styles.background}> <Container>
    <h1 style={styles.heading}>Services</h1>
    <Grid container spacing={6}>
      {
        services.map((item)=>{
          
          return <Grid item lg={4}> <Card2 data={item}/>  </Grid>
        
        }) 
      }
    </Grid>
    </Container>
    </div>
  )
}

export default ThirdSection