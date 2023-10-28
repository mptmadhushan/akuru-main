import React from 'react'
import MainText from '../Components/MainText'
import '../App.css'
import ImageUploader from '../Components/ImageUploader'
export default function UploadedImagesScreen() {
  return (
    <div className="App App-header">
         <div className="top-side">
          <MainText />
          <ImageUploader />
        </div>

    </div>
  )
}
