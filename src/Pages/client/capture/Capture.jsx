import UploadImg from "../../../Components/client/upload-img/upload-img";
import React, { useEffect, useRef, useState } from 'react';


export default function Capture() {
    return (
        <>
            <div className="container App-header">
                <h1 className="text-center mt-5">අකුරු උඩුගත කරමු</h1>
                <div className="row">
                    <UploadImg />
                </div>
            </div>
        </>
    );
}
