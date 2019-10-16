import React, { Component } from 'react';
import data from './data/data.json'


class Post extends Component {

  render() {
     let posts = data.map((item, index) => {
     return(
         <li key={index}>
            <h2>{item.name}</h2>
             <h3>{item.post}</h3>
         </li>
     )});
    return (
        <div>
           <ul>{posts}</ul>
           {console.log(data)}
        </div>
    );
  }

}
export default Post;