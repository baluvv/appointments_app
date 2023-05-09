import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsFavoriteIcon} = props

  const {title, id, date, isFavorite} = appointmentDetails

  const formattedDate = format(new Date(date), 'dd MMMM yyyy, EEEE')

  const onClickStar = () => {
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
