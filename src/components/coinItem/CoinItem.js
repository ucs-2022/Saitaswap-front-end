import React from "react";
import { Col, Row } from "react-bootstrap";
import "./CoinItemStyle.scss";

const CoinItem = (props) => {
  return (
    <>
      <Col
        {...props}
        className={`coinItem_style ${props.className} ${
          props.disabled ? "disabled" : ""
        }`}
        disabled={props.disabled}
      >
        <img src={props.iconImage} />
        <p className="titleStyle">{props.title}</p>
      </Col>
    </>
  );
};
export default CoinItem;
