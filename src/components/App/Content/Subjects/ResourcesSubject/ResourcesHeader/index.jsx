import React from 'react';
import PropTypes from 'prop-types';
import './resourcesHeader.css';

const propTypes = {
  activeSubject: PropTypes.shape().isRequired,
  handleOpenInputLink: PropTypes.func.isRequired,
};

function ResourcesHeader({ activeSubject, handleOpenInputLink }) {
  return (
    <div className="resources-header d-flex justify-content-between">
      <span className="resources-title"> Links sobre {activeSubject.name} </span>
      <div>
        {/* <span className="icon-filter"> <i className="fas fa-filter" /> </span> */}
        <span
          className="icon-add"
          onClick={handleOpenInputLink}
          role="presentation"
          onKeyDown={() => {}}
        >
          <i className="fas fa-plus-circle" />
        </span>
      </div>
    </div>
  );
}

ResourcesHeader.propTypes = propTypes;
export default ResourcesHeader;
