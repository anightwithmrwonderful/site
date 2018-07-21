import React from 'react'
import styles from './styles.module.scss'
import { Link } from '@reach/router'
import shortid from 'shortid'

export default ({ style }) => (
  <div className={ styles.container }>
    <div>
      {
        [  {
          to: '/',
          children: 'About',
        }, {
          to: '/shows',
          children: 'Shows',
        }, {
          to: '/media',
          children: 'Media',
        }, {
          to: '/contact',
          children: 'Contact',
        }, ].map((props) => (
          <Link
            key={ shortid.generate() }
            { ...props }
            getProps={({ isCurrent }) => ({
              className: isCurrent
                ? styles.active
                : styles.link
            })}
          />
        ))
      }
    </div>
  </div>
)