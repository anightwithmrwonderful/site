import React, { Component, Fragment } from 'react'
import styles from './styles.module.scss'
import Masonry from 'react-masonry-component'
import ImageZoom from 'react-medium-image-zoom'
import * as contentful from 'contentful'

export default class extends Component {

  render () {
    return this.state && this.state.contentLoaded ? (
      <div className={ styles.masonrySection }>
        <div>

          {
            this.state.groups.map(group => (
              <Fragment>
                <div
                  children={ group.label }
                  className={ styles.sectionTitle }
                />
                <Masonry>
                  {
                    group.media.map(({
                      url,
                      title,
                    }) => {
                      console.log(url)
                      return (
                      <div className={ styles.masonryItem }>
                        <ImageZoom
                          image={{
                            src: `${ url }?w=300`
                          }}
                          zoomImage={{
                            src: url
                          }}
                        />
                      </div>
                    )})
                  }
                </Masonry>
              </Fragment>
            ))
          }

        </div>
      </div>
    ) : null
  }

  componentDidMount() {
    const client = contentful.createClient({
      space: 'drbs7qyt0aoj',
      accessToken: 'ec1b1b32f2004efc94a0cb31896988632851d546a618842a68ed1d6351619995'
    })
    client.getEntries({ content_type: 'mediaPage', include: 3, }).then(response => {
      const groups = response.items[0].fields.mediaGroups
        .map(g => g.fields)
        .map(h => ({
          label: h.label,
          media: h.media.map(m => m.fields.image.fields.file)
        }))
      this.setState({ groups, contentLoaded: true }, () => console.log(this.state))
    })
  }

}