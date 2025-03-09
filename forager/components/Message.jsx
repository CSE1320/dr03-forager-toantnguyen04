import React from "react";
import { messages } from "../data/development";

const Message = ({ type }) => {
    const messageData = messages[type];

    if (!messageData) return null;

    return (
        <div className={`bg-[#FF5050] rounded-xl text-sm font-medium text-white px-5 py-1.5 mx-[12.5%]`}>
            <div className="header flex items-center gap-2">
                <img width="27px" height="27px" src={messageData.icon} alt={messageData.header} />
                <h1 className="uppercase font-bold text-2xl">{messageData.header}</h1>
            </div>
            <p>{messageData.message}</p>
        </div>
    );
};

export default Message;
