import React from "react";
import Image from "next/image";

export default function NavBar() {
    return(
        <>
        <nav className='navbar'>
            <button className='contact'>
                <a href={'/legal'}>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"></path>
                </svg>
                </a>
            </button>
            <ul>
                <li>
                    <a href="/shop" className='premium'>Shop</a>
                </li>
                <li>
                    <a href="https://thundernetwork.org/blog" className='blog'>Blog</a>
                </li>
            </ul>
            <button className='contact'>
                <a href={'/legal/upvote'}>Vote</a>
            </button>
        </nav><style jsx>{`
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            position: fixed;
            top: 0;
            width: 100%;
          }
          
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
          }
          li {
            margin: 0 1rem;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 20px;
          }
          
          .premium:hover {
            color: #fab120;
          }
          .blog:hover {
            color: #6ce78b;
          }
          
          .contact {
            background-color: #0400ff;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            font-size: 1.2rem;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
          }
          .contact:hover {
            background-color: blue;
            transform:scale(1.2);
          }
        `}</style>
        </>
    )
}