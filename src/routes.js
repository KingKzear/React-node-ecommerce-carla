import React, { useEffect, useState } from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom'

import history from "./history";
import HomePage from './layouts/home'
import LoginPage from './layouts/authentication/login'
import SearchResult from './layouts/search-result'
import VisualFilter from './layouts/visual-filter'
import DigitalCategory from './layouts/digital-category'
import OurProcess from './layouts/about-us/our-process'
import MeetFamily from './layouts/about-us/meet-family'
import MeetMakers from './layouts/about-us/meet-makers'
import History from './layouts/about-us/history'
import Store from './layouts/retail-partner/store'
import DisplayOption from './layouts/retail-partner/option';
import Register from './layouts/authentication/register';
import Cart from './layouts/cart';

import AdminLogin from './layouts/admin/views/login'
import Dashboard from './layouts/admin/views/dashboard/Dashboard';
import CreateUser from './layouts/admin/views/user/create';
import AllUsers from './layouts/admin/views/user/all';
import CreateProduct from './layouts/admin/views/product/create';
import AllProducts from './layouts/admin/views/product/all';
import StylesComponent from './layouts/admin/views/product/styles';
import CollectionsComponent from './layouts/admin/views/product/collections';
import CreateStore from './layouts/admin/views/store/create';
import AllStores from './layouts/admin/views/store/all';
import CreateOrder from './layouts/admin/views/order/create';
import AllOrders from './layouts/admin/views/order/all';
import BoxPacking from './layouts/admin/views/utility/box-packing';

function Routes (props) {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/search-result' component={SearchResult}/>
        <Route path='/visual-filter' component={VisualFilter}/>
        <Route path='/digital-catalogs' component={DigitalCategory}/>
        <Route path='/process' component={OurProcess}/>
        <Route path='/meet-family' component={MeetFamily}/>
        <Route path='/meet-our-makers' component={MeetMakers}/>
        <Route path='/history' component={History}/>
        <Route path='/store' component={Store}/>
        <Route path='/choose-your-display' component={DisplayOption}/>
        <Route path='/login' component={LoginPage}/>
        <Route path='/join' component={Register}/>
        <Route path='/cart' component={Cart}/>

        <Route path='/admin/login' component={AdminLogin}/>
        <Route path='/admin/dashboard' component={Dashboard}/>
        <Route path='/admin/user/create' component={CreateUser}/>
        <Route path='/admin/user/all' component={AllUsers}/>
        <Route path='/admin/product/create' component={CreateProduct}/>
        <Route path='/admin/product/all' component={AllProducts}/>
        <Route path='/admin/product/styles' component={StylesComponent}/>
        <Route path='/admin/product/collections' component={CollectionsComponent}/>
        <Route path='/admin/store/create' component={CreateStore}/>
        <Route path='/admin/store/all' component={AllStores}/>
        <Route path='/admin/order/create' component={CreateOrder}/>
        <Route path='/admin/order/all' component={AllOrders}/>
        <Route path='/admin/utility/box-packing' component={BoxPacking}/>

        <Route path='/' exact component={HomePage}/>
      </Switch>
    </Router>
  )
}

export default Routes