import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Rate } from "antd";
import { Button } from "react-bootstrap";
import "./AddNewMovie.css";

function AddNewMovie() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="add">
      <img src={location.state.imgsrc} alt="test"></img>
      <h2 style={{ color: "GREEN" }}>{location.state.name} </h2>
      <Rate disabled defaultValue={location.state.rating} />
      <h2 style={{ color: "white" }}>{location.state.description}</h2>
      <iframe
        width="956"
        height="538"
        src={location.state.trailer}
        title={location.state.name}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="Button">
        <Button variant="primary" onClick={() => navigate("/")}>
          GO to HOME
        </Button>{" "}
      </div>
    </div>
  );
}
export default AddNewMovie;
