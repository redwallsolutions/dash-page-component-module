import React, { Component } from 'react';
import { BreadCrumbStyles, PageSubTitle, PageActionsContainer } from './Style';
class PageHeader extends Component {

  renderBreadCrumbs = () => {
    const {breadcrumbs} = this.props;
    return (
      breadcrumbs && breadcrumbs.map((breadcrumb, index) => {
        const BreadCrumbComponent = breadcrumb.componentType
        return (
          <React.Fragment key={index}>
            <BreadCrumbComponent to={breadcrumb.to} style={BreadCrumbStyles}>
              {breadcrumb.name}
            </BreadCrumbComponent>
            &nbsp;
            {
              index === breadcrumbs.length - 1 ? '' : ' / '
            }
            &nbsp;
          </React.Fragment>
        )
      })
    )
  }

  render() {
    return (
      <React.Fragment>
        {
          this.renderBreadCrumbs()
        }
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
