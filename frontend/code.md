/* // src/Testimonies.js
import React, { useContext, useEffect, useState } from 'react';
import './Testimonies.css';
import axios from 'axios';
import { UserContext } from "../../UserContext";

export default function Testimonies() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [testimonies, setTestimonies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/post') // assuming you have a backend API endpoint to fetch testimonies
     .then(response => {
        setTestimonies(response.data);
      })
     .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="testimonies-container">
      <h1 className="title">Testimonies</h1>
      <p className="subtitle">
        Hear from our graduates as they share their experiences and successes. From choosing the right courses and universities to achieving their academic goals
      </p>
      <div className="testimonies">
        {testimonies.map((testimony, index) => (
          <div key={index} className="testimony-card">
            <img src={testimony.files} alt={testimony.title} className="testimony-image" />
            <div className="profile-card">
              <div className='profile-cardandlike'>
                <div className='profile-imgandname'>
                  <img src='' alt='' className="profile-image" />
                  <p className="profile-name">{testimony.creator.username}</p>
                </div>
                <div className="profile-info">
                  <p className="profile-likes">
                    <span role="img" aria-label="heart">❤️</span>1.07k
                  </p>
                </div>
              </div>
              <p>{testimony.category}</p>
              <p className="profile-description">{testimony.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

 */