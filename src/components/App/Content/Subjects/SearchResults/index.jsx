import React from 'react';
import { Container, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import './searchResults.css';

const propTypes = {
  filterText: PropTypes.string.isRequired,
  filterSearch: PropTypes.func.isRequired,
};

function SearchResults({ filterText, filterSearch }) {
  return (
    <Container>
      <Col className="search-results-container">
        <Col>
          <span className="title-search"> Resultados de la búsqueda: &quot;{filterText}&quot; </span>
          <hr />
        </Col>

        <Col className="results-container">
          <ul>
            {
              filterSearch().map(result =>
                (
                  <li key={result.id} className="list-results">
                    <span className="resource-title"> {result.title } - </span>
                    <a className="link-search" href={result.url}> {result.url} </a> <br />
                    <span className="resource-description"> {result.description} </span> <br />
                  </li>
                ))
            }
          </ul>
        </Col>
      </Col>
    </Container>
  );
}

SearchResults.propTypes = propTypes;
export default SearchResults;
