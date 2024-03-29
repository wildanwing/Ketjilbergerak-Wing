import React, { Component } from 'react';

import SearchBar from "../components/SearchBar";
import NavbarContent from "../components/NavbarContent";
import Category from "../components/Category";
import DonationContent from "../components/DonationContent";
import Pagination from "../components/Pagination";


import landingPage from '../json/landingPage.json';

export default class DonationPage extends Component {
    render() {
        return (
            <>
              
                <SearchBar></SearchBar>
                <NavbarContent {...this.props}></NavbarContent>
                <Category />
                <DonationContent data={landingPage.categories} />
                <Pagination />

            

            </>
        )
    }
}
