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
      books: [],
      movies: [],
      records: [],
      searchPhoto: [],
      loading: true
    };



  handleLoading = () => {

    this.setState({ loading: true});

  }

  componentDidMount () {

    this.performSearch();
    this.performSearch('books');
    this.performSearch('movies');
    this.performSearch('records');

  }


/******* FETCHING DATA WITH AXIOS ********/
  
  performSearch = (query = 'books') => {

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then( this.handleLoading() )
      .then(response => {

        if (query === 'books') {
          this.setState({
            books: response.data.photos.photo,
            loading: false
          });

        } else if (query === 'movies') {
          this.setState({
            movies: response.data.photos.photo,
            loading: false
          });

        } else if (query === 'records') {
          this.setState({
            records: response.data.photos.photo,
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
                <Route exact path="/" render={ () => <Redirect to="/books" /> } />
                <Route path="/books" render={ () => <PhotoContainer data={this.state.books}  /> } />
                <Route path="/movies" render={ () => <PhotoContainer data={this.state.movies}  /> } />
                <Route path="/records" render={ () => <PhotoContainer data={this.state.records}  /> } />
                <Route path="/search:query" render={ () => <PhotoContainer data={this.state.searchPhoto} /> } />
                <Route component={NotFound} />
              </Switch> 
          }   
        </div>
      </BrowserRouter>

    );

  }

}



export default App;
