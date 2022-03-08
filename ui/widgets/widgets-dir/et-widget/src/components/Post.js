import React from 'react';

export default function Post({ posts }) {

    if (!posts.length) return null;

    return posts.map(post => (
        <div key={post.id}>
            <div style={{
                "boxShadow": "0 4px 8px 0 rgba(0,0,0,0.2)",
                "transition": "0.3s",
                "width": "40%"
            }}><h4><b>#{post.id}</b></h4>
                <h4><b>{post.attributes.name}</b></h4>
                <div>
                    <b>Downloads:</b> {post.attributes.downloads} <b>Release-Date:</b> {post.attributes.releaseDate}
                </div>
                <p>{post.attributes.description}</p>
            </div>
        </div>
    ));
}
