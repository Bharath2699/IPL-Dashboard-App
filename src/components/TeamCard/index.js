// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamData} = props
  const {name, id, teamImageUrl} = teamData
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="team-list">
        <img src={teamImageUrl} alt={name} className="teams-image" />

        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
