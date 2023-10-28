import React from "react";
import { Card, Col, Grid, Row, Typography } from "antd";
import "../App.css";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;
const { Meta } = Card;
const { useBreakpoint } = Grid;

export default function SelecterPart() {
  const screens = useBreakpoint();
 const navigate = useNavigate();
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={12} md={8} lg={8} xl={8}>
        <Card className="card beginner2" hoverable  onClick={() =>{
            navigate("/upload/beginner")
        }}>
          <Text className="meta_title beginner">Beginner</Text>
        </Card>
      </Col>
      <Col xs={24} sm={12} md={8} lg={8} xl={8}>
        <Card className="card intermediate2" hoverable onClick={() =>{
            navigate("/upload/intermediate")
        }}>
          <Text className="meta_title intermediate">Intermediate</Text>
        </Card>
      </Col>
      <Col xs={24} sm={12} md={8} lg={8} xl={8}>
        <Card className="card expert2" hoverable onClick={() =>{
            navigate("/upload/expert")
        }}>
        <Text className="meta_title expert">Expert</Text>
        </Card>
      </Col>
    </Row>
  );
}
