import React from 'react';
import { connect } from 'react-redux';
import '../../index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { NavLink, Link } from 'react-router-dom';

import { updateProductConstants } from '../../../updateProduct/containers/updateProductContainer/constants';
import { productActions } from './actions';

const ProductListingContainer = (props) => {
  const { products_listing, user_id, puchased_products_ids, dispatch } = props;
  dispatch(productActions.fetchProducts());
  const products = products_listing.map((product, index) => {
    let purchased = puchased_products_ids.indexOf(product.Record.id) > -1;
    return (
      <div key={index} className="col-xs-12 col-sm-6 col-md-4">
        <div className="image-flip">
          <div className="mainflip">
            <div className="frontside">
              <div className="card">
                <div className="card-body text-center">
                  <p>
                    <img className=" img-fluid" src={product.Record.image} alt="product" />
                  </p>
                  <h4 className="card-title">{product.name}</h4>
                  <p className="card-text">{product.Record.description}</p>
                  <p className="card-text">
                    <strong>Product Type</strong>: {product.Record.docType}
                    <br />
                    <strong>Price</strong>: {product.Record.price}
                    <br />
                    <strong>Quantity</strong>: {product.Record.quantity}
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="mainflip backside">
              <div className="card">
                <div className="card-body text-center">
                  <Link
                    style={{ display: purchased ? '' : 'none' }}
                    to="/review_product"
                    className="btn btn-success btn-lg"
                    onClick={() =>
                      props.dispatch({
                        type: updateProductConstants.EDIT_PRODUCT,
                        id: product.Record.id,
                        product: product
                      })
                    }
                  >
                    Review
                  </Link>
                  <br />
                  <span style={{ display: purchased ? '' : 'none' }} className="btn btn-success btn-lg">
                    Already Purchased
                  </span>
                  <span
                    style={{ display: purchased ? 'none' : '' }}
                    className="btn btn-success btn-lg"
                    onClick={() => props.dispatch(productActions.purchaseProduct(product.Record.id, user_id))}
                  >
                    Purchase Product
                  </span>
                  <br />
                  <Link
                    to="/update_product"
                    className="btn btn-success btn-lg"
                    onClick={() =>
                      props.dispatch({
                        type: updateProductConstants.EDIT_PRODUCT,
                        id: product.Record.id,
                        product: product
                      })
                    }
                  >
                    Edit
                  </Link>
                  <p>
                    <img className=" img-fluid" src={product.Record.image} alt="product" />
                  </p>
                  <h4 className="card-title">{product.name}</h4>
                  <p className="card-text">{product.Record.description}</p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  });

  return (
    <div>
      <NavLink to="/add_product" activeClassName="active">
        <FontAwesomeIcon icon={Icons.faAddressBook} style={{ width: '18px', marginRight: '7px' }} />
        <span>Add Product</span>
      </NavLink>
      <section id="team" className="pb-5">
        <div className="container">
          <h5 className="section-title h1">OUR Products</h5>
          <div className="row">{products}</div>
        </div>
      </section>
    </div>
  );
};

function mapStateToProps(state) {
  const { user_id, puchased_products_ids } = state.USER;
  const { products_listing } = state.PRODUCTS;
  return {
    user_id,
    products_listing,
    puchased_products_ids
  };
}

export default connect(mapStateToProps)(ProductListingContainer);
