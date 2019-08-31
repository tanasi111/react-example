import React from 'react';
import './Post.css';

const post = (props) => (
    <article className="card" onClick={props.clicked}>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.author}</h6>
            <p className="card-text">{props.body}</p>
        </div>
    </article>
);

export default post;
