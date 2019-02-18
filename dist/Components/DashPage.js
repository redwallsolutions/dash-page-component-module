import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import PageHeader from '@atlaskit/page-header';
import { PageContainer, PageTitle, PageContent, Global } from './Style';

var DashPage =
/*#__PURE__*/
function (_Component) {
  _inherits(DashPage, _Component);

  function DashPage() {
    _classCallCheck(this, DashPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(DashPage).apply(this, arguments));
  }

  _createClass(DashPage, [{
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, React.createElement(Global, null), React.createElement(PageContainer, {
        className: "dash-page"
      }, React.createElement(PageHeader, {
        breadcrumbs: this.props.breadcrumbs,
        actions: this.props.actions,
        bottomBar: this.props.bottom
      }, this.props.pageTitle, React.createElement("br", null), React.createElement("small", null, this.props.pageSubtitle)), React.createElement(PageContent, null, this.props.children)));
    }
  }]);

  return DashPage;
}(Component);

export default DashPage;