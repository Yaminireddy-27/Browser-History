import './index.css'

const HistoryItem = props => {
  const {historyItemDetails, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyItemDetails

  const onClickDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-list">
      <div className="item-container">
        <p className="history-time">{timeAccessed}</p>
        <div className="history-item">
          <img src={logoUrl} alt="domain logo" className="history-item-logo" />
          <p className="history-item-title">{title}</p>
          <p className="history-item-domain">{domainUrl}</p>
        </div>
        <button
          data-testid="delete"
          type="button"
          className="button"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
