import React from 'react';
import Prismic from 'prismic-javascript';
import './App.css';

export default class Hero extends React.Component {

  state = {
    data: null,
    notFound: false,
  }

  componentWillMount() {
    this.fetchHeroData();
  }

  fetchHeroData() {
    const apiEndpoint = 'https://nimbus.cdn.prismic.io/api/v2';

    Prismic.api(apiEndpoint).then(api => {
      api.query(
        Prismic.Predicates.at('document.type', 'article'),
      ).then(response => {
        const data = response.results[6].data
        this.setState({ data });
      });
    });
  }

  render() {
    if (this.state.data) {
      console.log(this.state.data.body[0], this.state.data.title[0], this.state.data.image.url)
      return (
        <div className="hero-container">
          <div className="hero-text">
            <div className="hero-title">{this.state.data.title[0].text}</div>
            <div className="hero-body">{this.state.data.body[0].text}</div>
          </div>
          <img src={this.state.data.image.url} alt="" className="hero-image" />
        </div>
      );
    } else {
      return <h1>Loading...</h1>
    }
}
// <img src={this.state.data.logo.url} alt="" className="nav-image" />
}