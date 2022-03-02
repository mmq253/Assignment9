import React from 'react'
import { styles } from "./FirstSectionStyle"
import Card from '../../component/card/Card'
import { raputation } from '../../component/card/Data'
import { Grid, Container } from '@mui/material'
const arry = [Card, Card, Card]

function FirstSection() {
  return (
    <div style={styles.mainDiv} >
      <p style={styles.paragraph}>Our Reputation</p>
      <Container>
        <div style={styles.margin}>
          <Grid container spacing={6}>
            {
              raputation.map((item) => {
                return <Grid item lg={4} md={4} sm={4} xs={12}>

                  <Card data={item} />
                </Grid>
              })
            }
          </Grid>
        </div>
      </Container>

    </div>
  )
}

export default FirstSection