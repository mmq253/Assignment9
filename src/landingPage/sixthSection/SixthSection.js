import { Container, Grid } from '@mui/material'
import React from 'react'
import { styles } from './SixthSectionStyle'
import { image } from '../../component/card/Data'
import CardImage from '../../component/cardImage/CardImage'
// import { styles } from '../firstSection/FirstSectionStyle'

function SixthSection() {
  return (
    <div>
      <Container>
        <h1 style={styles.heading}>Project</h1>
        <Grid container spacing={4}>
          <Grid item lg={4} md={4} sm={12}>
            <div style={styles.display} >
              <div style={styles.border}> </div>
              <div><p style={styles.paragraph}>All</p></div>
            </div>
            <p style={styles.paragraph1}>Commercial</p>
            <p style={styles.paragraph1}>Residential</p>
            <p style={styles.paragraph1}>Other</p>
          </Grid>



          <Grid item lg={8} md={8} sm={12}>
            <Grid container spacing={6}>
              {
                image.map((item) => {
                  return <Grid item lg={6} md={6} sm={12}><CardImage data={item} /></Grid>
                })
              }
            </Grid>

          </Grid>




        </Grid>
      </Container>
    </div>
  )
}

export default SixthSection