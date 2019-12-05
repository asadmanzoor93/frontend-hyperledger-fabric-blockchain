import React from 'react';

import { AddProductContainer } from './containers/addProductContainer/addProduct';

const AddProduct = () => {
  return (
    <div>
      <section id="team" className="pb-5">
        <div className="container">
          <h5 className="section-title h1">Add New Product</h5>
          <AddProductContainer />
        </div>
      </section>
    </div>
  );
};

export default AddProduct;
