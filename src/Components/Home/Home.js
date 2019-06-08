import React, { Component } from 'react';

import classes from './Home.module.css';
import MoviePoster from './MoviePoster/MoviePoster';

class Home extends Component {
    state = {
        title: {
            title1: 'Captain Marvel',
            title2: 'Avengers End Game',
            title3: 'Aladdin'
        },
        url: {
            url1: 'https://upload.wikimedia.org/wikipedia/en/8/85/Captain_Marvel_poster.jpg',
            url2: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg',
            url3: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Aladdin_%28Official_2019_Film_Poster%29.png'
        }
    }
    render() {
        return(
            <div className={classes.mainDiv}>
                <div className={classes.titlecolor}>
                    <div className={classes.title}>
                        ReserveMySeat
                    </div>
                </div> 
                <div className={classes.divider} />
                <MoviePoster imageURL={this.state.url.url1} title={this.state.title.title1} />
                <MoviePoster imageURL={this.state.url.url2} title={this.state.title.title2} />
                <MoviePoster imageURL={this.state.url.url3} title={this.state.title.title3} />
            </div>
        );
    }
}

export default Home;