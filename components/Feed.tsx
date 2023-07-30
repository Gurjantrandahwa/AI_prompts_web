"use client";

import React, { useEffect, useState } from 'react';
import PostCard from "./PostCard";

const PromptCardList = ({ data, handleTagClick }) => {
    return (
        <div className={"mt-16 prompt_layout"}>
            {data.map((post) => (
                <PostCard
                    key={post._id}
                    post={post}
                    handleTagClick={handleTagClick}
                />
            ))}
        </div>
    );
};

const Feed = () => {
    const [searchText, setSearchText] = useState("");
    const [posts, setPosts] = useState([]);

    // handleSearch
    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/api/prompt');
            const data = await response.json();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    // Filter posts based on search text
    const filteredPosts = posts.filter((post) => {
        const lowerCaseSearchText = searchText.toLowerCase();
        const postContent = post.content.toLowerCase();
        const tags = post.tags.map((tag) => tag.toLowerCase());

        return postContent.includes(lowerCaseSearchText) || tags.includes(lowerCaseSearchText);
    });

    return (
        <section className={"feed"}>
            <form className={"relative w-full flex-center"}>
                <input
                    type={"text"}
                    placeholder={"Search for a tag or a Username"}
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className={"search_input peer"}
                />
            </form>
            <PromptCardList
                data={filteredPosts} // Render the filtered posts instead of all posts
                handleTagClick={() => {
                    // Your tag click handler logic here
                }}
            />
        </section>
    );
};

export default Feed;
