import React from "react";
import NavBar from "../NavBar/NavBar";
import "./AddCampaign.css";
import CampaignForm from "./CampaignForm";

const AddCampaign = () => {
  return (
    <>
      <NavBar />
      <div className="add-campaign-container">
        <div className="screen-container">
        <h1 className="header">ADD A NEW CAMPAIGN</h1>
          <CampaignForm />
        </div>
      </div>
    </>
  );
};

export default AddCampaign;
