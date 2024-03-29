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
      var _this$props = this.props,
          startLoading = _this$props.startLoading,
          stopLoading = _this$props.stopLoading;
      return React.createElement(PageContainer, {
        className: "dash-page"
      }, React.createElement(PageHeader, {
        breadcrumbs: this.props.pageBreadcrumbs,
        title: this.props.pageTitle,
        subTitle: this.props.pageSubtitle,
        actions: this.props.pageActions
      }), React.createElement(PageContent, null, React.cloneElement(this.props.children, {
        startLoading: startLoading,
        stopLoading: stopLoading
      })));
    }
  }]);

  return DashPageComponent;
}(Component);

export default DashPageComponent;