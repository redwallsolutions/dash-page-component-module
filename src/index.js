import React from 'react'
import { render } from "react-dom"

import DashPage from './lib'

const App = () => (
  <DashPage
    breadcrumbs={[{
      name: 'Dashboard',
      to: '/dashboard'
    }]}
    pageSubtitle='Esse é o teste do component DashPage.'
    pageTitle='Test Dash Page'
    loading={true}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </DashPage>
);

render(<App />, document.getElementById("root"));
