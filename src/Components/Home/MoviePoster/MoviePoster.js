import React from 'react';

import classes from './MoviePoster.module.css';

const moviePoster = (props) => {
    return(
        <div className={classes.mainDiv}>
            <div className={classes.oneThirdPlace}>
                <img src={props.imageURL} alt="Image" />
                <div className={classes.title}>{props.title}</div>
            </div>
        </div>
    );
}

export default moviePoster;