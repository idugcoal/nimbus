import React from 'react';
import Prismic from 'prismic-javascript';

export default class Titlebar extends React.Component {

  state = {
    data: null,
    notFound: false,
  }

  componentWillMount() {
    this.fetchArticles();
  }

  fetchArticles() {
    const apiEndpoint = 'https://nimbus.cdn.prismic.io/api/v2';
    Prismic.api(apiEndpoint).then(api => {
      api.query(
        Prismic.Predicates.at('document.type', 'article'),
      ).then(response => {
        const data = response.results
        this.setState({ data });
      });
    });
  }

  renderTitleBarArticle(data) {
    return (
      <div className="titlebar-article" key={data.data.uid}>
        <div className="titlebar-title">{data.data.title[0].text}</div>
        <div className="titlebar-date">{data.data.data}</div>
        <img src={data.data.image.url} alt="" />
      </div>
    );
  }

  render() {
    if (this.state.data) {
      return this.state.data.map((articleData) => {
        return this.renderTitleBarArticle(articleData)
      })
    } else {
      return <h1>working on stuff...</h1>
    }
  } 
}
