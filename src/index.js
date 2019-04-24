import React from 'react'
import { render } from "react-dom"
import 'bootstrap-grid'
import DashPage from './lib'
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styled from 'styled-components';

const SomeLink = styled.a`
  color: #E21306
`
const BoxSizing = createGlobalStyle`
  .dash-page * {
    box-sizing: border-box;
  }
`

const App = () => (
  <React.Fragment>
    <ThemeProvider theme={{mode: 'dark', primaryContrastDark: '#2b324c', primaryDark: '#ebebeb' }}>
      <DashPage className='dash-page'
        pageBreadcrumbs={[{
          name: 'Dashboard',
          to: '/dashboard',
          component: <SomeLink/>
        }, {
          name: 'Something',
          to: '/dashboard/something',
          component: <SomeLink/>
        }]}
        pageActions={
          <div>
            <button>Oi</button>
            <button>Test</button>
          </div>
        }
        pageSubtitle='Esse é o teste do component DashPage.'
        pageTitle='Test Dash Page'
        loading={false}>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </DashPage>
    </ThemeProvider>
    <BoxSizing/>
  </React.Fragment>
);

render(<App />, document.getElementById("root"));
