import React from 'react';
import socket from "./socket";


const JoinBlock = () => {
    return (
        <div className="join-block">
            <input type="text" placeholder="ROOM ID"  />
            <input type="text" placeholder="Ваше имя" />
            <button> ВОЙТИ</button>
        </div>

    );
}

export default JoinBlock;
