import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {initialAppointmentsList: [], title: '', date: '', isStarred: false}

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isFavorite: false,
    }

    this.setState(prevState => ({
      initialAppointmentsList: [
        ...prevState.initialAppointmentsList,
        newAppointment,
      ],
      title: '',
      date: '',
    }))
  }

  toggleIsFavoriteIcon = id => {
    this.setState(prevState => ({
      initialAppointmentsList: prevState.initialAppointmentsList.map(
        eachAppointment => {
          if (eachAppointment.id === id) {
            return {...eachAppointment, isFavorite: !eachAppointment.isFavorite}
          }
          return eachAppointment
        },
      ),
    }))
  }

  onClickStarredList = () => {
    this.setState(prevState => ({isStarred: !prevState.isStarred}))
  }

  render() {
    const {title, date, initialAppointmentsList, isStarred} = this.state
    const starredList = initialAppointmentsList.filter(
      eachAppointment => eachAppointment.isFavorite === true,
    )
    return (
      <div className="app-container">
        <div className="container-card">
          <div className="input-elements-container">
            <form className="form-container" onSubmit={this.onAddAppointment}>
              <h1 className="heading">Add Appointment</h1>
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                className="title-input"
                placeholder="Title"
                value={title}
                onChange={this.onChangeTitle}
              />
              <label htmlFor="date" className="label">
                DATE
              </label>
              <input
                type="date"
                id="date"
                className="date-input"
                placeholder="dd/mm/yyyy"
                value={date}
                onChange={this.onChangeDate}
              />
              <button type="submit" className="add-button">
                ADD
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="image"
            />
          </div>
          <hr width="100%" />
          <div className="title-starred-container">
            <h1 className="title">Appointments</h1>
            <button
              type="button"
              className={isStarred ? 'starred-button' : 'normal-button'}
              onClick={this.onClickStarredList}
            >
              Starred
            </button>
          </div>
          {isStarred ? (
            <ul className="list-container">
              {starredList.map(eachAppointment => (
                <AppointmentItem
                  appointmentDetails={eachAppointment}
                  key={eachAppointment.id}
                  toggleIsFavoriteIcon={this.toggleIsFavoriteIcon}
                />
              ))}
            </ul>
          ) : (
            <ul className="list-container">
              {initialAppointmentsList.map(eachAppointment => (
                <AppointmentItem
                  appointmentDetails={eachAppointment}
                  key={eachAppointment.id}
                  toggleIsFavoriteIcon={this.toggleIsFavoriteIcon}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Appointments
