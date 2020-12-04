import React from 'react';

export default class Movie extends React.Component {

  	render() {
  		return (
  			<tr>
  				<th scope="row">{this.props.movie.id}</th>
      			<td>{this.props.movie.name}</td>
  				<td>{this.props.movie.channel}</td>
      			<td>{this.props.movie.description}</td>
  			</tr>
  		);
	}
}