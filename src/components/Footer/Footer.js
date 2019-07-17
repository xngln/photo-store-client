import React from "react"
import "./footer.scss"

import mail from "../../assets/images/mail.png"
import instagram from "../../assets/images/instagram.jpg"

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-style">
        <center>
          <div>
            <a className="instagram-logo" href="https://www.instagram.com/_davidl_/" target="_blank" rel="noopener noreferrer" >
              <img src={instagram} width="18" alt="instagram logo" />
            </a>
            <a className="email-logo" href="mailto:davxliu@gmail.com">
              <img src={mail} width="20.4" alt="letter logo" />
            </a>
		      </div>
        </center>
	    </footer>
    );
  }
}

export default Footer
