import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import PropTypes from 'prop-types';

const propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

function SearchBar({ handleSearch }) {
  return (
    <Form>
      <FormGroup>
        <Input type="text" placeholder="Buscar" name="search" onChange={handleSearch} />
      </FormGroup>
    </Form>
  );
}

SearchBar.propTypes = propTypes;
export default SearchBar;
