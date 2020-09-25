import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';

// Components
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import NotFound from './Components/NotFound';
//import Photo from './Components/Photo';


class App extends Component  {

  constructor() {

    super();

    this.state = {
      photos: [],
      loading: true
    }

  } 

  
  render () {

    return (

      <HashRouter>
      
        <Route render={ () => <SearchForm />} />
        <Route render={ () => <Nav />} />

        <Switch>
          <Route path='/search/....' render={ () => <PhotoContainer /> } />
          <Route path='/' render={ () => <NotFound />} />
        </Switch>
        
      </HashRouter>

    );

  }

}



export default App;
