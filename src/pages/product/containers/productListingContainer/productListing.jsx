import React from 'react';
import { connect } from 'react-redux';
import '../../index.scss';
import DefaultCar from '../../../../assets/images/default_car.jpeg';

const ProductListingContainer = (props) => {
  const { products_listing } = props;
  const products = products_listing.map((product, index) => {
    return (
      <div key={index} className="col-xs-12 col-sm-6 col-md-4">
        <div className="image-flip">
          <div className="mainflip">
            <div className="frontside">
              <div className="card">
                <div className="card-body text-center">
                  <p>
                    <img
                      className=" img-fluid"
                      src={product.Record.image}
                      alt="product"
                    />
                  </p>
                  <h4 className="card-title">{product.name}</h4>
                  <p className="card-text">{product.Record.description}</p>
                  <p className="card-text">
                    <strong>Color</strong>: {product.Record.color}
                    <br />
                    <strong>Product Type</strong>: {product.Record.docType}
                    <br />
                    <strong>Make</strong>: {product.Record.make}
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
                <div className="card-body text-center mt-4">
                  <p>
                    <img
                      className=" img-fluid"
                      src={product.Record.image}
                      alt="product"
                    />
                  </p>
                  <h4 className="card-title">{product.name}</h4>
                  <p className="card-text">{product.Record.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
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
  const { products_listing } = state.PRODUCTS;
  return {
    products_listing
  };
}

export default connect(mapStateToProps)(ProductListingContainer);
