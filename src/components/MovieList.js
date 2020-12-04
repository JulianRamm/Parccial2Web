import React from 'react';
import { FormattedMessage } from 'react-intl';
import Movie from "./Movie";

export default class JobsList extends React.Component {
  componentDidMount() {
    fetch('https://gist.githubusercontent.com/josejbocanegra/c55d86de9e0dae79e3308d95e78f997f/raw/d9eb0701f6b495dac63bbf59adc4614a9eb5fbc8/series-es.json')
        .then(response => response.json())
        .then(data => this.setState({ movies: data}));
}
  state = { 
  	movies: []
  };

  render() {
    return (
      <div>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col"><FormattedMessage id = "Name"/></th>
              <th scope="col">C<FormattedMessage id = "Channel"/></th>
              <th scope="col"><FormattedMessage id = "Description"/></th>
            </tr>
          </thead>
          <tbody>
              {this.state.movies.map( (e,i) => <Movie key={i} movie={e}/>)}
          </tbody>
        </table>
      </div>
    );
  }
}