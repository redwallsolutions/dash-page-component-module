import React, { Component } from 'react'
import PropTypes from 'prop-types';
import PageHeader from '@atlaskit/page-header'
import { PageContainer, PageContent, Global } from './Style';

class DashPage extends Component {

  render() {
    return (<React.Fragment>
      <Global/>
      <PageContainer className='dash-page'>
        <PageHeader
          breadcrumbs={this.props.breadcrumbs}
          actions={this.props.actions}
          bottomBar={this.props.bottom}>
          {this.props.pageTitle}
          <br/>
          <small>
            {this.props.pageSubtitle}
          </small>
        </PageHeader>
        <PageContent>
          {this.props.children}
        </PageContent>
      </PageContainer>
    </React.Fragment>)
  }

}

DashPage.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  pageSubtitle: PropTypes.string.isRequired
}

export default DashPage;
