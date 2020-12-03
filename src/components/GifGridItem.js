import React from 'react';
import PropTypes from 'prop-types';
import 'animate.css/animate.min.css';

const GifGridItem = ({id,title,url}) => {

    return (
        <div className="card animate__animated animate__fadeInRight">
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

export default GifGridItem;
