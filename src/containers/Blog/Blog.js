import React, { Component } from 'react';
import axios from 'axios';
import './Blog.css';
import Post from '../../components/Post/Post';
import NewPost from '../../components/NewPost/NewPost'

class Blog extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatePosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Ivan'
                    }
                });
                this.setState({ posts: updatePosts });
                console.log(updatePosts);
            });
    }

    render() {

        // const posts = this.state.posts.map(post => {
        //     return <Post key={post.id} title={post.title} body={post.body} />
        // })

        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />;
            });
        }

        return (
            <div>
                <section>
                    <NewPost />
                </section>
                <section className="posts">
                    {posts}
                </section>
            </div>
        );
    }

}

export default Blog;
