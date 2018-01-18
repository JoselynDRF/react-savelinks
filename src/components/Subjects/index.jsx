import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import uuid from 'uuid'; // eslint-disable-line
import axios from 'axios'; // eslint-disable-line

import ResourcesSubject from '../ResourcesSubject';

class Subjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openInputLink: false,
      subjects: [{
        id: uuid.v4(),
        name: 'ReactJS',
        active: true,
        links: [{
          id: uuid.v4(),
          url: 'www.google.com',
          title: 'Link 1 about ReactJS',
          picture: 'http://thecodeplayer.com/uploads/media/2rT2vdx.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          observation: 'Interesante para aprender React',
          autor: 'JoselynDRF',
          date: Date.now() - 180000,
          isFavorite: true,
        },
        {
          id: uuid.v4(),
          url: 'www.google.com',
          title: 'Link 2 about ReactJS',
          picture: 'http://thecodeplayer.com/uploads/media/2rT2vdx.jpg',
          description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          observation: 'React mas avanzado',
          autor: 'JoselynDRF',
          date: Date.now() - 1800,
          isFavorite: false,
        },
        {
          id: uuid.v4(),
          url: 'www.google.com',
          title: 'Link 3 about ReactJS',
          picture: 'http://thecodeplayer.com/uploads/media/2rT2vdx.jpg',
          description: 'Lorem ipsum dolor sit amet',
          observation: 'Este esta chévere',
          autor: 'JoselynDRF',
          date: Date.now(),
          isFavorite: true,
        }],
      },
      {
        id: uuid.v4(),
        name: 'Donuts',
        active: false,
        links: [{
          id: uuid.v4(),
          url: 'www.google.com',
          title: 'Link A sobre donuts',
          picture: 'http://thecodeplayer.com/uploads/media/2rT2vdx.jpg',
          description: 'T aliquip ex ea commodo consequat.',
          observation: 'Deliciosas',
          autor: 'JoselynDRF',
          date: Date.now(),
          isFavorite: true,
        },
        {
          id: uuid.v4(),
          url: 'www.google.com',
          title: 'Link B sobre donuts',
          picture: 'http://thecodeplayer.com/uploads/media/2rT2vdx.jpg',
          description: 'T aliquip ex ea commodo consequat.',
          observation: 'Rellenas',
          autor: 'JoselynDRF',
          date: Date.now(),
          isFavorite: false,
        }],
      }],
    };

    this.addNewLink = this.addNewLink.bind(this);
    this.handleOpenInputLink = this.handleOpenInputLink.bind(this);
    this.handleCloseInputLink = this.handleCloseInputLink.bind(this);

    // axios.get('http://localhost:3000/subjects')
    //   .then((response) => {
    //     console.log(response.data);
    //     this.setState({
    //       subjects: response.data,
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  // Change active subject - Update state
  changeActiveSubject(event, current) {
    event.preventDefault();

    const subjects = this.state.subjects.map((index) => {
      const subject = index;
      subject.active = (subject.id === current.id);
      return subject;
    });

    this.setState({ subjects });
  }

  // Show current subject resources
  showSubjectResources() {
    return this.state.subjects.filter(sub => sub.active)[0];
  }

  // Add new link (from input)
  addNewLink(event) {
    event.preventDefault();

    const newLink = {
      id: uuid.v4(),
      url: '',
      title: event.target.text.value,
      picture: '',
      description: '',
      observation: '',
      autor: '',
      date: Date.now(),
      isFavorite: false,
    };

    const currentSubject = this.showSubjectResources();

    const subjects = this.state.subjects.map((index) => {
      const subject = index;
      if (subject.id === currentSubject.id) {
        subject.links = subject.links.concat(newLink);
      } return subject;
    });

    this.setState({
      subjects,
      openInputLink: false,
    });
  }

  // Open inputLink
  handleOpenInputLink(event) {
    event.preventDefault();
    this.setState({
      openInputLink: true,
    });
  }

  // Close inputLink
  handleCloseInputLink(event) {
    event.preventDefault();
    this.setState({
      openInputLink: false,
    });
  }

  render() {
    return (
      <div>
        <Nav tabs>
          {this.state.subjects.map((sub) => {
            return (
              <NavItem key={sub.id}>
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

        <ResourcesSubject
          subject={this.showSubjectResources()}
          openInputLink={this.state.openInputLink}
          handleOpenInputLink={this.handleOpenInputLink}
          handleCloseInputLink={this.handleCloseInputLink}
          addNewLink={this.addNewLink}
        />
      </div>
    );
  }
}

export default Subjects;
