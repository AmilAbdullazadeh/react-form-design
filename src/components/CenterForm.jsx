import React, { Component } from "react";
import "../style/centerForm.scss";
import { Button, Form, FormGroup, Input } from "reactstrap";

class CenterForm extends Component {
  render() {
    return (
      <div className="form-div">
        <Form>
          <FormGroup>
            <Input type="text" name="name" id="name" placeholder="Name" />
          </FormGroup>
          <FormGroup>
            <Input type="email" name="email" id="email" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Input
              type="textarea"
              name="message"
              id="message"
              placeholder="Message"
            />
          </FormGroup>
        </Form>
        <Button color="info">Send</Button>
      </div>
    );
  }
}

export default CenterForm;
