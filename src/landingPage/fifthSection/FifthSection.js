import { Container } from '@mui/material';
import React from 'react'
import Button from '../../component/button/Button'
import { styles } from '../fifthSection/FifthSectionStyle';

function FifthSection() {
  return (
    <div style={styles.bgimage}>
      <div style={styles.subDiv}>
        <Container>
          <div style={styles.display}>
            <div>
              <p style={styles.paragraph1}>Free consultation with exceptional quality</p>
              <p style={styles.paragraph2}>Just one call away: +84 1102 2703</p>
            </div>
            <div>
              <Button title="Get your consultation" bgColor="transparent" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default FifthSection