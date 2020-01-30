import React,{useState} from 'react';
import {Container} from 'react-bootstrap';
import './homePage.css';
//components
import NavBar from './navBar/navBar';
import ContentPage from './contentPage/contentPage';

export default function HomePage(){

    const [searchField, setSearchField] = useState('')
    const [toggle, setToggle] = useState(false)

    const updateSearchValue = (value) =>{
        setSearchField(value)
    }

    const updateToogleValue = () =>{
        setToggle(!toggle)
    }

    return(
        <React.Fragment>
            <Container fluid className='homePageContainer'>
                <NavBar changeSearchValue={updateSearchValue} updateToggle={updateToogleValue} toggle={toggle}/>
                <ContentPage searchData={searchField} toggle={toggle} />
            </Container>
        </React.Fragment>
    )

}