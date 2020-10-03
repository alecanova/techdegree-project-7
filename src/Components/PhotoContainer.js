import React, { Component } from 'react';
import Photo from './Photo';
import NotFound from './NotFound';
import { withRouter } from "react-router"; //withRouter will pass updated match and history props to the wrapped component whenever it renders.


class PhotoContainer extends Component {

    // If (current url parameter !== previous url parameter) {fetch new data} else do not
    componentDidUpdate () {

        if (this.props.match.params.query !== this.props.query) {
            this.props.performSearch(this.props.match.params.query)
        } else if (this.props.loading) {
            this.props.handleLoadingState(false)
        }
    }

    componentDidMount () {

        this.props.performSearch(this.props.match.params.query);

    }

    render() {

        // store the data in a costant
        const results = this.props.photos
        let photos;

        if(results.length > 0) {

            // return a Photo component (<Photo/>) from each objecy of the array.
            photos = results.map( photo => { <Photo photo={photo} key={photo.id} /> })

        } else {

            photos = <NotFound />

        }

        return (

            <div class="photo-container">
                <h2>Results</h2>
                    <ul>
                        {photos}
                    </ul>
            </div>

        );
 
    }

}

export default withRouter(PhotoContainer);