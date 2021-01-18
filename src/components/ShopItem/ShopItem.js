import React from "react"
import "./shopitem.scss"

class ShopItem extends React.Component {
  render() {
    return (
      <fragment>
        <div className="squareImage">
          <img src={this.props.photo.thumbnail_url} alt={this.props.photo.name} />
        </div>

        <div className="buy-btn">buy fullsize digital file - ${this.props.photo.price}</div>
      </fragment>
    );
  }
}

export default ShopItem
