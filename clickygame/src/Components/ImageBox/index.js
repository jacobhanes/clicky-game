import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ImageBox extends Component {
    render(){
        const {onClick, src, alt, chosenBefor} = this.props;

        return(
            <div className="imgBox" onClick={()=> onClick(alt, chosenBefor)}>
                <img src={src} alt={alt} />
            </div>
        );
    }
}

// ImageBox.PropTypes = {
//     onClick: PropTypes.func,
//     src: PropTypes.string.isRequired,
//     alt: PropTypes.string.isRequired,
//     chosenBefor: PropTypes.bool.isRequired,
// }

ImageBox.defaultProps = {
    onClick: () => {},
    active: false
}

export default ImageBox;