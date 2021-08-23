import React from 'react';
import Movie from '../Movie/Movie';
import './styles.css';
class Movies extends React.Component{

       getMovie = (name, like, banner) => {
          return <Movie name={name} like={like} banner={banner}/>
       };

    render() {
      return (
        <div className='Movies-section'>
               {this.getMovie('Maharishi',
               '123.0K',
               'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9LYaYaXy9QuZgdBm45m7wrqXrh90d3OoeWA&usqp=CAU'
               )}
               
               {this.getMovie('Avengers:Endgame',
               '123.0M',
               'https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810')}

        </div>
        );
    }
}
export default Movies;
