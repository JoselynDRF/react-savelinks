import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import './inputSubject.css';

const propTypes = {
  textInputSubject: PropTypes.string.isRequired,
  handleCloseInputSubject: PropTypes.func.isRequired,
  handleAddNewSubject: PropTypes.func.isRequired,
  handleValueInputSubject: PropTypes.func.isRequired,
};

function InputSubject({ textInputSubject, handleCloseInputSubject, handleAddNewSubject, handleValueInputSubject }) { // eslint-disable-line
  return (
    <Container>
      <Col className="form-subject-container">
        <Col className="text-center">
          <span className="title-subject-form"> Crea un nuevo tema! </span>
        </Col>

        <Form onSubmit={handleAddNewSubject}>
          <FormGroup>
            <Label for="inputSubject" className="label-subject-form"> Nombre del tema: </Label>
            <Input
              id="inputSubject"
              type="text"
              name="text"
              placeholder="Ej. Recetas"
              onChange={handleValueInputSubject}
            />
          </FormGroup>

          <Row>
            <Col className="text-right">
              <Button className="btn btn-secondary" onClick={handleCloseInputSubject}> Cerrar </Button>
              <Button
                type="submit"
                className="btn btn-form-subject-primary"
                disabled={!checkInputSubject(textInputSubject)}
              >
                Enviar
              </Button>
            </Col>
          </Row>
        </Form>

      </Col>
    </Container>
  );
}

// Check field required
function checkInputSubject(textInputSubject) {
  const textSubject = textInputSubject.trim();
  let valueIsValid = true;

  if (!textSubject) {
    valueIsValid = false;
  }

  return valueIsValid;
}

InputSubject.propTypes = propTypes;
export default InputSubject;
