import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import uuid from 'uuid'; // eslint-disable-line
import axios from 'axios';
import ResourcesSubject from '../ResourcesSubject';
import InputSubject from '../InputSubject';
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

    this.addNewLink = this.addNewLink.bind(this);
    this.handleOpenInputLink = this.handleOpenInputLink.bind(this);
    this.handleCloseInputLink = this.handleCloseInputLink.bind(this);
    this.handleFavorites = this.handleFavorites.bind(this);
    this.deleteLink = this.deleteLink.bind(this);

    this.handleOpenInputSubject = this.handleOpenInputSubject.bind(this);
    this.handleCloseInputSubject = this.handleCloseInputSubject.bind(this);
    this.addNewSubject = this.addNewSubject.bind(this);
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
        console.log(error);
      });
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
      url: event.target.text.value,
      title: 'New link',
      picture: 'img/youtube.jpg',
      description: 'ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      observation: 'Nuevo link',
      autor: 'JoselynDRF',
      date: Date.now(),
      isFavorite: false,
    };

    const currentSubject = this.showSubjectResources();

    const subjects = this.state.subjects.map((index) => {
      const subject = index;
      if (subject.id === currentSubject.id) {
        subject.links = subject.links.concat(newLink);
      }

      axios.put(`http://localhost:3000/subjects/${subject.id}`, subject)
        .then((response) => {
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });

      return subject;
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

  // Change state favorite
  handleFavorites(event, id) {
    event.preventDefault();

    const currentSubject = this.showSubjectResources();

    const subjects = this.state.subjects.map((subject) => {
      if (subject.id === currentSubject.id) {
        currentSubject.links.map((index) => {
          const link = index;
          if (link.id === id) {
            link.isFavorite = !link.isFavorite;
          }
        });
      }

      axios.put(`http://localhost:3000/subjects/${subject.id}`, subject)
        .then((response) => {
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });

      return subject;
    });

    this.setState({
      subjects,
    });
  }

  // Delete link
  deleteLink(event, id) {
    event.preventDefault();

    const currentSubject = this.showSubjectResources();

    const subjects = this.state.subjects.map((subject) => {
      if (subject.id === currentSubject.id) {
        currentSubject.links.map((index) => {
          const link = index;
          if (link.id === id) {
            link.isDeleted = true;
          }
        });
      }

      axios.put(`http://localhost:3000/subjects/${subject.id}`, subject)
        .then((response) => {
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });

      return subject;
    });

    this.setState({
      subjects,
    });
  }

  // Open input Subject
  handleOpenInputSubject(event) {
    event.preventDefault();
    this.setState({
      openInputSubject: true,
    });
  }

  // Close input subject
  handleCloseInputSubject(event) {
    event.preventDefault();
    this.setState({
      openInputSubject: false,
    });
  }

  // Creat new subject
  addNewSubject(event) {
    event.preventDefault();

    const newSubject = {
      id: uuid.v4(),
      name: event.target.text.value,
      active: false,
      links: [],
    };

    const subjects = this.state.subjects.concat(newSubject);

    axios.post('http://localhost:3000/subjects/', newSubject)
      .then((response) => {
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({
      subjects,
      openInputSubject: false,
    });
  }

  // Render input Subject
  renderInputSubject() { // eslint-disable-line
    if (this.state.openInputSubject) {
      return (
        <InputSubject
          onCloseInputSubject={this.handleCloseInputSubject}
          onAddNewSubject={this.addNewSubject}
        />
      );
    }
  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-end">
          <span
            className="icon-create"
            onClick={e => this.handleOpenInputSubject(e)}
            role="presentation"
            onKeyDown={e => this.handleOpenInputSubject(e)}
          >
            <i className="fas fa-pencil-alt" />
          </span>
        </div>

        {this.renderInputSubject()}

        <Nav tabs>
          {this.state.subjects.map((sub) => {
            return (
              <NavItem key={sub.id}>
                <NavLink
                  className="nav-subjects"
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
          handleFavorites={this.handleFavorites}
          deleteLink={this.deleteLink}
        />
      </div>
    );
  }
}

export default Subjects;
