import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Feature from './Feature';

class FeatureList extends Component {
	render() {
		return this.props.carSpecs.map((feature) => (
			<Feature key={feature.name} feature={feature} />
		));
	}
}
FeatureList.propTypes = {
	carSpecs: PropTypes.array.isRequired,
};

export default FeatureList;
