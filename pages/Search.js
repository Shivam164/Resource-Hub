import React from 'react'
import Searchbar from '../components/Searchbar'
import NavbarColor from '../components/NavbarColor';
import Footer from '../components/Footer'

const Search = () => {
    return (
        <>
          <NavbarColor />
          <Searchbar />
          <Footer style={{position:"fixed"}} />  
        </>
    )
}

export default Search
