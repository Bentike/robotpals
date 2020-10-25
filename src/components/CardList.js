import React from 'react';
import Cards from './Cards';

class CardList extends React.Component{
   render(){
    let arr = this.props.robots.map((rbt) => {
        let {id, username, name, email} = rbt;
       return <Cards key={id} username={username} name={name} mail={email}/>
    })
       return(
           <React.Fragment>
                 {arr}
           </React.Fragment>
       )
   }
}
export default CardList;