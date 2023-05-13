import React from "react";
import Image from "next/image";

export default function NavBar() {
    return(
        <>
        <nav className='navbar'>
            <div className="left">
                <a href="/"><Image
                    src="https://i.ibb.co/1fZjRZC/Fleyd-arrotondato.png"
                    alt="Logo"
                    className="rounded"
                    height={70}
                    width={70} /></a>
            </div>
            <ul>
                <li>
                    <a href="/" className='home'>Home</a>
                </li>
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
          .home:hover {
            color: #87CEEB;
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