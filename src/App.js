import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import api_key from './config';

// Components
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import NotFound from './Components/NotFound';




class App extends Component  {

  constructor() {

    super();

    this.state = {
      photos: [],
      query: '',
      loading: true
    }

  } 

  handleLoadingState = (boolean = true) => this.setState({ loading: boolean });


  /* Fetching Data with Axios */
  componentDidMount () {
    this.performSearch();
  }

  performSearch = query => {

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.photos.photo,
          query: query,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });

  }
  

  
  render () {

    return (

      <HashRouter>

        <Route render={ () => <SearchForm />} />
        <Route render={ () => <Nav />} />

        <Switch>
          <Route path='/search/:query' render={ () => <PhotoContainer 
                                                          performSearch={this.performSearch}
                                                          photos={this.state.photos}
                                                          query={this.state.query}
                                                          loading={this.state.loading}
                                                          handleLoadingState={this.handleLoadingState}
                                                      /> } />
          <Route path='/' render={ () => <NotFound />} />
        </Switch>
        
      </HashRouter>

    );

  }

}



export default App;
