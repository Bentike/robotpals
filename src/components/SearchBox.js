import React from 'react';

class SearchBox extends React.Component{
    render(){
        return(
            <div>
                <input 
                    type='search' 
                    placeholder='search robots'
                    onChange={this.props.searchChange}    
                    />
            </div>
        )
    }
}

export default SearchBox;