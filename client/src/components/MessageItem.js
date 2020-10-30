import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultProfileImage from "../images/default-profile-image.jpg";

const MessageItem = ({date, profileImageUrl, text, username, removeMessage, isCorrectUser}) => (
        <div>
            <li className="list-group-item">
            <img 
                src={profileImageUrl || DefaultProfileImage} 
                alt={username} 
                height="125" 
                width="100" 
                className="timeline-image"    
                />
            <div className="message-area">
                <Link to="/" >@{username} &nbsp;</Link>
                <span className="text-muted">
                    <Moment className="text-muted" format="Do MMM YYYY">{date}</Moment>
                </span>
                <p>{text}</p>
                { isCorrectUser && (<button className="btn btn-danger" onClick={removeMessage}>Delete</button>) }
            </div>
            </li>
        </div>
    );

export default MessageItem;


