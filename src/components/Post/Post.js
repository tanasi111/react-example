import React from 'react';

const post = (props) => (
    <article className="card">
        {/* <p>{props.title}</p> */}

        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.body}</p>
        </div>

    </article>
);

export default post;
