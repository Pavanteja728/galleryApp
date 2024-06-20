// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {thumbItem, onSelect} = props
  const {thumbnailUrl, thumbnailAltText, imageUrl, imageAltText} = thumbItem

  const OnDisplay = () => {
    onSelect(imageUrl, imageAltText)
  }

  return (
    <li className="lists">
      <button className="button" type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbImg"
          onClick={OnDisplay}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
