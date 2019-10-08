import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ScoreBox extends Component {
    render(){
        const {score, tries} = this.props;

        return(
            <div height="500px">
                <span>`Tries: {tries}`</span>
                <span>`Score: {score}`</span>
            </div>
        );
    }
}

// ScoreBox.PropTypes = {
//     score: PropTypes.number.isRequired,
//     tries: PropTypes.number.isRequired,
// }

export default ScoreBox;