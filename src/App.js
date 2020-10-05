import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import axios from 'axios';
import api_key from './config';
import './App.css';

// Components
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import NotFound from './Components/NotFound';




class App extends Component  {

    state = {
      photos: [],
      guitar: [],
      bass: [],
      drums: [],
      query: '',
      loading: true
    };



  loadingStatus = () => {

    this.setState({ loading: true});

  }


/******* FETCHING DATA WITH AXIOS ********/
  
  // Fetching data for SearchForm
  performSearch = query => {

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then( this.loadingStatus() )
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          query: query,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });

  };

  // Fetching data for Navlinks
  fetchGuitar = (query = 'guitar') => {

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then( this.loadingStatus() )
      .then(response => {
        this.setState({
          guitar: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });

  }

  fetchBass = (query = 'bass') => {

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then( this.loadingStatus() )
      .then(response => {
        this.setState({
          bass: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });

  }

  fetchDrums = (query = 'drums') => {

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then( this.loadingStatus() )
      .then(response => {
        this.setState({
          drums: response.data.photos.photo,
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
        <div className='container'>
          <SearchForm query={this.state.query} onSearch={this.performSearch} photos={this.state.photos}/> 
          <Nav />
        </div>
        {
          (this.state.loading)
          ? <p>Loading...</p>
          : <Switch>
              <Route exact path="/" render={ () => <Redirect to='/guitar' /> } />
              <Route exact path="/guitar" render={ () => <PhotoContainer photos={this.state.guitar} query='guitar' /> } />
              <Route exact path="/bass" render={ () => <PhotoContainer photos={this.state.bass} query='bass' /> } />
              <Route exact path="/drums" render={ () => <PhotoContainer photos={this.state.drums} query='drums' /> } />
              <Route exact path="/search:query" render={ () => <PhotoContainer photos={this.state.photos} query={this.state.query} loading={this.state.loading} /> } />

            </Switch> 
        }   
      </HashRouter>

    );

  }

}



export default App;
