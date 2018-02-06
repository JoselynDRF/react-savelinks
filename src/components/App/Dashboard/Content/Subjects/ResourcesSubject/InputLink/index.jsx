import React from 'react';
import { Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import './inputLink.css';

const propTypes = {
  textInputLink: PropTypes.string.isRequired,
  handleCloseInputLink: PropTypes.func.isRequired,
  handleAddNewLink: PropTypes.func.isRequired,
  handleValueInputLink: PropTypes.func.isRequired,
};

function InputLink({ textInputLink, handleCloseInputLink, handleAddNewLink, handleValueInputLink }) { // eslint-disable-line
  return (
    <div>
      <Form onSubmit={handleAddNewLink} className="form-container">
        <FormGroup>
          <Input
            type="text"
            placeholder="URL del nuevo link"
            name="text"
            onChange={handleValueInputLink}
          />
        </FormGroup>

        <Row>
          <Col className="text-right">
            <Button className="btn btn-secondary" onClick={handleCloseInputLink}> Cerrar </Button>
            <Button
              type="submit"
              className="btn btn-form-primary"
              disabled={!checkInputLink(textInputLink)}
            >
             Enviar
            </Button>
          </Col>
        </Row>
      </Form>
      <hr />
    </div>
  );
}

// Check field required
function checkInputLink(textInputLink) {
  const textLink = textInputLink.trim();
  let valueIsValid = true;

  if (!textLink) {
    valueIsValid = false;
  }

  return valueIsValid;
}

InputLink.propTypes = propTypes;
export default InputLink;
