import React, { Component } from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

class PhotoContainer extends Component {

    render() {

        return (

            <div class="photo-container">
                <h2>Results</h2>
                    <ul>
                        <Photo />
                        <NotFound />
                    </ul>
            </div>

        );
 
    }

}

export default PhotoContainer;