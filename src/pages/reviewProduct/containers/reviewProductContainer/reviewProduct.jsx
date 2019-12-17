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
      id: props.id,
      name: props.name,
      user_id: props.user_id,
      review_detail: props.review_detail
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
              <Form.Group controlId="id">
                <label>Product</label>
                <Col sm="9">
                  <input type="text" id="id" name="id" className="form-control" value={this.state.name} readOnly />
                </Col>
              </Form.Group>

              <Form.Group controlId="review_detail">
                <label>Review</label>
                <Col sm="9">
                  <textarea
                    rows="5"
                    cols="50"
                    name="review_detail"
                    className="form-control"
                    value={this.state.review_detail}
                    onChange={this.handleChange}
                    required
                  >
                    {this.state.review_detail}
                  </textarea>
                </Col>
              </Form.Group>

              <Form.Group controlId="submit" sm="md-auto">
                <label>&nbsp;</label>
                <Col sm="9">
                  <input type="submit" value="Save" className="btn btn-primary btn-lg" />
                  &nbsp;&nbsp;
                  <Link className="btn btn-primary btn-lg" to="/">
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
  const { id, name } = state.UPDATE_PRODUCT;
  const { user_id, review_detail } = state.REVIEW_PRODUCT;

  return {
    id,
    name,
    user_id,
    review_detail
  };
}

const reviewProduct = connect(mapStateToProps)(ReviewProductContainer);
export { reviewProduct as ReviewProductContainer };
