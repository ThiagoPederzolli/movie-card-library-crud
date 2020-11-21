import React, { Component } from 'react';
import fitavhs from './fitavhs.jpeg';
import './Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="loading-container">
        <img
          className="loading-image"
          src={fitavhs}
          alt="imagem loading from Unsplash Morgan Vander Hart"
        />
      </div>
    );
  }
}

export default Loading;
