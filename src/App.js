import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
//import Photo from './Components/Photo';


class App extends Component  {

  
  render () {

    return (

      <div className="container">

        <SearchForm />

        <Nav />
        <PhotoContainer />

      </div>

    );

  }

}

export default App;
