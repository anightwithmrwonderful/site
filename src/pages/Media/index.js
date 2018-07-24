import React from 'react'
import styles from './styles.module.scss'
import Masonry from 'react-masonry-component'
import { LinkOrDiv } from 'components'
import ImageZoom from 'react-medium-image-zoom'
import shortid from 'shortid'

const galleryItems = [
  {
    image: require('assets/images/media/one.jpg'),
    title: 'one',
  },
  {
    image: require('assets/images/media/two.jpg'),
    title: 'two',
  },
  {
    image: require('assets/images/media/three.jpg'),
    title: 'three',
  },
  {
    image: require('assets/images/media/four.jpg'),
    title: 'four',
  },
  {
    image: require('assets/images/media/five.jpg'),
    title: 'five',
  },
  {
    image: require('assets/images/media/six.jpg'),
    title: 'six',
  },
  {
    image: require('assets/images/media/seven.jpg'),
    title: 'seven',
  }
]

export default () => (
  <div className={ styles.masonrySection }>
    <div>

      <div
        children='Media section title'
        className={ styles.sectionTitle }
      />

      <Masonry>
        {
          galleryItems.map(({
            image,
            title,
            href,
          }) => (
            <LinkOrDiv
              key={ shortid.generate() }
              className={ styles.masonryItem }
              { ...{ href } }
            >
              <div>
                {
                  href
                    ? (
                      <img
                        src={ image }
                        alt={ `Media item: ${ title }` }
                      />
                    ) : (
                      <ImageZoom
                        image={{
                          src: image,
                          alt: `Gallery item: ${ title }`,
                        }}
                        zoomImage={{
                          src: image,
                          alt: `Gallery item: ${ title }`,
                        }}
                      />
                    )
                }
                <div>{ title }</div>
              </div>
            </LinkOrDiv>
          ))
        }
      </Masonry>

    </div>
  </div>
)