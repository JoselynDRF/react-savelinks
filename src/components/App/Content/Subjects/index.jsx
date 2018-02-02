import React, { Component } from 'react';
import uuid from 'uuid'; // eslint-disable-line
import axios from 'axios';

import ResourcesSubject from './ResourcesSubject';
import InputSubject from './InputSubject';
import NavSubjects from './NavSubjects';
import ButtonNew from './ButtonNew';
// import { post, put } from './../../HttpServices/index';
import './subjects.css';

class Subjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openInputLink: false,
      openInputSubject: false,
      subjects: [{
        id: '',
        name: '',
        active: true,
        links: [],
      }],
    };

    this.handlechangeSubject = this.handlechangeSubject.bind(this);
    this.handleOpenInputSubject = this.handleOpenInputSubject.bind(this);
    this.handleOpenInputLink = this.handleOpenInputLink.bind(this);
    this.handleCloseInputSubject = this.handleCloseInputSubject.bind(this);
    this.handleCloseInputLink = this.handleCloseInputLink.bind(this);
    this.handleAddNewSubject = this.handleAddNewSubject.bind(this);
    this.handleAddNewLink = this.handleAddNewLink.bind(this);
    this.handleDeleteLink = this.handleDeleteLink.bind(this);
    this.handleFavorites = this.handleFavorites.bind(this);
  }

  // Get subjects from service
  componentDidMount() {
    axios.get('http://localhost:3000/db')
      .then((response) => {
        this.setState({
          subjects: response.data.subjects,
        });
      })
      .catch((error) => {
        console.log('GET error', error);
      });
  }

  // Get current subject resources
  getActiveSubjectResources() {
    return this.state.subjects.filter(subject => subject.active)[0];
  }

  // Update active subject
  updateActiveSubject(current) {
    return this.state.subjects.map((index) => {
      const subject = index;
      subject.active = (subject.id === current.id);
      return subject;
    });
  }

  // Create new subject
  createNewSubject(event) {
    const newSubject = {
      id: uuid.v4(),
      name: event.target.text.value,
      active: false,
      links: [],
    };

    const subjects = this.state.subjects.concat(newSubject);

    // post(newSubject); // Update json server
    return subjects;
  }

  // Create new link
  createNewLink(event) {
    const newLink = {
      id: uuid.v4(),
      url: event.target.text.value,
      title: 'New link',
      picture: 'img/youtube.jpg',
      description: 'ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      observation: 'Nuevo link',
      autor: 'JoselynDRF',
      date: Date.now(),
      isFavorite: false,
    };

    const currentSubject = this.getActiveSubjectResources();

    const subjects = this.state.subjects.map((index) => {
      const subject = index;
      if (subject.id === currentSubject.id) {
        subject.links = subject.links.concat(newLink);
      }

      // put(subject.id, subject); // Update json server
      return subject;
    });

    return subjects;
  }

  // Delete link
  updateDeletedLink(id) {
    const currentSubject = this.getActiveSubjectResources();

    const subjects = this.state.subjects.map((subject) => {
      if (subject.id === currentSubject.id) {
        currentSubject.links.map((index) => {
          const link = index;
          if (link.id === id) {
            link.isDeleted = true;
          }
          return link;
        });
      }

      // put(subject.id, subject); // Update json server
      return subject;
    });

    return subjects;
  }

  // Update links favorites
  updateFavorites(id) {
    const currentSubject = this.getActiveSubjectResources();

    const subjects = this.state.subjects.map((subject) => {
      if (subject.id === currentSubject.id) {
        currentSubject.links.map((index) => {
          const link = index;
          if (link.id === id) {
            link.isFavorite = !link.isFavorite;
          }
          return link;
        });
      }

      // put(subject.id, subject); // Update json server
      return subject;
    });

    return subjects;
  }


  // ******************** UPDATE STATE ******************** //

  // Change active subject - Update subjects
  handlechangeSubject(event, current) {
    event.preventDefault();
    const subjects = this.updateActiveSubject(current);
    this.setState({
      subjects,
    });
  }

  // Open inputSubject
  handleOpenInputSubject(event) {
    event.preventDefault();
    this.setState({
      openInputSubject: true,
    });
  }

  // Open inputLink
  handleOpenInputLink(event) {
    event.preventDefault();
    this.setState({
      openInputLink: true,
    });
  }

  // Close inputSubject
  handleCloseInputSubject(event) {
    event.preventDefault();
    this.setState({
      openInputSubject: false,
    });
  }

  // Close inputLink
  handleCloseInputLink(event) {
    event.preventDefault();
    this.setState({
      openInputLink: false,
    });
  }

  // Add new subject (event from inputSubject) - Update subjects
  handleAddNewSubject(event) {
    event.preventDefault();
    const subjects = this.createNewSubject(event);
    this.setState({
      subjects,
      openInputSubject: false,
    });
  }

  // Add new link (event from inputLink) - Update subjects
  handleAddNewLink(event) {
    event.preventDefault();
    const subjects = this.createNewLink(event);
    this.setState({
      subjects,
      openInputLink: false,
    });
  }

  // Delete link - Update subjects
  handleDeleteLink(event, id) {
    event.preventDefault();
    const subjects = this.updateDeletedLink(id);
    this.setState({
      subjects,
    });
  }

  // Change state favorite - Update subjects
  handleFavorites(event, id) {
    event.preventDefault();
    const subjects = this.updateFavorites(id);
    this.setState({
      subjects,
    });
  }


  // ******************** RENDER ******************** //

  // Render inputSubject
  renderInputSubject() { // eslint-disable-line
    if (this.state.openInputSubject) {
      return (
        <InputSubject
          handleCloseInputSubject={this.handleCloseInputSubject}
          handleAddNewSubject={this.handleAddNewSubject}
        />
      );
    }
  }

  render() {
    return (
      <div>
        <ButtonNew handleOpenInputSubject={this.handleOpenInputSubject} />
        {this.renderInputSubject()}

        <NavSubjects
          subjects={this.state.subjects}
          handlechangeSubject={this.handlechangeSubject}
        />

        <ResourcesSubject
          activeSubject={this.getActiveSubjectResources()}
          openInputLink={this.state.openInputLink}
          handleOpenInputLink={this.handleOpenInputLink}
          handleCloseInputLink={this.handleCloseInputLink}
          handleAddNewLink={this.handleAddNewLink}
          handleFavorites={this.handleFavorites}
          handleDeleteLink={this.handleDeleteLink}
        />
      </div>
    );
  }
}

export default Subjects;
