import React,{useState,useEffect} from 'react';
import {Container, Row} from 'react-bootstrap';
import './homePage.css';
//components
import NavBar from './navBar/navBar';
import ContentPage from './contentPage/contentPage';

export default function HomePage(){

    return(
        <React.Fragment>
            <Container fluid className='homePageContainer'>
                <NavBar />
                <ContentPage />
            </Container>
        </React.Fragment>
    )

}