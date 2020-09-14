import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Feature extends Component {
  render() {
    const { name } = this.props.feature;
    return (
      <div className="feature">
        <p>{name}</p>
      </div>
    );
  }
}

Feature.propTypes = {
  features: PropTypes.array.isRequired,
};
export default Feature;
