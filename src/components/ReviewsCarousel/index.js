import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    if (count < 3) {
      this.setState(prevState => ({count: prevState.count + 1}))
    } else {
      this.setState({count: 3})
    }
  }

  onDecrement = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 1}))
    } else {
      this.setState({count: 0})
    }
  }

  render() {
    const {reviewsList} = this.props
    const {count} = this.state

    const {imgUrl, username, companyName, description} = reviewsList[count]
    return (
      <div className="container">
        <button onClick={this.onDecrement}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
          />
        </button>
        <div className="middlecontainer">
          <h1>Reviews</h1>
          <img src={imgUrl} />
          <p className="name">{username}</p>
          <p>{companyName}</p>
          <p>{description}</p>
        </div>
        <div>
          <button onClick={this.onIncrement}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
