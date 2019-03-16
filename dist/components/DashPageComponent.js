import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import PageHeader from './PageHeader';
import { PageContainer, PageContent } from './Style';

var DashPageComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(DashPageComponent, _Component);

  function DashPageComponent() {
    _classCallCheck(this, DashPageComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(DashPageComponent).apply(this, arguments));
  }

  _createClass(DashPageComponent, [{
    key: "render",
    value: function render() {
      return React.createElement(PageContainer, {
        className: "dash-page"
      }, React.createElement(PageHeader, {
        breadcrumbs: this.props.breadcrumbs,
        title: this.props.pageTitle,
        subTitle: this.props.pageSubtitle
      }), React.createElement(PageContent, null, this.props.children));
    }
  }]);

  return DashPageComponent;
}(Component);

export default DashPageComponent;