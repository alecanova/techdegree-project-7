import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import axios from 'axios';
import api_key from './config';

// Components
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import NotFound from './Components/NotFound';




class App extends Component  {

    state = {
      avocado: [],
      papaya: [],
      mango: [],
      searchPhoto: [],
      loading: true
    };



  handleLoading = () => {

    this.setState({ loading: true});

  }

  componentDidMount () {

    this.performSearch();
    this.performSearch('avocado');
    this.performSearch('papaya');
    this.performSearch('mango');

  }


/******* FETCHING DATA WITH AXIOS ********/
  
  performSearch = (query) => {

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then( this.handleLoading() )
      .then(response => {

        if (query === 'avocado') {
          this.setState({
            avocado: response.data.photos.photo,
            loading: false
          });

        } else if (query === 'papaya') {
          this.setState({
            papaya: response.data.photos.photo,
            loading: false
          });

        } else if (query === 'mango') {
          this.setState({
            mango: response.data.photos.photo,
            loading: false
          });

        } else {
          this.setState({
            searchPhoto: response.data.photos.photo,
            loading: false
          });
        }
      })

      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });

  };
  
  render () {

    return (

      <BrowserRouter>
        <div className='container'>
          <SearchForm onSearch={this.performSearch} /> 
          <Nav />
          {
            (this.state.loading)
            ? <p>Loading...</p>
            : <Switch>
                <Route exact path="/" render={ () => <Redirect to="/avocado" /> } />
                <Route path="/avocado" render={ () => <PhotoContainer data={this.state.avocado}  /> } />
                <Route path="/papaya" render={ () => <PhotoContainer data={this.state.papaya}  /> } />
                <Route path="/mango" render={ () => <PhotoContainer data={this.state.mango}  /> } />
                <Route path="/:query" render={ () => <PhotoContainer data={this.state.searchPhoto} /> } />
                <Route component={NotFound} />
              </Switch> 
          }   
        </div>
      </BrowserRouter>

    );

  }

}



export default App;
