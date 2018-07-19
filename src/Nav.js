import React from 'react';
// import PrismicReact from 'prismic-reactjs';
// import {Link, RichText, Date} from 'prismic-reactjs';
import Prismic from 'prismic-javascript';

export default class Nav extends React.Component {

  state = {
    data: null,
    notFound: false,
  }

  componentWillMount() {
    this.fetchNavData();
  }

  fetchNavData() {
    const apiEndpoint = 'https://nimbus.cdn.prismic.io/api/v2';

    Prismic.api(apiEndpoint).then(api => {
      api.query(
        Prismic.Predicates.at('document.type', 'navigation'),
      ).then(response => {
        const data = response.results[0].data
        this.setState({ data });
      });
    });
  }

  render() {
    if (this.state.data) {
      let links = [];
      for (let i = 1; i <= 5; i += 1) {
        links.push(this.state.data[`link${i}`].url)
      }
      return ( 
        <ul>
          {links.map(function(link, i){
            return <li key={i}>{link}</li>;
          })}
        </ul>)
    } else {
      return <h1>working on stuff...</h1>
    }
}

}