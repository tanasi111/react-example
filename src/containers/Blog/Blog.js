import React, { Component } from 'react';
import axios from 'axios';
import './Blog.css';
import Post from '../../components/Post/Post';

class Blog extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        const posts = axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState(
                    {
                        posts: response.data
                    });
                console.log(response);
            });
    }

    render() {

        const posts = this.state.posts.map(post => {
            return <Post key={post.id} title={post.title} body={post.body} />
        })

        return (
            <div className="posts">{posts}</div>
        );
    }

}

export default Blog;
