import React, { Component } from 'react';
import StyleSheet from 'react-style';
import { Styles } from 'helpers/constants';

const STYLES = StyleSheet.create({
  section: {
    background: Styles.BG_COLOR_VENUE,
    color: '#fff',
    overflow: 'hidden'
  },
  container: {
    minHeight: 400,
    position: 'relative'
  },
  h2: {
    color: Styles.FONT_COLOR_VENUE
  },
  p: {
    marginLeft: 400,
    marginTop: 150
  },
  imgReactVenue: {
    position: 'absolute',
    top: -185,
    left: -250
  },
  imgVenue: {
    position: 'absolute',
    borderRadius: 150,
    width: 300,
    height: 300,
    top: 97,
    left: 33
  },
  map: {
    border: 0,
    marginLeft: 400
  },
  a: {
    color: Styles.FONT_COLOR_VENUE
  }
});

export default class Venue extends Component {
  render() {
    return (
      <section id="venue" style={STYLES.section}>
        <div style={STYLES.container}>
          <h2 style={STYLES.h2}>Venue</h2>
          <p style={STYLES.p}>
            Downtown Salt Lake City! More details coming soon.
          </p>
          {/*
          <p style={STYLES.p}>
          Located in the beautiful <a href="http://www.slccfa.org/venues/rose-wagner-performing-arts-center/" target="_blank" style={STYLES.a}>Rose Wagner Performing Arts Center</a> within walking distance of great food and hotels.
          </p>
          */}
          <img src="assets/img/reactVenue.png" style={STYLES.imgReactVenue}/>
          <img src="assets/img/venue.jpg" style={STYLES.imgVenue}/>
          {/*
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12087.806444718673!2d-111.895488!3d40.763089!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1c0bec6b46008e67!2sRose+Wagner+Performing+Arts+Center!5e0!3m2!1sen!2sus!4v1432086735738" width="600" height="450" frameBorder="0" style={STYLES.map}></iframe>
          */}
        </div>
      </section>
    );
  }
}
