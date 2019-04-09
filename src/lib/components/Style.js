import styled, {createGlobalStyle} from 'styled-components'
import Poppins from './../assets/fonts/Poppins-Regular.ttf'

export const Global = createGlobalStyle`
  @font-face {
    font-family: Poppins;
    src: url(${Poppins}), format("TrueType");
    font-display: fallback;
  }
  .dash-page {
    color: rgb(89,89,89);
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding:0;
  }

  .dash-page small {
    font-size: 15px;
    color: rgb(100,100,100);
  }
`
export const PageContainer = styled.div`
  padding: 0 5px;
`

export const PageContent = styled.div`
  width: 100%;
`

export const PageSubTitle = styled.p`
  letter-spacing: .8px;
`

export const PageActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const BreadCrumbStyles = {
  fontSize: '16px',
  'textDecoration': 'none',
  'fontWeight': 'bolder',
  'color': 'rgb(150,150,150)'
}
