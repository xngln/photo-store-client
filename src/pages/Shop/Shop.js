import React from "react"
import { ApolloClient, ApolloProvider, InMemoryCache, withApollo, gql } from '@apollo/client';
import { loadStripe } from '@stripe/stripe-js';

import "./shop.scss"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

let server_address;
if (process.env.APP_ENV == "PROD") {
  server_address = "https://protected-bastion-36826.herokuapp.com/query"
} else {
  server_address = "http://localhost:8080/query"
}
const client = new ApolloClient({
  uri: server_address, 
  cache: new InMemoryCache()
});

const stripePromise = loadStripe("pk_test_51IArflBaVACZJJ1ZfTZON87VWVU38cOAzgePYeJiAf60uR8IVdVYxtceT5CNlTvl3WJB4kro6SQUAg12Ede5DvLA00JqnGlNl9");


class Shop extends React.Component {
  constructor() {
    super();
    
    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    client.query({
      query: gql`
        query {
	        images {
            _id
            price	
            name
            thumbnail_url
          }
        }
      `
    }).then(result => {
      console.log(result)
      this.setState({
        photos: result.data.images
      });
    });
  }

  handleClick = async (photo, event) => {
    const stripe = await stripePromise;

    const request = (apolloClient) => apolloClient
      .mutate({
        mutation: gql`
          mutation ($photoID: String!){
            createCheckoutSession(photoID: $photoID)
          }
        `,
        variables: {
          photoID: photo._id,
        },
      })

    const response = await request(client);
    const sessionid = response.data.createCheckoutSession
    const result = await stripe.redirectToCheckout({
      sessionId: sessionid,
    });
    if (result.error) {
      // handle error
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="layer">
          <div className="page-title">Shop</div>

          {
            this.state.photos.map((photo) => {
              return (
                <React.Fragment>
                  <div className="squareImage">
                    <img src={photo.thumbnail_url} alt={photo.name} />
                  </div>

                  <div className="buy-btn" 
                    onClick={(event) => this.handleClick(photo, event)}>
                        buy fullsize digital file - ${photo.price}
                  </div>
                </React.Fragment>
              )
            })
          }

        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Shop
