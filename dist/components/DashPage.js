import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import { Global } from './Style';
import DashPageComponent from './DashPageComponent';
import Loading from 'react-loading-bar';
import 'react-loading-bar/dist/index.css';

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
      return React.createElement(React.Fragment, null, React.createElement(Global, null), React.createElement(DashPageComponent, this.props), React.createElement(Loading, {
        show: this.props.loading,
        color: "#E21306"
      }));
    }
  }]);

  return DashPage;
}(Component);

export default DashPage;