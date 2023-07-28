"use client";

import React, {useEffect, useState} from 'react';
import Profile from "../../components/Profile";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";


const MyProfile = () => {
    const {data: session} = useSession();
    const [posts, setPosts] = useState([]);
    const router = useRouter();


    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${session?.user.id}/posts`);
            const data = await response.json();
            setPosts(data);

        }
        if (session?.user.id) fetchPosts();

    }, [])

    const handleEdit = (post) => {
        router.push(`/update-prompt?id=${post._id}`)
    }

    const handleDelete = (post) => {

    }
    return <Profile
        name={"My"}
        desc={"Welcome to profile page"}
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
}

export default MyProfile;