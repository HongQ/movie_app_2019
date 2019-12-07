import React, { Component } from "react";
import axios from "axios";
import Movie from "./components/Movie";

class App extends Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );

    this.setState({
      movies: movies,
      isLoading: false
    });
  };

  componentDidMount() {
    this.getMovies();
  }

  renderMovie = movies => {
    return movies.map(movie => {
      return (
        <Movie
          key={movie.id}
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
        />
      );
    });
  };

  render() {
    const { isLoading, movies } = this.state;

    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading..</span>
          </div>
        ) : (
          <div class="movies">{this.renderMovie(movies)}</div>
        )}
      </section>
    );
  }
}

export default App;
