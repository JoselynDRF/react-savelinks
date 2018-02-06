import React from 'react';
import { Container, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import './searchResults.css';

const propTypes = {
  subjects: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  searchText: PropTypes.string.isRequired,
  handleCloseSearchResults: PropTypes.func.isRequired,
};

function SearchResults({ subjects, searchText, handleCloseSearchResults }) {
  return (
    <Container>
      <Col className="search-results-container">
        <div className="d-flex justify-content-between">
          <span className="title-search"> Resultados de la búsqueda: &quot;{searchText}&quot; </span>
          <span
            className="icon-close"
            onClick={handleCloseSearchResults}
            role="presentation"
            onKeyDown={() => {}}
          >
            <i className="fas fa-times-circle" />
          </span>
        </div>
        <hr />

        <Col className="results-container">
          { (filterSearch(subjects, searchText).length > 0) ?
            <ul>
              {
                filterSearch(subjects, searchText).map(result =>
                  (
                    <li key={result.id} className="list-results">
                      <span className="resource-title"> {result.title } - </span>
                      <a className="link-search" href={result.url}> {result.url} </a> <br />
                      <span className="resource-description"> {result.description} </span> <br />
                    </li>
                  ))
              }
            </ul>
            :
            <div className="p-3 text-center">
              <span> No se encontraron resultados para tu búsqueda </span>
            </div>
          }
        </Col>
      </Col>
    </Container>
  );
}

// Filter links
function filterSearch(subjects, searchText) {
  const filteredLinks = subjects.map(subject =>
    subject.links.filter((link) => {
      if (!link.isDeleted) {
        return link.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
      } return false;
    }));

  const linksMerged = [].concat(...filteredLinks);
  return linksMerged;
}

SearchResults.propTypes = propTypes;
export default SearchResults;
