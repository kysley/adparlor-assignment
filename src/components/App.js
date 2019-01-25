import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { Global, css } from '@emotion/core'

/* Import Hot Routes */
import Routes from '../hot-routes'
/* Import Other  */
import TR from '../assets/fonts/Theinhardt-Regular.woff'
import TB from '../assets/fonts/Theinhardt-Bold.woff'
/* Import Stores Start */
import BlueprintStore from 'Stores/Blueprint'

// eslint-disable-next-line
const global = css`
  @font-face {
    font-family: Theinhardt;
    src: url(${TR}) format('woff');
  }
  @font-face {
    font-family: Theinhardt-Bold;
    src: url(${TB}) format('woff');
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: Theinhardt;
    letter-spacing: auto;
    line-height: normal;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    font-weight: 300;
    margin: 0;
    padding: 0;
    min-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    background-color: #f3f6f8;
  }
`

const blueprintStore = BlueprintStore.create()

/*
 * Init our store object, which is given to the provider
 */
const store = {
  blueprintStore,
}

const App = () => (
  <Provider {...store}>
    <>
      <Global styles={global} />
      <Router>
        <Routes />
      </Router>
    </>
  </Provider>
)

export default App
