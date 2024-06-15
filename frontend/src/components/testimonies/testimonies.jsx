// src/Testimonies.js
import React from 'react';
import './Testimonies.css';
import {Link} from 'react-router-dom'


export default function Testimonies({_id, title, summary, files, category, description, creator}){
  return (
    <div className="testimonies-container">
      <div className="testimonies">
          <div className="testimony-card">
            <Link to={`/post/${_id}`}>
              <img src={'http://localhost:4000/'+files} alt={title} className="testimony-image" />
            </Link>
            <div className="profile-card">
              <div className='profile-cardandlike'>
                <div className='profile-imgandname'>
                    <img src=''alt='' className="profile-image" />
                    <p className="profile-name">{creator.username}</p>
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

