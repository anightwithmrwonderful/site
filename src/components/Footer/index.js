import React, { Fragment } from 'react'
import styles from './styles.module.scss'
import { Link } from 'components'

export default () => (
  <Fragment>
    <div className={ styles.preFooter } />
    <footer className={ styles.container }>
      <div className={ styles.links }>
        <Link>First Link</Link>
        <div>|</div>
        <Link>Second Link</Link>
        <div>|</div>
        <Link>Third Link</Link>
      </div>
      <div className={ styles.copyright }>
        { `Copyright © ${ (new Date()).getFullYear() }, Mr. Wonderful` }
      </div>
    </footer>
  </Fragment>
)