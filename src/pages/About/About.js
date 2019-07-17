import React from "react"
import "./about.scss"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="contact-title">david</div>
        <p className="about">- about -</p>
        <div className="about-content" >
          <p>Boom badda beep pow</p>
          <p> art is cool</p>
          <p>have a nice day : )</p>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default About
