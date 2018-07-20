import React from 'react';
import Prismic from 'prismic-javascript';

export default class Titlebar extends React.Component {

  state = {
    data: null,
    notFound: false,
  }
  constructor(props) {
    super(props);
    this.renderTitlebarArticle = this.renderTitlebarArticle.bind(this);
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

  renderTitlebarArticle(data) {
    return (
      <div className="titlebar-article" key={data.data.title[0].text}>
        <div className="titlebar-title">{data.data.title[0].text}</div>
        <div className="titlebar-date">{data.data.date}</div>
        <img src={data.data.image.url} alt="" className="titlebar-image" />
      </div>
    );
  }

  render() {
    if (this.state.data) {
      return (
        <div className="titlebar-container"> {this.state.data.map((articleData, index) => 
          {
            if (index < 4) {
              return this.renderTitlebarArticle(articleData)
            }
            return null
          })}
        </div>
      )
    } else {
      return <h1>working on stuff...</h1>
    }
  } 
}
