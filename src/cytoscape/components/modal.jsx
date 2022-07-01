import React from "react";
import styled from "styled-components";

const Style = styled.div`
  position: absolute;
  top: ${(props) => props.position.y}px;
  left: ${(props) => props.position.x}px;
  border: 1px solid #ddd;
`;

const ModalInfo = ({ position, data, onClose }) => {
  return (
    <Style position={position}>
      <div className="node-header">
        <p>{data.label}</p>
        <span onClick={onClose}>close</span>
      </div>
      <p>
        <a href={data.url}>{data.url}</a>
      </p>
    </Style>
  );
};

export default ModalInfo;
