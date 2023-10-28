"use client"
import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';

export default function MyWebCam() {

    const webcamRef = useRef<Webcam | null>(null);
    const [capturedImage, setCapturedImage] = useState<string | null>(null);

    const capture = () => {
        if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();
            setCapturedImage(imageSrc);
        }
    };

    const handleUpload = async () => {
        if (capturedImage) {
            const formData = new FormData();
            formData.append('image', capturedImage);

            try {
                const response = await axios.post('http://127.0.0.1:5000/AkuruHuruwaAI', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log('Image uploaded successfully:', response.data);
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    };

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6'>
                        <Webcam
                            audio={false}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                        />
                        <button className='btn btn-primary' onClick={capture}>Capture Image</button>
                    </div>
                    <div className='col-6'>
                        {capturedImage && (
                            <div>
                                <img className='img-fluid ' src={capturedImage} alt="Captured" />
                                <button className='btn btn-success' onClick={handleUpload}>Upload Image</button>
                            </div>
                        )}
                    </div>
                </div>


            </div>
        </>
    )
}