import React from "react"
import '../home/home.css'
import Testimonies from "../../components/testimonies/testimonies"
import axios from 'axios';


export default function Home(){
    /* const [posts, setPosts] = React.useState([])
    React.useEffect(() => {
    axios.get('http://localhost:4000/post')
    .then(response => {
      setPosts(response.data);
    })
    .catch(error => {
      console.error('There was an error fetching the posts!', error);
    });
    }, [])
    return(
        <div>
            {posts.length > 0 && posts.map(post => (
                <Testimonies {...post}/>
            ))}
        </div>
    ) */
    
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
                {posts.map(post => {
                    return <Testimonies key={post._id} {...post}/>
                })}
            </div>
        );
}