import React from "react"
import "./portfolio.scss"

import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

import odaiba from "../../assets/images/culture/odaiba-bridge.jpg"
import osaka_jo from "../../assets/images/culture/osaka-jo.jpg"
import shrines_lady from "../../assets/images/culture/shrines-lady.jpg"
import ueno from "../../assets/images/culture/ueno-temple.jpg"

import forest from "../../assets/images/nature/forest.jpg"
import lake_louise from "../../assets/images/nature/lake-louise.jpg"
import roses from "../../assets/images/nature/roses.jpg"
import banff_waterfall from "../../assets/images/nature/waterfall-banff.jpg"

import ginza from "../../assets/images/people/ginza.jpg"
import greggo_2 from "../../assets/images/people/greggo-2.jpg"
import greggo from "../../assets/images/people/greggo.jpg"
import odaiba_portrait from "../../assets/images/people/odaiba.jpg"

import skytree_sunset from "../../assets/images/urban/skytree-2.jpg"
import taiwan_intersec from "../../assets/images/urban/taiwan-intersection.jpg"
import taiwan_mall from "../../assets/images/urban/taiwan-mall-interior.jpg"
import skytree_view from "../../assets/images/urban/view-skytree.jpg"

const culture = [odaiba, osaka_jo, shrines_lady, ueno];
const nature = [forest, lake_louise, roses, banff_waterfall];
const people = [greggo, greggo_2, ginza, odaiba_portrait];
const urban = [skytree_sunset, taiwan_intersec, taiwan_mall, skytree_view];

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    let photos = [];
    let next = "";
    switch (this.props.category) {
      case "culture":
        photos = culture;
        next = "nature";
        break;
      case "nature":
        photos = nature;
        next = "people";
        break;
      case "people":
        photos = people;
        next = "urban";
        break;
      case "urban":
        photos = urban;
        next = "culture";
        break;
      default:
        break;
    }
    this.state = {
      photos,
      next
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="layer">
          <div className="page-title">{this.props.category}</div>

          {
            this.state.photos.map((photo) => {
              return (
                <div className="squareImage">
                  <img src={photo} alt={photo} />
                </div>
              )
            })
          }

          <center><a href={`/${this.state.next}`} className="next">next: {this.state.next}</a></center>

        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Portfolio
