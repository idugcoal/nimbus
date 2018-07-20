import React from 'react';
import Prismic from 'prismic-javascript';

export default class Blocks extends React.Component {

  state = {
    data: null,
    notFound: false,
  }
  constructor(props) {
    super(props);
    this.renderBlocksArticle = this.renderBlocksArticle.bind(this);
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

  renderBlocksArticle(data) {
    return (
      <div className="blocks-article" key={data.data.title[0].text}>
        <div className="blocks-title">{data.data.title[0].text}</div>
        <img src={data.data.image.url} alt="" className="blocks-image" />
      </div>
    );
  }

  render() {
    if (this.state.data) {
      return (
        <div className="blocks-container"> {this.state.data.map((articleData, index) => 
          {
            if (index < 3) {
              return this.renderBlocksArticle(articleData)
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
