import React, { useContext } from "react"
import '../home/home.css'
import Testimonies from "../../components/testimonies/testimonies"
import axios from 'axios';

export default function Home(){
        const [posts, setPosts] = React.useState([]);
        React.useEffect(() => {
            async function fetchPosts() {
                try {
                    const response = await axios.get('http://localhost:4000/post', { withCredentials: true });
                    setPosts(response.data);
                } catch (error) {
                    console.error('Error fetching posts:', error);
                }
            }
    
            fetchPosts();
        }, []);
    
        return (
            <div>
                <h1 className="title">Testimonies</h1>
                <p className="subtitle">
                Hear from our graduates as they share their experiences and successes. From choosing the right courses and universities to achieving their academic goals
                </p>
                {posts.map(post => {
                    return <Testimonies _id={post._id} title={post.title} summary={post.summary} files={post.image} creator={post.creator}/>
                })}
            </div>
        );
}