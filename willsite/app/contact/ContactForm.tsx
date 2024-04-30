"use client"
// Use the client side state

import {useState} from "react";

/*
interface From {
    address: string;
    name: string;
}
interface Message {
    from: From;
    to: string;
    subject: string;
}
*/

/**
 *  EmailForm:          class for an email message from field
 *  address: string     string which is the address of the sender 
 *  name: string        string which is the name of the sender
 */    
/* class EmailFrom implements From {
    address: string;
    name: string;

    constructor(address: string, name: string) {
        this.address = address;
        this.name = name;
    }
} */

/**
 * EmailMessage:    class for an email message
 * from: From       From object
 * to: string       string which is to to address1
 * subject: string  the string that contains the subject of the email address
 */
/* class EmailMessage implements Message {
    from: From;
    to: string;
    subject: string;

    constructor(from: From, to: string, subject: string) {
        this.from = from;
        this.to = to;
        this.subject = subject;
    }
} */

const nodemailer = require("nodemailer");
const transport = nodemailer.createTransport({
    host:   "localhost",
    port:   1025
});



export default function ContactForm() {
    const [name, setName] = useState("");
    const [toAddress, setToAddress] = useState("otterbienw@gmail.com");
    const [address, setAddress] = useState("");
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");

    const emailStuff = async () => {
        transport.sendMail({
            from:       address,
            to:         toAddress,
            subject:    subject,
            text:       content
        })   
    }

    return (
        <div>
            <p>prepare to contact me</p>
            <form onSubmit={emailStuff}>
                    <input
                        placeholder="your@emailaddress.something" 
                        onChange = {(e) => setAddress(e.target.value)}
                        required
                    />
                    <input
                        placeholder="your name"
                        onChange = {(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        placeholder="Some subject"
                        onChange = {(e) => setSubject(e.target.value)}
                        required
                    />
                    <textarea 
                        placeholder="..." 
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                    <input
                        type="submit"
                    />
            </form>
        </div>
    );
}