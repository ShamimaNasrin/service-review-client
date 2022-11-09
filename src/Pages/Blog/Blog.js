import React from 'react';
import useTitle from '../../Hooks/useTitle';
import './Blog.css';

const Blog = () => {
    useTitle('Blog');
    return (
        <div className='py-10'>
            <div className="rounded grid grid-cols-1 gap-4 justify-center">
                <div className='bg-blue-100 p-5 blog-card w-3/5 mx-auto rounded-lg'>
                    <div className="card-body">
                        <h2 className="card-title">Difference between SQL and NoSQL</h2>
                        <p>The Main Differences: <br />
                            Type:SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. <br /> Structure: SQL databases are table-based on the other hand NoSQL databases are either key-value pairs or document-based. <br />
                            Scalability: SQL databases are vertically scalable on the other hand NoSQL databases are horizontally scalable</p>

                    </div>
                </div>
                <div className='bg-blue-100 p-5 blog-card w-3/5 mx-auto rounded-lg'>
                    <div className="card-body">
                        <h2 className="card-title">What is JWT, and how does it work?</h2>
                        <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. <br /> How JWT works: When a client login with username and password the server creates a token for that client. The server sends a token to the client and the client stored the token on either local storage or browser cookie. Next time when the client makes a request, a copy of the token is sent to the server for authorization. The server verifies the JWT signature before giving the authorization.</p>

                    </div>
                </div>

                <div className='bg-blue-100 p-5 blog-card w-3/5 mx-auto rounded-lg'>
                    <div className="card-body">
                        <h2 className="card-title">What is the difference between javascript and NodeJS?</h2>

                        <p>Differences: <br /> 1. Javascript is a programming language that is used for writing scripts on the website whereas NodeJS is a Javascript runtime environment. <br /> 2. Js basically used on the client-side but Node js mostly used on the server-side. <br /> 3. Javascript is used in frontend development on the other hand Nodejs is used in server-side development.</p>

                    </div>
                </div>

                <div className='bg-blue-100 p-5 blog-card w-3/5 mx-auto rounded-lg'>
                    <div className="card-body">
                        <h2 className="card-title">How does NodeJS handle multiple requests at the same time?</h2>

                        <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.</p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;