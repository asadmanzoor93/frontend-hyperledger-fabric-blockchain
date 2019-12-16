import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Form } from 'react-bootstrap';
import '../../index.scss';

import { reviewProductActions } from './actions';
import { Link } from 'react-router-dom';

class ReviewProductContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: props.user_id,
      product_id: props.product_id,
      description: props.description
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  reviewProduct = (e) => {
    e.preventDefault();
    if (this.state) {
      this.props.dispatch(reviewProductActions.reviewProduct(this.state));
    }
  };

  render() {
    const { match } = this.props;
    return (
      <Col md={12}>
        <h1>{match}</h1>
        <div className="tabs" id="accountSettings">
          <div className="tab-content">
            <form name="accounts_settings" onSubmit={this.reviewProduct} className="profile-form">
              <Form.Group controlId="name">
                <label>Product</label>
                <Col sm="9">
                  <input
                    type="text"
                    id="product_id"
                    name="product_id"
                    className="form-control"
                    value={this.state.product_id}
                    onChange={this.handleChange}
                    required
                  />
                </Col>
              </Form.Group>

              <Form.Group controlId="description">
                <label>Description</label>
                <Col sm="9">
                  <textarea
                    rows="4"
                    cols="50"
                    name="description"
                    className="form-control"
                    value={this.state.description}
                    onChange={this.handleChange}
                    required
                  >
                    {this.state.description}
                  </textarea>
                </Col>
              </Form.Group>

              <Form.Group controlId="submit" sm="md-auto">
                <label>&nbsp;</label>
                <Col sm="9">
                  <input type="submit" value="Update" className="btn btn-primary btn-lg" />
                  &nbsp;&nbsp;
                  <Link class="btn btn-primary btn-lg" to="/">
                    Cancel
                  </Link>
                </Col>
              </Form.Group>
            </form>

            <br />
            <hr />
            <br />
          </div>
        </div>
      </Col>
    );
  }
}

function mapStateToProps(state) {
  const { user_id, product_id, description } = state.REVIEW_PRODUCT;

  return {
    user_id,
    product_id,
    description
  };
}

const reviewProduct = connect(mapStateToProps)(ReviewProductContainer);
export { reviewProduct as ReviewProductContainer };
