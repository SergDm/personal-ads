import React from 'react'
import { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getProducts } from '../../data/productReducer'
import Main from './Main'

class MainContainer extends Component {
  componentDidMount() {
    this.props.getProducts()
  }
  render() {
    return (
      <div>
        <Main products={this.props.products}/>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    products: state.productsPage.products,
    isLoader: state.productsPage.isLoader
  }
}

export default compose(connect(mapStateToProps, { getProducts }))(MainContainer)