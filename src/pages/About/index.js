import React from 'react'
import { Section, TextOrLink, Masonry } from 'components'
// import shortid from 'shortid'
import styles from './styles.module.scss'

export default () => (
  <div>

    <Section>
      <div className={ styles.section }>

        <img
          src={ require('assets/images/banner.png') }
          alt='Banner'
          className={ styles.banner }
        />

        <div
          children={ `“Vehicle The Remix,” The Latest Single` }
          className={ styles.headline }
        />

        <TextOrLink
          href='https://anightwithmrwonderful.com'
          children={ `Now available through online music distributors and right here on our own website.` }
          className={ styles.subHeadline }
        />

        <img
          src={ require('assets/images/headshot.jpg') }
          alt='Headshot'
          className={ styles.headshot }
        />

        <div
          children={ `Karen Sterling Photography ` }
          className={ styles.headshotCredit }
        />

        <p
          children={ `NYC based writer, producer, and actor, Kee has played numerous roles around the country in shows like DREAMGIRLS, AIN’T MISBHAVIN, CHICAGO, and many more. His most memorable role is that of Sammy Davis Jr. in FLY ME TO THE MOON, THE RAT PACK LOUNGE, and THE PACK. In 2011 Kee began working on his own project which was titled I’M JUST HERE TO MAKE THE WORLD TASTE GOOD and it premiered at Seven Angels Theatre in Waterbury, CT on August 11th of 2012. After a successful run he decided to bring it to New York City and the show debuted on March 9th of 2013 and played to a sold out house. In 2013 a revamped show covering the Sammy Davis Jr song book, under the title A NIGHT WITH MR. WONDERFUL made its way to Interlakes Theatre. The show has continued to have an abundance of success and has traveled around the country.` }
          className={ styles.bio }
        />

        <div
          children={ `Now that we've introduced Kee, here's what others had to say:` }
          className={ styles.reviewSectionHeadline }
        />

        <div
          children={ `Attended the show this past weekend! You are star! Great job. Just wanted to let you know how much we enjoyed watching you!` }
          className={ styles.review }
        />
        <div
          children={ `Dave Elias, Investigative Reporter NBC 2 WBBH-TV` }
          className={ styles.reviewer }
        />

        <div
          children={ `I got a call yesterday from one of our business advertisers who not only saw the show, but said that the WHOLE TOWN is talking about your show since last weekend! And I've gotten notes that say that the summer season was great and you were the icing on the cake! So glad we did this.` }
          className={ styles.review }
        />
        <div
          children={ `Nancy Sagrestano Barry, Executive Producer Interlakes Theatre` }
          className={ styles.reviewer }
        />

        <div
          children={ `A highlight was “I’ve Got the World on a String” sung in the style of a long list of noted singers that included Jimmy Durante, Nat King Cole, Louis Armstrong, Frank Sinatra, Billie Holliday, and even Mae West!` }
          className={ styles.review }
        />
        <div
          children={ `Nancy Sasso Janis, OnStage Critic` }
          className={ styles.reviewer }
        />

      </div>
    </Section>

    <Masonry.Container>
      {
        // [
        //   {
        //     backgroundImage: require(),
        //     title: 
        //   }
        // ].map(({
        //   backgroundImage,
        //   title,
        // }) => (
        //   <Masonry.Item>
        //     <div>
        //       <div style={{ backgroundImage }} />
        //       <div>{ title }</div>
        //     </div>
        //   </Masonry.Item>
        // ))
      }
    </Masonry.Container>

  </div>
)