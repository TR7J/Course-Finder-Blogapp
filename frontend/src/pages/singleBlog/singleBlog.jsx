import React from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Comments from '../../components/comments/comments';
import Cookies from 'js-cookie';

export default function SingleBlog() {
    const [singleBlogInfo, setSingleBlogInfo] = React.useState(null);
    const [comments, setComments] = React.useState([]);
    const { id } = useParams();
    const token = Cookies.get('token') /* || null */; 

  React.useEffect(() => {
    async function fetchSingleBlog() {
      try {
        const response = await axios.get(`http://localhost:4000/post/${id}`, { withCredentials: true });
        setSingleBlogInfo(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    fetchSingleBlog();
  }, []);

  React.useEffect(() => {
    async function fetchComments() {
      try {
        const response = await axios.get(`http://localhost:4000/post/${id}/comments`, { withCredentials: true });
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    }

    fetchComments();
  }, [id]);

  if (!singleBlogInfo) return null;

  return (
    <div>
      <img src={`http://localhost:4000/${singleBlogInfo.image}`} />
      <div>{singleBlogInfo.creator.username}</div>
        <button                         
        >
        <span role="img" aria-label="heart">

        </span>
        <span className="like-count">Followers</span>
        </button>
      {singleBlogInfo.creator._id === singleBlogInfo.creator._id && (
        <div>
          <Link to={`/edit/${singleBlogInfo._id}`}><button>Edit</button></Link>
        </div>
      )}
      <h1>{singleBlogInfo.title}</h1>
      <p>{singleBlogInfo.description}</p>

      <Comments comments={comments} postId={id} setComments={setComments} token={token} />
    </div>
  );
}