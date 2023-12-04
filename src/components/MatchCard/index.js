// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  const {
    competingTeamLogo,
    competingTeam,
    result,
    matchStatus,
  } = recentMatchDetails
  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-image"
      />
      <p className="match-card-heading">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className="status">{matchStatus}</p>
    </li>
  )
}

export default MatchCard
