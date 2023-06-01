import React from "react";
import "./Messages.css"
import { Link } from "react-router-dom";
const Messages = () => {
    const currentUser = {
        id: 1,
        username: "John Doe",
        isSeller: true,
    };
    const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam explicabo est perferendis optio quas at tempore unde, architecto nemo vero aliquam fugiat et perspiciatis deleniti culpa corrupti accusamus asperiores maiores. Lorem harum quibusdam nobis id reprehenderit tempore dicta magnam vitae fugit ducimus perferendis!`;
    const name = "John Doe";
    return (
        <div className="messages">
            <div className="messages-container">
                <div className="messages-container-title">
                    <h1>Messages</h1>
                </div>
                <table>
                    <tr>
                        <th>Buyer</th>
                        <th>Last Message</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                    <tr className="messages-container-active">
                         <td className="messages-container-name">
                            {name}
                        </td>
                        <td><Link to="/message/123" className="Link">{message.substring(0,100)}...</Link></td>
                        <td>1 day ago</td>
                        <td>
                            <button className="action-button">Mark as Read</button>
                        </td>
                    </tr>
                    <tr className="messages-container-active">
                         <td className="messages-container-name">
                            {name}
                        </td>
                        <td><Link to="/message/123" className="Link">{message.substring(0,100)}...</Link></td>
                        <td>1 day ago</td>
                        <td>
                            <button className="action-button ">Mark as Read</button>
                        </td>
                    </tr>
                    <tr  className="messages-container-notActive">
                         <td className="messages-container-name">
                            {name}
                        </td>
                        <td><Link to="/message/123" className="Link">{message.substring(0,100)}...</Link></td>
                        <td>1 day ago</td>
                    </tr>
                    <tr  className="messages-container-notActive">
                         <td className="messages-container-name">
                            {name}
                        </td>
                        <td><Link to="/message/123" className="Link">{message.substring(0,100)}...</Link></td>
                        <td>1 day ago</td>
                    </tr>
                    <tr  className="messages-container-notActive">
                         <td className="messages-container-name">
                            {name}
                        </td>
                        <td><Link to="/message/123" className="Link">{message.substring(0,100)}...</Link></td>
                        <td>1 day ago</td>
                    </tr>
                    <tr  className="messages-container-notActive">
                         <td className="messages-container-name">
                            {name}
                        </td>
                        <td><Link to="/message/123" className="Link">{message.substring(0,100)}...</Link></td>
                        <td>1 day ago</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Messages;