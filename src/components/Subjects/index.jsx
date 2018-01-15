import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import ResourcesSubject from '../ResourcesSubject';

class Subjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: [{
        name: 'ReactJS',
        active: true,
      },
      {
        name: 'Donuts',
        active: false,
      }],
    };
  }

  // Change active subject - Update state
  changeActiveSubject(event, current) {
    event.preventDefault();

    const subjects = this.state.subjects.map((index) => {
      const subject = index;
      subject.active = (subject.name === current.name);
      return subject;
    });

    this.setState({ subjects });
  }

  // Show current subject resources
  showSubjectResources() {
    return this.state.subjects.filter(sub => sub.active)[0];
  }

  render() {
    return (
      <div>
        <Nav tabs>
          {this.state.subjects.map((sub) => {
            return (
              <NavItem>
                <NavLink
                  onClick={event => this.changeActiveSubject(event, sub)}
                  active={sub.active}
                >
                  {sub.name}
                </NavLink>
              </NavItem>
            );
          })}
        </Nav>

        <ResourcesSubject subject={this.showSubjectResources()} />

      </div>
    );
  }
}

export default Subjects;
