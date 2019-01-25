import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

import { Container } from 'Styled/Grids'
/* Import Components Start */
import Header from 'Components/Header'
/* Import Pages Start */
import Library from 'Pages/Library'

const Routes = () => (
  <>
    <Header />
    <Container>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/library" />} />

        <Route exact path="/library" component={Library} />
      </Switch>
    </Container>
  </>
)

export default Routes
