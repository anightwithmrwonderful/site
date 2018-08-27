import React, { Component, Fragment } from 'react'
import { Section, LinkOrDiv } from 'components'
import styles from './styles.module.scss'
import * as contentful from 'contentful'

export default class extends Component {

  state = { contentLoaded: false }

  render() {
    return this.state && this.state.contentLoaded ? (
      <div>

        <Section>
          <div className={ styles.section }>

            <img
              src={ require('assets/images/banner.png') }
              alt='Banner'
              className={ styles.banner }
            />

            <div
              children={ this.state.headline }
              className={ styles.headline }
            />

            <LinkOrDiv
              href={ this.state.subheadlineUrl ? this.state.subheadlineUrl : null }
              children={ this.state.subheadline }
              className={ styles.subHeadline }
            />

            <img
              src={ this.state.landingImage.fields.file.fields.file.url }
              alt='Headshot'
              className={ styles.headshot }
            />

            <div
              children={ this.state.landingImage.fields.author }
              className={ styles.headshotCredit }
            />

            <p
              children={ this.state.bio }
              className={ styles.bio }
            />

            <div
              children={ this.state.reviewSectionHeadline }
              className={ styles.reviewSectionHeadline }
            />

            {
              this.state.reviews.map(review => review.fields && review.fields.body ? (
                <Fragment>
                  <div
                    children={ review.fields.body }
                    className={ styles.review }
                  />
                  <div
                    children={ review.fields.author }
                    className={ styles.reviewer }
                  />
                </Fragment>
              ) : null)
            }

          </div>
        </Section>

      </div>
    ) : null
  }

  componentDidMount() {
    const client = contentful.createClient({
      space: 'drbs7qyt0aoj',
      accessToken: 'ec1b1b32f2004efc94a0cb31896988632851d546a618842a68ed1d6351619995'
    })
    client.getEntries({ content_type: 'text' }).then(response => {
      console.log(response)
      this.setState({ ...response.items[0].fields, contentLoaded: true }, () => console.log(this.state))
    })
  }

}