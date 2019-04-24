import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  letter-spacing: .8px;\n  color: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 5px;\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @font-face {\n    font-family: Poppins;\n    src: url(", "), format(\"TrueType\");\n    font-display: fallback;\n  }\n  .dash-page {\n    font-family: 'Poppins', sans-serif;\n    margin: 0;\n    padding:0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { createGlobalStyle } from 'styled-components';
import Poppins from './../assets/fonts/Poppins-Regular.ttf';
import Theming from 'theming-component-module';
import Color from 'color';
var theme = Theming.createThemeWithAppearance();
var defaultProps = {
  appearance: 'primary',
  theme: {
    mode: 'light'
  }
};
export var Global = createGlobalStyle(_templateObject(), Poppins);
var PageContainer = styled.div(_templateObject2(), function (props) {
  return props.theme.mode === 'light' ? Color(theme(props).contrast(props)).darken(.8).string() : Color(theme(props).color(props)).fade(.3).string();
});
PageContainer.defaultProps = defaultProps;
export { PageContainer };
var PageContent = styled.div(_templateObject3());
PageContent.defaultProps = defaultProps;
export { PageContent };
var PageTitle = styled.h2(_templateObject4(), function (props) {
  return props.theme.mode === 'light' ? Color(theme(props).contrast(props)).darken(.5).string() : theme(props).color;
});
PageTitle.defaultProps = defaultProps;
export { PageTitle };
var PageSubTitle = styled.p(_templateObject5(), function (props) {
  return props.theme.mode === 'light' ? Color(theme(props).contrast(props)).darken(.7).string() : Color(theme(props).color(props)).fade(.1).string();
});
PageSubTitle.defaultProps = defaultProps;
export { PageSubTitle };
export var PageActionsContainer = styled.div(_templateObject6());
export var BreadCrumbStyles = {
  fontSize: '16px',
  textDecoration: 'none',
  fontWeight: 'bolder',
  color: 'rgb(180,180,180)'
};