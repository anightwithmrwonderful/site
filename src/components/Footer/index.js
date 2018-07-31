import React, { Fragment } from 'react'
import styles from './styles.module.scss'
import { Link } from 'components'

export default () => (
  <Fragment>
    <div className={ styles.preFooter } />
    <footer className={ styles.container }>
      <div className={ styles.links }>
        <Link href='https://www.facebook.com/anightwithmrwonderful/'>Facebook</Link>
        <div>|</div>
        <Link href='https://www.instagram.com/anightwithmrwonderful/'>Instagram</Link>
        <div>|</div>
        <Link href='https://soundcloud.com/solomon-kee'>SoundCloud</Link>
      </div>
      <div className={ styles.copyright }>
        { `Copyright © ${ (new Date()).getFullYear() }, Mr. Wonderful` }
      </div>
    </footer>
  </Fragment>
)