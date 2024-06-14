import React from "react"
import axios from "axios";
import { Link, useParams } from "react-router-dom";


export default function SingleBlog(){
    const [singleBlogInfo, setSingleBlogInfo] = React.useState(null)
    const {id} = useParams()
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
    }, [])

   

    /* if (!singleBlogInfo) return '' */
    if (!singleBlogInfo ) return null;


    return(
        <div>
            <img src={`http://localhost:4000/${singleBlogInfo.image}`}/>
            <div>{singleBlogInfo.creator.username}</div>
            {singleBlogInfo.creator._id === singleBlogInfo.creator._id && (
                <div>
                    <Link to={`/edit/${singleBlogInfo._id}`}><button>Edit</button></Link>
                </div>
            )}
            <h1>{singleBlogInfo.title}</h1>
            <p>{singleBlogInfo.description}</p>
        </div>
    )
}