import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1>Difference between javascript and nodejs.</h1>
            <p><b>Ans:</b>Javascript is a programming language. And its run into any browser through javascript engine. Its used for client-side activity. Javascript can run in different engine like V8 in google chrome, Spider monkey for firefox etc. On the otherhand Node JS is interpreter for Javascript language which holds huge number of excesses also requires libraries which can easily acceses from javascript.Javascript can run in different engine but Node Js only support V8 engine so it mainly used in chrome browser and it is written in C++. Thats why it easily run. </p>
            <br />
            <h1>When should you use nodejs and when should you use mongodb?</h1>
            <p><b>Ans:</b>MongoDB and NodeJS are two different type of technologies.  Node.js is interpreter or runtime environment for JavaScript language. MongoDB is a No SQL databse for storing any data. Node JS actually works in  JavaScript to run outside of server. Mongodb used when a developer need huge data also with instant data recovery properties. In short NodeJS is javascript engine that used to write application. It is used to make servers which can response in web requests and MongoDB is databse engine. It save data. after creating any site one can use mongodb for storing data.</p>
            <br />
            <h1>Differences between sql and nosql databases.</h1>
            <p><b>Ans:</b>SQL is relational database and NoSQL stands for non relational database. Vertically scalable file used in SQL. Also the databases are table based. On the other hand NonSQL use horizontally scalable file and here the database are document type, graph, wide column. Sql use predefined schema and structured query language so that its better for multi row transictions. NoSQL databases use dynamic schemas so its better for unstructure data like JSON file or any other documents.</p>
            <br />
            <h1>What is the purpose of jwt and how does it work</h1>
            <p><b>Ans:</b></p>
        </div>
    );
};

export default Blogs;