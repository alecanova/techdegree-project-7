import React, { Component } from 'react';


class SearchForm extends Component {

   constructor () {

       super ();

       this.state = {
           searchText: ''
       }

   }

    render () {

        return (
            
            <form className="search-form">
                <input type="search" 
                       name="search" 
                       placeholder="Search" />
                <button type="submit" className="search-button">search</button>
                
                 
            </form>

        );

    }

}

export default SearchForm;
