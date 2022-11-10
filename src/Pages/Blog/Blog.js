import React from 'react';

const Blog = () => {
    return (
        <div className='py-24 px-10 bg-[#021e29] text-gray-400 grid md:grid-cols-2 gap-14 grid-cols-1'>
            <div className='border p-5'>
                <h1 className='text-3xl'>Difference between SQL and NoSQL</h1>
                <div>
                    <h1 className='text-2xl'>sql</h1>
                    <li>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</li>
                    <li>These databases have fixed or static or predefined schema</li>
                    <li>These databases are not suited for hierarchical data storage</li>
                    <li>These databases are best suited for complex queries</li>
                </div>
                <div>
                    <h1 className='text-2xl'> Nosql</h1>
                    <li>Non-relational or distributed database system.</li>
                    <li>They have dynamic schema</li>
                    <li>These databases are best suited for hierarchical data storage</li>
                    <li>These databases are not so good for complex queries</li>
                </div>
            </div>
            <div className='border p-5'>
                <h1 className='text-3xl'>What is the difference between javascript and NodeJS?</h1>
                <div>
                    <h1 className='text-2xl'>javascript</h1>
                    <li>It is an accessible, bridge, parsed, lightweight, reactive, and web apps programming language.</li>
                    <li>It's a programming language, after all. Any browser with a competent browser engine will operate</li>
                    <li>It's most commonly used on client-side servers.</li>
                    <li>The node community does not care about JavaScript</li>
                </div>
                <div>
                    <h1 className='text-2xl'> Nodejs</h1>
                    <li>It's a bridge, open-source Js runtime environment for executing Js on the server.</li>
                    <li>It's a JavaScript translator and environment that includes some valuable libraries for JavaScript programming</li>
                    <li>It's mainly popular on the server-side.</li>
                    <li>All node projects represent the JavaScript community.</li>
                </div>
            </div>
            <div className='border p-5'>
                <h1 className='text-3xl'>What is JWT, and how does it work?</h1>
                <div>
                    JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA
                </div>
            </div>
            <div className='border p-5'>
                <h1 className='text-3xl'>
                How does NodeJS handle multiple requests at the same time?
                </h1>
                <p>
                How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 
                </p>
            </div>
        </div>
    );
};

export default Blog;