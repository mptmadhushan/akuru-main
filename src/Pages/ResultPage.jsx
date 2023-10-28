import React, { useEffect } from "react";
import "../App.css";
import { useLocation, useParams } from "react-router-dom";
import { Button, Card, Col, Image, Row, Typography } from "antd";
import DoubleRuledMask from "../Components/DoubleRuleMask";
import axios from "axios";
const { Text } = Typography;
export default function ResultPage() {
  const { type } = useParams();
  const { state} = useLocation();
  const [reset, setReset] = React.useState(false);
  const [prediction, setPrediction] = React.useState(null);
  const [image,setImage] = React.useState(state?.image);




  useEffect(() => {
    console.log("file",state.file)
    handleImageUpload()
    setImage(URL.createObjectURL(state.file))
    
  }, [state])
  
  const handleImageUpload = async () => {
    if (state.file) {
      const formData = new FormData();
      formData.append('image', state.file);

      try {
        const response = await axios.post('http://localhost:5000/classify', formData);

        if (response.status === 200) {
          const data = response.data;
          console.log(data)
          setPrediction(data);
        } else {
          console.error('Error:', response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };
  return (
    <div className="App App-header">
      <div className="top-side">
        <Text className="main_text">
          {type[0]?.toLocaleUpperCase() + type.slice(1)}
        </Text>
      </div>

      <Row className="formCard_row" justify="center" align="middle">
        <Col xs={24} sm={12} md={12} lg={12} xl={10} className="formCard_col">
          <Image
            src={image}
            className="alphebet_image"
            height={500}
            preview={false}
          />
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={10} className="formCard_col">
          <div className="formCard_col">
          <Card
              style={{
                width: 500,
                marginBottom:40,
                alignItems:"center",
                justifyContent:"center"
              }}
            >
                <DoubleRuledMask reset={reset} label = {prediction?.label ?? ""}/>
                </Card>
            <Card
              style={{
                width: 300,
              }}
            >
                <p style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    justifyContent: "start",
                    marginTop:-25
                
                }}>Accuracy</p>
                <p style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    justifyContent: "start",
                    marginTop:-25
                
                }}>
                  {
                    prediction?.accuracy
                  }
                </p>
            </Card>
          </div>
        </Col>
      </Row>
      <Row className="formCard_row" justify="center" align="middle">
        <Col xs={24} sm={12} md={12} lg={12} xl={10} className="formCard_col">
            </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={10} className="formCard_col">
        <Button size="medium"  className='upload_button1' onClick={()=>{
            setReset(!reset)
        }} >Rewrite</Button>
        </Col>
        </Row>
    </div>
  );
}
