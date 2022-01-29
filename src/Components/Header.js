import React from 'react'
import Typical from 'react-typical';
import {Container } from "react-bootstrap";

const Header = () => {
    return (
        <div>
            <Container fluid className='image' >
        <h1 className='heading'>I am Qasim Qayyum</h1>
        <p className='Heading__para' style={{color: '#fff'}}>
            <Typical
            loop={Infinity}
            wrapper="p"
            steps={[
                'WebSite Developer', 2500,
                'Reactjs Developer',2500,
                'WebSite Designer', 2500
            ]}/>
        </p>
    </Container>
        </div>
    )
}

export default Header
