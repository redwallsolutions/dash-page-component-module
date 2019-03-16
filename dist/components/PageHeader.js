import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import { BreadCrumbStyled, PageTitle, PageSubTitle, PageActionsContainer } from './Style';
import { Link, BrowserRouter } from 'react-router-dom';

var PageHeader =
/*#__PURE__*/
function (_Component) {
  _inherits(PageHeader, _Component);

  function PageHeader() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PageHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PageHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.renderBreadCrumbs = function () {
      var breadcrumbs = _this.props.breadcrumbs;
      return breadcrumbs && breadcrumbs.map(function (breadcrumb, index) {
        return React.createElement(React.Fragment, null, React.createElement(BreadCrumbStyled, {
          key: index,
          to: breadcrumb.to
        }, breadcrumb.name), "\xA0", index === breadcrumbs.length - 1 ? '' : ' / ', "\xA0");
      });
    };

    return _this;
  }

  _createClass(PageHeader, [{
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, React.createElement(BrowserRouter, null, this.renderBreadCrumbs()), React.createElement("div", {
        className: "row"
      }, React.createElement("div", {
        className: "col-sm-8"
      }, React.createElement("h2", null, this.props.title), React.createElement(PageSubTitle, null, this.props.subTitle)), React.createElement("div", {
        className: "col-sm-4"
      }, React.createElement(PageActionsContainer, null, this.props.actions))));
    }
  }]);

  return PageHeader;
}(Component);

export default PageHeader;