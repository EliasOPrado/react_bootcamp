import React, { Component } from 'react'
import axios from 'axios'


class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            posts: [],
            errorMsg: ''
        }
    }

    componentDidMount(){
        // get the url needed or the endpoint api
        axios.get('https://jsonplaceholder.typicode.com/posts')
        // then is the response and setState for the state if the api works
        .then(response => {
            console.log(response)
            this.setState({posts:response.data})
        })
        // the catch sends an error when the api doesnt work or have any error
        .catch(error => {
            console.log(error)
            this.setState({errorMsg: 'Error retrieving data'})
        })
    }
    
    render() {
        const { posts, errorMsg } = this.state
        return (
            <div>
                List of posts
                {
                    posts.length ?
                    posts.map(post =>
                        <div key={post.id}>{post.title}</div>):
                        null
                }
            </div>
        )
    }
}

export default PostList
