import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Card, message, Upload } from "antd";
import "../App.css";
import { useNavigate, useParams } from "react-router-dom";
const { Dragger } = Upload;

const ImageUploader = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  const [image, setImage] = React.useState(null);
  const [file, setFile] = React.useState(null);

  const props = {
    name: "file",
    multiple: true,
  
    onChange(info) {
      const { status } = info.file;
      console.log(info.file, "info", info);
      setImage(URL.createObjectURL(info.file.originFileObj));
      setFile(info.file.originFileObj);
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  return (
    <div className="centerDiv">
      <Card
        hoverable
        style={{
          width: 840,
          marginTop: 30,
          marginBottom: 30,
          height: 400,
        }}
        cover={<img src={image} width={840} height={400} />}
      ></Card>
      <Upload {...props} showUploadList={false}>
        {!image && (
          <Button
            size="medium"
            className="upload_button"
            icon={<UploadOutlined />}
          >
            Upload Image
          </Button>
        )}
      </Upload>
      {image && (
        <Button
          size="medium"
          className="upload_button"
          onClick={() => {
            navigate(`/result/${type}`, { state: { image,file: file  }, });
          }}
        >
          Save Image
        </Button>
      )}
    </div>
  );
};
export default ImageUploader;
