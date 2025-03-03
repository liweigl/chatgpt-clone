import './homepage.css'
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div className="homepage" >
            <div className='left'>
                <h1>Wayne AI</h1>
                <h2>Your AI Assistant</h2>
                <h3>
                    A professional AI assistant that can help you with your tasks and projects.
                </h3>
                <Link to="/dashboard">Get Start</Link>
                <img src="orbital.png" alt="" className="orbital"/>
            </div>
            <div className='right'>
                <div className='imgContainer'>
                    <div className='bgContainer'>
                        <div className='bg'></div>
                    </div>
                    <img src='/bot.png' alt='' className='bot'/>
                </div>
            </div>
        </div>
    )
}

export default Homepage