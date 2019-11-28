import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { Container, Row, Col } from 'react-bootstrap';
import './assets/sass/style.scss';
import './assets/css/custom.css';

import Products from './pages/product';
import AddProduct from './pages/addProduct';
import Header from './components/header/index';
import Footer from './components/footer/index';
import SideBar from './components/sidebar/index.jsx';
import { history } from './helpers';
import { productActions } from './pages/product/containers/productListingContainer/actions';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(productActions.fetchProducts());
  }

  render() {
    return (
      <Router history={history}>
        <Header />
        <main>
          <ReactNotification />
          <Container fluid>
            <Row>
              <Col md={2} className="sidebar">
                <SideBar />
              </Col>
              <Col md={10}>
                <main className="main-content p-3">
                  <Route exact path="/" component={Products} />
                  <Route path="/products" component={Products} />
                  <Route path="/add_product" component={AddProduct} />
                </main>
              </Col>
            </Row>
          </Container>
        </main>
        <Footer />
      </Router>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({ productActions }, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(App);
