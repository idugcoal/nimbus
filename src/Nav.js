import React from 'react';
import Prismic from 'prismic-javascript';
import './App.css';

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

  renderLinks() {
    let links = [];
    for (let i = 1; i <= 5; i += 1) {
      links.push(this.state.data[`link${i}`].url);
    }
    return ( 
      <div className="nav-container">
      <img src={this.state.data.logo.url} alt="" className="nav-image" />
        <ul>
          {links.map((link, i) => {
            return <li key={i}>{link}</li>;
          })}
        </ul>
      </div>
    );
  }

  render() {
    if (this.state.data) {
     return this.renderLinks();
    } else {
      return <h1>Loading...</h1>
    }
  }
}