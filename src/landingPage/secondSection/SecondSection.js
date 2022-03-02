import React from 'react'
import { styles } from './SecondSectionStyle'
import Button from     '../../component/button/Button'
import {  Container } from '@mui/material'
import img from "../../assets/image2.png"

function SecondSection() {
    return (
        <div>
            <Container>
            <div style={styles.display}>
                <div>
                    <img style={styles.imgs} src={img} alt="errors" />
                </div>

                <div>
                    <div style={styles.card}>
                        <Container>
                            <h1 style={styles.heading}>About us</h1>
                            <div>
                            <p>For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way.</p>
                            <p>   We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.</p>
                            </div>
                            <div><Button title="More on Our History"/></div>
                        </Container>

                    </div>
                </div>
                </div>
            </Container>



        </div>
    );
}

export default SecondSection