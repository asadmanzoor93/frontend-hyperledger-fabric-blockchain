import React from 'react';
import { connect } from 'react-redux';
import '../../index.scss';
import DefaultCar from '../../../../assets/images/default_car.jpeg';

const ProductListingContainer = (props) => {
  const { products_listing } = props;
  const products = products_listing.map((product, index) => {
    return (
      <div className="col-xs-12 col-sm-6 col-md-4">
        <div className="image-flip" onTouchStart="this.classList.toggle('hover');">
          <div className="mainflip">
            <div className="frontside">
              <div className="card">
                <div className="card-body text-center">
                  <p>
                    <img className=" img-fluid" src={DefaultCar} alt="car image" />{' '}
                  </p>
                  <h4 className="card-title">{product.Key}</h4>
                  <p className="card-text">
                    <strong>color</strong>: {product.Record.color}
                    <br />
                    <strong>docType</strong>: {product.Record.docType}
                    <br />
                    <strong>make</strong>: {product.Record.make}
                    <br />
                    <strong>model</strong>: {product.Record.model}
                    <br />
                    <strong>owner</strong>: {product.Record.owner}
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="backside">
              <div className="card">
                <div className="card-body text-center mt-4">
                  <h4 className="card-title">{product.Key}</h4>
                  <p className="card-text">
                    <strong>color</strong>: {product.Record.color}
                    <br />
                    <strong>docType</strong>: {product.Record.docType}
                    <br />
                    <strong>make</strong>: {product.Record.make}
                    <br />
                    <strong>model</strong>: {product.Record.model}
                    <br />
                    <strong>owner</strong>: {product.Record.owner}
                    <br />
                  </p>
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
