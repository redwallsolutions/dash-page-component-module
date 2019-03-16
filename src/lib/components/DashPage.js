import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Global } from './Style';
import DashPageComponent from './DashPageComponent';
import Loading from 'react-loading-bar'
import 'react-loading-bar/dist/index.css'

class DashPage extends Component {

  render() {
    return (
      <React.Fragment>
        <Global/>
        <DashPageComponent {...this.props}/>
        <Loading show={this.props.loading} color='#E21306'/>
      </React.Fragment>
    )
  }

}

DashPage.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  pageSubtitle: PropTypes.string.isRequired
}

export default DashPage;
