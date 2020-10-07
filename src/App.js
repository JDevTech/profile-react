import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

//PAGE COMPONENTS
import ProfilePage from './pages/profile';
import GalleryPage from './pages/gallery';
import ProductsPage from './pages/products';

//CUSTOM COMPONENTS
import { Main, Row, Column, Sidebar, Title } from "./components"


const MenuOption = (props) => {
  return (
    <Column xs="4" sm="12" md="12" lg="12">
      <Link to={props.goTo}><Title>{props.title}</Title></Link>
    </Column>
  )
}

MenuOption.propTypes = {
  goTo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

const Layout = ({ history, children }) => {
  return (
    <Main showTitle={false}>
      <Row>
        <Column sm="2" md="2" lg="2" disabledMargin>
          <Sidebar>
            <MenuOption goTo="/" title="Profile" history={history} />
            <MenuOption goTo="/gallery" title="Gallery" history={history} />
            <MenuOption goTo="/products" title="Products" history={history} />
          </Sidebar>
        </Column>
        <Column sm="10" md="10" lg="10" disabledMargin disabledPadding>
          {children}
        </Column>
      </Row>
    </Main>
  )
}

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Route render={(props) => (
        <Layout {...props}>
          <Switch>
            <Route exact path="/" component={ProfilePage} />
            <Route path="/gallery" component={GalleryPage} />
            <Route path="/products" component={ProductsPage} />
          </Switch>
        </Layout>
      )}/>
    </BrowserRouter>
  )
}

const App = ({ store }) => {
  return (
    <Provider store={store} >
      <Routes />
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;
