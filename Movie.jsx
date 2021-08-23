import * as React from 'react';
import './style.css';

class Movie extends React.Component{
    render() {
    return(
    <div className="Movie-card">
       <img src={this.props.banner} />
       <label>
        {this.props.like} {this.props.name}
        </label>
    
 </div>
    );
  }
}
export default Movie;