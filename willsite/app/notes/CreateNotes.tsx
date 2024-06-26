"use client"
// only render in the browser, not on the server

import {useState} from "react";

export default function CreateNote() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    // Post request to the database, creating new notes
    const create = async() => {
        await fetch("http://127.0.0.1:8090/api/collections/notes/records", {
            method: "POST",
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
        <form onSubmit={create}>
            <h3>Create a new Note</h3>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit">
                Create note    
            </button> 
        </form>
    );
}