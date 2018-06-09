import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Explore extends Component{
	static propTypes = {
	    onChange: PropTypes.func.isRequired,
	    children: PropTypes.node
	}
	handleChange(e){
		this.props.onChange(e.target.value);
	}
	render() {
		const { inputValue } = this.props;
		return (
		  <div>
		    <input name='input' value={inputValue} onChange={this.handleChange.bind(this)}/>
		  </div>
		)
	}

}
const mapStateToProps = (state, ownProps) => ({
  errorMessage: state.errorMessage,
})

export default connect(mapStateToProps, {})(Explore)