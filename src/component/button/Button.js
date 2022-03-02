import React from 'react'
import {styles} from "./ButtonStyle"
function Button(props) {
  return (
    <div style={styles.button(props.bgColor)}>{props.title}</div>
  )
}

export default Button