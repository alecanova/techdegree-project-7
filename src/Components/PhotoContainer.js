import React, { Component } from 'react';

import Photo from './Photo';
import NotFound from './NotFound';


class PhotoContainer extends Component {

    render () {

        const results = this.props.data;
        const query = this.props.query;
        let photos;

        if (results.length > 0) {
            // return a Photo component (<Photo/>) from each objecy of the array
            photos = results.map( photo => <Photo 
                                                farm={photo.farm}
                                                server={photo.server}
                                                id={photo.id}
                                                secret={photo.secret}
                                                key={photo.id}
                                            />
            )
        } else {
            photos = <NotFound />
        }

        return (

            <div className= "photo-container">
                <h2>{query}</h2>
                <ul>
                    {
                        (this.props.loading)
                        ? <h2>Loading...</h2>
                        : photos
                    } 
                </ul>
            </div>

        );
        
    }

}

export default PhotoContainer;