import React, { Component } from 'react';
import { Button } from 'reactstrap';

import ResourcesSubject from '../ResourcesSubject';

class Subjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: [{
        name: 'ReactJS',
      },
      {
        name: 'Donuts',
      }],
    };
  }

  render() {
    return (
      <div>
        <h6> Subjects Component </h6>
        {this.state.subjects.map((sub) => {
          return (
            <div>
              <Button color="primary"> {sub.name} </Button>
              <ResourcesSubject subject={sub} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Subjects;
