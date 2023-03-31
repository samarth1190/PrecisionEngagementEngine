import React from "react";
import { Form, Button } from "react-bootstrap";
import './AddCampaign.css'
import { TextField } from "@mui/material";


const CampaignForm = () => {
  return (
      <Form className="campaign-form">
      <h2 className="text">CAMPAIGN DETAILS</h2>
        <Form.Group controlId="formBasicCampaignName">
          <TextField id="outlined-basic" className="input-field" label="CAMPAIGN NAME" variant="outlined" />
        </Form.Group>

        <Form.Group controlId="formBasicCampaignDescription">
        <TextField id="outlined-basic" className="input-field" label="DESCRIPTION" variant="outlined" />

        </Form.Group>

        <Button className="submit-button" variant="dark" type="submit">
          Next
        </Button>
      </Form>
  );
};

export default CampaignForm;