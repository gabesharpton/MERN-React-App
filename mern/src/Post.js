import React, { Component } from 'react';
import data from './data/data.json'
import "./Post.css"


class Post extends Component {
    constructor(){
        super()
        this.state = { likes: data.likes }
        this.addLike = this.addLike.bind(this)}
        addLike() {
            this.setState({likes: data.likes + 1})
        }
        render() {
            let posts = data.map((item, index) => {          
                return(
                    
                    <li className="container" key={index}>
            <h2>{item.name}</h2>
             <h3>{item.post}</h3>
             <button onClick={this.addLike}>{this.likes}</button>
         </li>
     )});
     return (
         <div>
           <ul>{posts}</ul>
           
        </div>
    );
}

}
export default Post;