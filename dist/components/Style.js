import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-size: 16px;\n  color: inherit;\n  text-decoration: none;\n  font-weight: bolder;\n  color: rgb(150,150,150)\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  letter-spacing: .8px;\n"]);

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
import Poppins from './../assets/fonts/Poppins-Regular.ttf';
import { Link } from 'react-router-dom';
export var Global = createGlobalStyle(_templateObject(), Poppins);
export var PageContainer = styled.div(_templateObject2());
export var PageContent = styled.div(_templateObject3());
export var PageSubTitle = styled.p(_templateObject4());
export var BreadCrumbStyled = styled(Link)(_templateObject5());