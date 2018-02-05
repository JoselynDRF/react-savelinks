import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import './navSubjects.css';

const propTypes = {
  subjects: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  handlechangeSubject: PropTypes.func.isRequired,
};

function NavSubjects({ subjects, handlechangeSubject }) {
  return (
    <Nav tabs>
      {subjects.map(subject => (
        <NavItem key={subject.id}>
          <NavLink
            className="nav-subjects"
            onClick={e => handlechangeSubject(e, subject)}
            active={subject.active}
          >
            {subject.name}
          </NavLink>
        </NavItem>
        ))
      }
    </Nav>
  );
}

NavSubjects.propTypes = propTypes;
export default NavSubjects;
