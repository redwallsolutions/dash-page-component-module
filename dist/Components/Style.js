import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 30px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 5px;\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @font-face {\n    font-family: Poppins;\n    src: url(", "), format(\"TrueType\");\n    font-display: fallback;\n  }\n  .dash-page {\n    color: rgb(89,89,89);\n    font-family: 'Poppins', sans-serif;\n  }\n\n  .dash-page small {\n    font-size: 15px;\n    color: rgb(100,100,100);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { createGlobalStyle } from 'styled-components';
import Poppins from '../../assets/fonts/Poppins-Regular.ttf';
export var Global = createGlobalStyle(_templateObject(), Poppins);
export var PageContainer = styled.div(_templateObject2());
export var PageTitle = styled.h1(_templateObject3());
export var PageContent = styled.div(_templateObject4());