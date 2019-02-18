import styled, {createGlobalStyle} from 'styled-components'
import Poppins from '../../assets/fonts/Poppins-Regular.ttf'

export const Global = createGlobalStyle`
  @font-face {
    font-family: Poppins;
    src: url(${Poppins}), format("TrueType");
    font-display: fallback;
  }
  .dash-page {
    color: rgb(89,89,89);
    font-family: 'Poppins', sans-serif;
  }

  .dash-page small {
    font-size: 15px;
    color: rgb(100,100,100);
  }
`


export const PageContainer = styled.div`
  padding: 0 5px;
  width: 100%;
`

export const PageTitle = styled.h1`
  font-size: 30px;
`

export const PageContent = styled.div`
  width: 100%;
`