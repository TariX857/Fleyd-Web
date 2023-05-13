import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center">
          <div className="container-ft">
            <Image 
              src={'https://i.ibb.co/1fZjRZC/Fleyd-arrotondato.png'}
              alt='Logo Footer'
              width={50}
              height={50}
            />
            <h4 className='ms-3'>Fleyd Bot</h4>
          </div>
            <a href='/'><p>Security, AI, Moderation, Funning these are<br />some of the many functions in a single application!</p></a>
            
            <p>CopyRight &copy; 2023</p>
          </div>
          <div className="col-lg-3 d-flex justify-content-end">
            <h5 className='links'>Link</h5>
            <ul>
              <a href="/blog">Blog</a> <br />
              <a href="/shop">Shop</a> <br />
              <a href="/vote">Vote</a> <br />
            </ul>
          </div>
          <div className="col-lg-3 d-flex justify-content-end">
            <h5 className='linkl'>Legal</h5>
            <ul>
              <a href="/legal/tos">Terms Of Service</a> <br />
              <a href="/legal/pp">Privacy Policy</a> <br />
              <a href="/contact">Contact</a> <br />
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .links, .linkl {
          padding-left: 200px;
        }
        .container {
          padding-left: 10px;
          padding-right: 10px;
        }
        .container-ft, .row {
          display: flex;
          align-items: center;
        }
        footer {
          background-color: #2c2c3e;
          color: #fff;
          padding: 20px 0;
        }
        footer a {
          color: #fff;
        }
        footer a:hover {
          color: #90a3f5;
        }
        footer h4,
        footer h5 {
          color: #fff;
        }
        footer img {
          max-width: 100%;
          height: auto;
        }
        .col-lg-3 {
          display: flex;
          flex-direction: row;
        }
      `}</style>
    </footer>
  )
}