import React from 'react';
import Prismic from 'prismic-javascript';

export default class Footer extends React.Component {

  state = {
    data: null,
    notFound: false,
  }

  componentWillMount() {
    this.fetchFooter();
  }

  fetchFooter() {
    const apiEndpoint = 'https://nimbus.cdn.prismic.io/api/v2';
    Prismic.api(apiEndpoint).then(api => {
      api.query(
        Prismic.Predicates.at('document.type', 'footer'),
      ).then(response => {
        const data = response.results
        this.setState({ data });
      });
    });
  }

  render() {
    if (this.state.data) {
      console.log('footer', this.state.data)
      return (
        <div className="footer-container"> {this.state.data.map((data) => 
          {
            return <img src={data.data.image.url} alt="" className="footer-image" key={data.data.image.url} />
          })}
        </div>
      )
    } else {
      return <h1>working on stuff...</h1>
    }
  } 
}
