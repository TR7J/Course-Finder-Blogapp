// src/Testimonies.js
import React from 'react';
import './Testimonies.css';
import img1 from '../../images/Aerospace-Engineering.jpeg';
import axios from 'axios';


export default function Testimonies({title, summary, files, category, description, creator}){
/*   const testimonies = [
    {
      name: 'Stacy',
      likes: '1.97k',
      description: 'Studying Law at UCLA',
      image: img1, // Update with the actual path
      profileImage: img1,
    },
    {
      name: 'Yiyang',
      likes: '3.07k',
      description: 'Studied Civil Engineering at MIT',
      image: img1, // Update with the actual path
      profileImage: img1,
    },
    {
      name: 'Zach',
      likes: '5.07k',
      description: 'Did Medicine at Harvard',
      image: img1, // Update with the actual path
      profileImage: img1,
    },
  ]; */

  return (
    <div className="testimonies-container">
      <h1 className="title">Testimonies</h1>
      <p className="subtitle">
        Hear from our graduates as they share their experiences and successes. From choosing the right courses and universities to achieving their academic goals
      </p>
      <div className="testimonies">
          <div className="testimony-card">
            <img src={files} alt={title} className="testimony-image" />
            <div className="profile-card">
              <div className='profile-cardandlike'>
                <div className='profile-imgandname'>
                    <img src=''alt='' className="profile-image" />
                    <p className="profile-name">{creator?.username || 'Unknown'}</p>
                </div>
                <div className="profile-info">
                    <p className="profile-likes">
                    <span role="img" aria-label="heart">❤️</span>1.07k
                    </p>
                </div>
              </div>
              <p>{category}</p>
              <p className="profile-description">{summary}</p>
            </div>
          </div>
      </div>
    </div>
  );
};


