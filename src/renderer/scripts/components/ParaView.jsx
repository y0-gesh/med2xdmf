import React, { useState } from "react";
import "../../styles/ParaView.css";
import AvkalanLabs from "../../../assets/avkalanlabsjpg.jpg";
import mesh from "../../../assets/casino.svg";
import casino from "../../../assets/casino.svg";
import line from "../../../assets/cross_x.svg";
import triangle from "../../../assets/cross_x.svg";
import arrowRight from "../../../assets/right_arrow.svg";
import closeWindow from "../../../assets/close_window.svg";
import miniWindow from "../../../assets/minimize_window_color.svg";
import maxiWindow from "../../../assets/expand_window.svg";

import { useStateContext } from "../context/ContextProvider";

const ParaView = (props) => {
  const { files, setFiles } = useStateContext();

  const handleCancel = (e) => {
    e.preventDefault();
    setFiles(null);
  };

  const OpenParaview = async () => {
    // const file = props.files[0];
    // const convertedFile = convertFileToXdmf(file);
    // openInParaview(convertedFile);
  };

  const handleWindowControl = (action) => {
    window.api.send(action);
  };
  return (
    <div className="para-view-container">
      <div className="page_container">
        <div className="navbar__window2">
          <div className="navigation_btn2">
            <span
              className="func_icon"
              onClick={() => handleWindowControl("closeApp")}>
              <img src={closeWindow} className="window" alt="close" />
            </span>
            <span
              className="func_icon"
              onClick={() => handleWindowControl("minimizeApp")}>
              <img src={miniWindow} className="window" alt="close" />
            </span>
            <span
              className="func_icon"
              onClick={() => handleWindowControl("toggleMaximizeApp")}>
              <img src={maxiWindow} className="window" alt="close" />
            </span>
          </div>
          <div className="dragable_area2"></div>
        </div>
        <div className="page_title">
          <h1 className="heading">MED2XDMF</h1>
          <img src={AvkalanLabs} className="logo_avkalan" alt="Avkalan Labs" />
        </div>
        <p className="">You can open the converted files in ParaView</p>
        <div className="in_out_container">
          <div className="input_container">
            <label htmlFor="">Input file</label>
            <ul>
              {/* <li className="input_list">beam.med</li> */}
              {Array.from(props.files).map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
          <div className="out_container">
            <label htmlFor="">Output files</label>
            <ul>
              <li className="output_list">
                <div>
                  <img src={mesh} className="" alt="mesh" />
                  <span>mesh.xdmf</span>
                </div>
                <img src={arrowRight} className="" alt="right" />
              </li>
              <li className="output_list">
                <div>
                  <img src={casino} className="" alt="mesh" />
                  <span>points.xdmf</span>
                </div>
                <img src={arrowRight} className="" alt="right" />
              </li>
              <li className="output_list">
                <div>
                  <img src={line} className="" alt="mesh" />
                  <span>lines.xdmf</span>
                </div>
                <img src={arrowRight} className="" alt="right" />
              </li>
              <li className="output_list">
                <div>
                  <img src={triangle} className="" alt="mesh" />
                  <span>triangles.xdmf</span>
                </div>
                <img src={arrowRight} className="" alt="right" />
              </li>
            </ul>
          </div>
        </div>
        <div className="para_button">
          <button
            type="button"
            className="bn4 cancel-btn"
            onClick={handleCancel}>
            Cancel
          </button>
          <button type="button" className="bn4 para-btn" onClick={OpenParaview}>
            Open in ParaView
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParaView;
