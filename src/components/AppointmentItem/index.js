import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsFavoriteIcon} = props

  const {title, id, date, isFavorite} = appointmentDetails
  const dateArray = date.split('-')
  const day = parseInt(dateArray[0])
  const month = parseInt(dateArray[1])
  const year = parseInt(dateArray[2])
  const formattedDate = format(new Date(year, month, day), 'dd,MMMM,yyyy, EEEE')

  const onClickStar = () => {
    console.log(dateArray)
    console.log(format(new Date(year, month, day), 'dd,MMMM,yyyy, EEEE'))
    toggleIsFavoriteIcon(id)
  }

  const starImage = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="list-item">
      <div className="list-item-container">
        <p className="title-type">{title}</p>
        <p className="day">{formattedDate}</p>
      </div>
      <button
        className="star-button"
        type="button"
        data-testid="star"
        onClick={onClickStar}
      >
        <img src={starImage} alt="star" />
      </button>
    </li>
  )
}

export default AppointmentItem
