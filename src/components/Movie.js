import React, { Component } from "react";
import PropTypes from "prop-types";

class Movie extends Component {
  render() {
    const { id, year, title, summary, poster } = this.props;

    return (
      <div class="movie">
        <img src={poster} art={title} title={title} />
        <div class="movie__data">
          <h3 class="movie__title">{title}</h3>
          <h5 class="movie__year">{year}</h5>
          <p class="movie__summary">{summary}</p>
        </div>
      </div>
    );
  }
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movie;
