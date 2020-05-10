import React from 'react'
import TestItHeader from "../common/TestItHeader";
import TestSelectPhoto from "./TestSelectPhoto";

const Gallery = () => {
    return (
        <div>
            <TestItHeader/>
            <div className="App-image">
                <TestSelectPhoto/>
            </div>
        </div>
    );
}

export default Gallery;