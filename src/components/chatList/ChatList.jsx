import './chatList.css'
import { Link } from 'react-router-dom'

const ChatList = () => {
    return (
        <div className='chatList'>
            <span className='title'>DASHBOARD</span>
            <Link to="/dashboard">New Chat</Link>
            <Link to="/dashboard">Explore</Link>
            <Link to="/dashboard">Contact</Link>
            <hr/>
            <span className='title'>RECENT CHATS</span>
            <div className='list'>
                <Link to="/dashboard/chats/123">Chat chat chat Title</Link>
                <Link to="/dashboard/chats/123">Chat Title</Link>
                <Link to="/dashboard/chats/123">Chat Title</Link>
                <Link to="/">Chat Title</Link>
                <Link to="/">Chat Title</Link>
                <Link to="/">Chat Title</Link>
            </div>
            <hr/>
            <div className='Upgrade'>
                <div className='texts'>
                    Upgrade to Pro.
                </div>
            </div>
        </div>
    )
}

export default ChatList