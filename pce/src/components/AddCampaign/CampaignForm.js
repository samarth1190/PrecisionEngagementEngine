import React from "react";
import { Form, Button } from "react-bootstrap";
import "./AddCampaign.css";
import { TextField } from "@mui/material";
import { invokeLambdaFunction } from "../../lambda/lambdaFunctions";

const CampaignForm = () => {
  const [campaignName, setCampaignName] = React.useState("");
  const [campaignDescription, setCampaignDescription] = React.useState("");

  const submitHandler = async () => {
    const payload = {
      campaign_name: campaignName,
      description: campaignDescription,
    };
    const lambdaResponse = await invokeLambdaFunction(
      "createCampaign",
      payload
    );
    console.log(lambdaResponse);
  };

  return (
    <Form className="campaign-form">
      <h2 className="text">CAMPAIGN DETAILS</h2>
      <Form.Group controlId="formBasicCampaignName">
        <TextField
          id="outlined-basic"
          className="input-field"
          label="CAMPAIGN NAME"
          variant="outlined"
          onChange={(e) => setCampaignName(e)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicCampaignDescription">
        <TextField
          id="outlined-basic"
          className="input-field"
          label="DESCRIPTION"
          variant="outlined"
          onChange={(e) => setCampaignDescription(e)}
        />
      </Form.Group>

      <Button
        className="submit-button"
        variant="dark"
        type="submit"
        onSubmit={submitHandler()}
      >
        Next
      </Button>
    </Form>
  );
};

export default CampaignForm;
