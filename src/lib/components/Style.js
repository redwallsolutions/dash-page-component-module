import styled, {createGlobalStyle} from 'styled-components'
import Poppins from './../assets/fonts/Poppins-Regular.ttf'
import Theming from 'theming-component-module';
import Color from 'color';

const theme = Theming.createThemeWithAppearance()

const defaultProps = {
  appearance: 'primary',
  theme: {
    mode: 'light'
  }
}

export const Global = createGlobalStyle`
  @font-face {
    font-family: Poppins;
    src: url(${Poppins}), format("TrueType");
    font-display: fallback;
  }
  .dash-page {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding:0;
  }
`
const PageContainer = styled.div`
  padding: 0 5px;
  background: ${props => props.theme.mode === 'light' ? 'rgb(232, 232, 232)' : theme(props).contrast};
  color: ${props => props.theme.mode === 'light' ? Color(theme(props).contrast(props)).darken(.8).string() : Color(theme(props).color(props)).fade(.3).string()};
`

PageContainer.defaultProps = defaultProps

export {PageContainer}

const PageContent = styled.div`
  width: 100%;
`

PageContent.defaultProps = defaultProps

export {PageContent}

const PageTitle = styled.h2`
  color: ${props => props.theme.mode === 'light' ? Color(theme(props).contrast(props)).darken(.5).string() : theme(props).color};
`

PageTitle.defaultProps = defaultProps;

export {PageTitle}

const PageSubTitle = styled.p`
  letter-spacing: .8px;
  color: ${props => props.theme.mode === 'light' ? Color(theme(props).contrast(props)).darken(.7).string() : Color(theme(props).color(props)).fade(.1).string()};
`

PageSubTitle.defaultProps = defaultProps

export {PageSubTitle}

export const PageActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const BreadCrumbStyles = {
  fontSize: '16px',
  textDecoration: 'none',
  fontWeight: 'bolder',
  color: 'rgb(180,180,180)'
}
