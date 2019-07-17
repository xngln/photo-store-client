import React from "react"
import "./header.scss"

class Header extends React.Component {
  render() {
    return (
      <header className="style-header">
        <div className="logo">
          <a href="/"> david liu </a>
        </div>
        <div className="menu">
          <div className="menu-item-wrapper" style={{ width: "55px", right: "20px", position: "relative" }}>
            <a className="item" href="/urban">urban</a>
          </div>
          <div className="menu-item-wrapper" style={{ width: "83px" }} >
            <a className="item" href="/culture">culture</a>
          </div>
          <div className="menu-item-wrapper" style={{ width: "80px" }}>
            <a className="item" href="/people">people</a>
          </div>
          <div className="menu-item-wrapper" style={{ width: "78px" }}>
            <a className="item" href="/nature">nature</a>
          </div>
          <div className="menu-item-wrapper" style={{ width: "81px" }}>
            <a className="item" href="/presets">presets</a>
          </div>
          <div className="menu-item-wrapper" style={{ width: "71px" }}>
            <a className="item" href="/about">about</a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header
