import React from 'react';
import '../card.css';

class Cards extends React.Component {
    render(){
        return (
            <div className='card'>
                <div>
                  <img alt='robot' src={`https://robohash.org/${this.props.username}?size=150x150`}/>
                </div>
                <div className='cnt'>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.mail}</p>
                </div>
            </div>  
          )
    }
}

export default Cards;