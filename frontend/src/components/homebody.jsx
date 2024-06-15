import {  Link } from "react-router-dom";
import './App.css'
import intropic from './img.png'

function homebody() {
    return (
        <main>
                    <header className='home-header'>
                        <Link to="/" className='logo'><h1>Course Finder</h1></Link>
                        <nav className="nav-mid">
                            <Link to="/" className='nav'>Home</Link>
                            <Link to="/createblog" className='nav'>Create Blog</Link>
                        </nav>
                        <nav className='nav-right'>
                            <Link to="/profile">Profile</Link>
                        </nav>
                    </header>

                    <body>
                        <div className="intro-pic">
                            <img  src={intropic} >
                                
                            </img>
                        </div>

                        <div className="search">
                                    <input 
                                        type="text"
                                        placeholder="Search..."
                                    /> 
                                    <button>Search</button>
                        </div>

                        <button className="chatbox">Chatbox</button>

                        <section className="home">
                            <h2 className="stories-h2">Stories</h2>
                            <div className="stories">
                                <div className="blog">
                                    <img src={intropic} className="blog-img">
                                    </img>
                                    <h3 className="blog-title">Example Blog Title</h3>
                                    <p className="blog-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, inventore odio. Fuga a similique minus magnam blanditiis quas obcaecati praesentium perferendis quaerat necessitatibus, dolorem inventore nulla, at natus dolores maxime ab temporibus, maiores tenetur repudiandae iste velit? Maxime aliquid eveniet veniam ut ab facere repudiandae? Et ipsum unde ut temporibus.</p>
                                </div>
                            </div>
                        </section>
                        
                    </body>
        </main>
    )
}

export default homebody;