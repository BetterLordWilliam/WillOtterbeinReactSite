"use client"

import {FormEvent, useState} from "react";

export default function SearchBlogs() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    
    const blogQuery = async(event: any) => {
        const currentTitle = event.currentTarget.titleInput.value;
        console.log(currentTitle);

        await fetch("http://127.0.0.1:8090/api/collections/notes/records", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                content,
            }),
        });
    }

    return (
        <div>
            <form onSubmit={blogQuery}>/
                <input name="titleInput" placeholder="blog title"/>
                <input type="submit"/>
            </form>
        </div>
    );
}