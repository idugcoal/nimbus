import React from 'react';
// import NotFound from './NotFound';
// import PrismicReact from 'prismic-reactjs';
import Nav from './Nav';
import './Home.css';

export default class Home extends React.Component {

  // state = {
  //   doc: null,
  //   notFound: false,
  // }

  // componentWillMount() {
  //   this.fetchPage(this.props);
  // }

  // componentWillReceiveProps(props) {
  //   this.fetchPage(props);
  // }

  // componentDidUpdate() {
  //   this.props.prismicCtx.toolbar();
  // }

  // fetchPage(props) {
  //   if (props.prismicCtx) {
  //     // We are using the function to get a document by its uid
  //     return props.prismicCtx.api.getByUID('home', props.match.params.uid, {}, (err, doc) => {
  //       if (doc) {
  //         // We put the retrieved content in the state as a doc variable
  //         this.setState({ doc });
  //       } else {
  //         // We changed the state to display error not found if no matched doc
  //         this.setState({ notFound: !doc });
  //       }
  //     });
  //   }
  //   return null;
  // }

  render() {
    return (
      <div className="container">
        <Nav className="nav"></Nav>
        <div className="titlebar"></div>
        <div className="hero"></div>
        <div className="blocks"></div>
        <div className="footer"></div>
      </div>

    );

  }

}