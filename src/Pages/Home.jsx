import { Button, Col, Image, Layout, Row, Typography } from "antd";
import React from "react";
import "../App.css";
import MainText from "../Components/MainText";

const { Text } = Typography;
const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
  return (
    <div className="App App-header">
    
        <div className="top-side">
          <MainText />
        </div>
        <Row className="formCard_row" justify="center" align="middle">
          <Col xs={24} sm={12} md={12} lg={12} xl={10} className="formCard_col">
            <Image
              src={require("../Images/albhebet.jpg")}
              className="alphebet_image"
              height={500}
              preview={false}
            />
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={10} className="formCard_col">
            <div className="formCard_col">
              <Image
                src={require("../Images/teacher.PNG")}
                className="teacher_image"
                preview={false}
                height={400}
                width={350}
              />
              <Button size="medium" className="formCard_button"
               href="/level"
              >
                GAME ONE START
              </Button>       <Button size="medium" className="formCard_button"
               href="/home"
              >
                GAME TWO START
              </Button>
            </div>
            
          </Col>
        </Row>
    
    </div>
  );
}
