import React from 'react'
import MainText from '../Components/MainText'
import '../App.css'
import SelecterPart from '../Components/SelecterPart'
import { Image } from 'antd'
export default function LevelSelecterScreen() {
  return (
    <div className="App App-header">
         <div className="top-side">
          <MainText />
        </div>
             <SelecterPart />
             <Image src={require("../Images/girl.PNG")} className="teacher_image" preview={false} height={200} width={350} />
        </div>
  )
}
