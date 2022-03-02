
import { height } from '@mui/system'
import React from 'react'
import { styles } from './Card2Style'

function Card2({ data }) {


  return (


    <div
      style={{ backgroundColor: data.backgroundColor,color:data.color , width: '288px', height: "181px", padding: "20px" ,}}
    >
      <div style={styles.display}>
        <img style={styles.img} src={data.imge} alt='errors' />
        <hr style={styles.line}/>
        <p>{data.titel}</p>
      </div>
    </div>
  )
}

export default Card2