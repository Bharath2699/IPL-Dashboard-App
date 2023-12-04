// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <div className="first">
        <p className="team">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="opp-team-image"
      />
      <div className="end">
        <p className="bold">First Innings</p>
        <p className="right">{firstInnings}</p>

        <p className="bold">Second Innings</p>
        <p className="right">{secondInnings}</p>

        <p className="bold">Man of The Match</p>
        <p className="right">{manOfTheMatch}</p>

        <p className="bold">Umpires</p>
        <p className="right">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
