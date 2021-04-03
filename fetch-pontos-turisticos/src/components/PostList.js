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
        axios.get('http://pontos-turisticos-drf-api.herokuapp.com/', {
            username: 'Elias',
            password: 1234
            
        })
        .then(response => {
            console.log(response)
            this.setState({posts:response.results})         
        })
        .catch(error => {
            this.setState({errorMsg: 'Error retrieving data'})
        })
    }
    
    render() {
        const { posts} = this.state
        return (
            <div>
                List of posts
                {
                    posts.length ?
                    posts.map(post =>
                        <div key={post.id}>{post.name}</div>):
                        null
                }
            </div>
        )
    }
}

export default PostList
