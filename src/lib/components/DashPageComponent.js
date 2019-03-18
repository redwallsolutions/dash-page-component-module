import React, { Component } from 'react';
import PageHeader from './PageHeader';
import { PageContainer, PageContent } from './Style';

class DashPageComponent extends Component {

  render() {
    const {startLoading, stopLoading} = this.props;
    return (
      <PageContainer className='dash-page'>
        <PageHeader
          breadcrumbs={this.props.pageBreadcrumbs}
          title={this.props.pageTitle}
          subTitle={this.props.pageSubtitle}
          actions={this.props.pageActions}/>
        <PageContent>
          {React.cloneElement(this.props.children, {startLoading, stopLoading})}
        </PageContent>
      </PageContainer>
    );
  }

}

export default DashPageComponent;
