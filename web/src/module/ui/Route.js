import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProductRoute from '../product/ProductList'


export default function componentName() {

  return (
    <>

      <Switch>
        <Route path="/">
          <ProductRoute></ProductRoute>
        </Route>
      </Switch>
    </>
  )
}
