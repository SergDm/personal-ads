import React from 'react'
import classes from './Main.module.css'
import noimg from '../image/noimg.png'

const Main = (props) => {
  function createMarkup(html) {
    return { __html: html };
  }
  return (
    <div className={classes.productsWrapper}>
      {
        props.products.map((product, i) =>
          <div key={i} className={classes.products}>
            <div className={classes.content}>
              <div className={classes.source}>{product.title}</div>
              <img src={!product.img ? noimg : product.img} alt='img' />
              <p>{product.group}</p>
              <div dangerouslySetInnerHTML={createMarkup(product.description)} />
            </div>
          </div>)
      }
    </div>
  )
}

export default Main