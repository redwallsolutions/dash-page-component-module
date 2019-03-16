import React, { Component } from 'react';
import { BreadCrumbStyled, PageTitle, PageSubTitle, PageActionsContainer } from './Style';
import { Link, BrowserRouter } from 'react-router-dom'
class PageHeader extends Component {

  renderBreadCrumbs = () => {
    const {breadcrumbs} = this.props;
    return (
      breadcrumbs && breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment>
            <BreadCrumbStyled key={index} to={breadcrumb.to}>
              {breadcrumb.name}
            </BreadCrumbStyled>
            &nbsp;
            {
              index === breadcrumbs.length - 1 ? '' : ' / '
            }
            &nbsp;
          </React.Fragment>
        )
      )
    )
  }

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          {
            this.renderBreadCrumbs()
          }
        </BrowserRouter>
        <div className='row'>
          <div className='col-sm-8'>
            <h2>
              {this.props.title}
            </h2>
            <PageSubTitle>
              {this.props.subTitle}
            </PageSubTitle>
          </div>
          <div className='col-sm-4'>
            <PageActionsContainer>
              {this.props.actions}
            </PageActionsContainer>
          </div>
        </div>
      </React.Fragment>
    );
  }

}

export default PageHeader;
