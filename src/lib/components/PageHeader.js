import React, { Component } from 'react';
import { BreadCrumbStyled, PageTitle, PageSubTitle } from './Style';
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
        <h2>
          {this.props.title}
        </h2>
        <PageSubTitle>
          {this.props.subTitle}
        </PageSubTitle>
      </React.Fragment>
    );
  }

}

export default PageHeader;
