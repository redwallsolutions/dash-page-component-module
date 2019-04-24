import React, { Component } from 'react';
import { BreadCrumbStyles, PageTitle, PageSubTitle, PageActionsContainer } from './Style';

class PageHeader extends Component {

  renderBreadCrumbs = () => {
    const {breadcrumbs} = this.props;
    return (
      breadcrumbs && breadcrumbs.map((breadcrumb, index) => {
        return (
          <React.Fragment key={index}>
            {
              React.cloneElement(breadcrumb.component, {to: breadcrumb.to, style: BreadCrumbStyles}, breadcrumb.name)
            }
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
            <PageTitle>
              {this.props.title}
            </PageTitle>
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
