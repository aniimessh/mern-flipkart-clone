import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { Box, styled } from '@mui/material'

const Container = styled(Box)`  
    padding: 10px 100px;
    background-color: #f2f2f2;
`

function Home() {
  return (
    <>
    <Navbar/>
    <Container>
    <Banner/>
    </Container>
    </>
  )
}

export default Home