import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Feature from './Feature';

class FeatureList extends Component {
	render() {
		return this.props.features.map((feature) => (
			<Feature key={feature.name} feature={feature} />
		));
	}
}
FeatureList.propTypes = {
	features: PropTypes.array.isRequired,
};

export default FeatureList;
