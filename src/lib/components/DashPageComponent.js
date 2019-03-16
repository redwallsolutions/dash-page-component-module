import React, { Component } from 'react';
import PageHeader from './PageHeader';
import { PageContainer, PageContent } from './Style';

class DashPageComponent extends Component {

  render() {
    return (
      <PageContainer className='dash-page'>
        <PageHeader
          breadcrumbs={this.props.breadcrumbs}
          title={this.props.pageTitle}
          subTitle={this.props.pageSubtitle}
          actions={this.props.pageActions}/>
        <PageContent>
          {this.props.children}
        </PageContent>
      </PageContainer>
    );
  }

}

export default DashPageComponent;
