import React from "react"
import "./home.scss"

import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

import taiwan_intersec from "../../assets/images/urban/taiwan-intersection.jpg"
import ueno from "../../assets/images/culture/ueno-temple.jpg"
import odaiba from "../../assets/images/people/odaiba.jpg"
import banff_waterfall from "../../assets/images/nature/waterfall-banff.jpg"

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="layer">
          <div className="urbanPointer link">
            <a href="/urban"><img src={taiwan_intersec} alt="Intersection in Taiwan"/></a>
            <div className="bottom-left">urban</div>
            <div className="overlay"></div>
          </div>

          <div className="culturePointer link">
            <a href="/culture"><img src={ueno} alt="Ueno Temple" /></a>
            <div className="bottom-left">culture</div>
            <div className="overlay"></div>
          </div>

          <div className="peoplePointer link">
            <a href="/people"><img src={odaiba} alt="Odaiba Bridge at Night" /></a>
            <div className="bottom-left">people</div>
            <div className="overlay"></div>
          </div>

          <div className="naturePointer link">
            <a href="/nature"><img src={banff_waterfall} alt="Waterfall in Banff National Park" /></a>
            <div className="bottom-left">nature</div>
            <div className="overlay"></div>
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home
