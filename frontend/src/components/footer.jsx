import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagramSquare } from '@fortawesome/free-brands-svg-icons' 


function footer() {
    return (
        <main>
            <footer>
            <main className="footer-main">
                <h3 className="footer-logo">Course Finder</h3>
                <div className="footer-content">
                    <div className="footer-info">
                        <span>About</span>
                        <span>About</span>
                        <span>About</span>
                    </div>
                    <div className="footer-info">
                        <span>About</span>
                        <span>About</span>
                        <span>About</span>
                    </div>
                    <div className="footer-info">
                        <span>About</span>
                        <span>About</span>
                        <span>About</span>
                    </div>
                </div>
                <div className="footer-socials">
                    <a href="https://www.instagram.com/your_username" target="_blank" rel="noopener noreferrer" className="footer-icon"><FontAwesomeIcon icon={faTwitter}/></a>
                    <a href="https://www.facebook.com/your_username" target="_blank" rel="noopener noreferrer" className="footer-icon"><FontAwesomeIcon icon={faInstagramSquare}/></a>
                    <a href="https://www.twitter.com/your_username" target="_blank" rel="noopener noreferrer" className="footer-icon"><FontAwesomeIcon icon={faFacebook}/></a>
                </div>    
                <span className="footer-text">Copyright[&copy]Course Finder.</span>
                <span className="footer-text">All rights reserved.</span>
            </main>
        </footer>
        </main>
    )
}

export default footer;