// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {latestMatch: [], bannerUrl: '', recentMatch: [], isLoading: true}

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedUrl = {bannerUrls: data.team_banner_url}

    const updateData = {
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      matchStatus: data.latest_match_details.match_status,
    }

    const updatedRecentMatches = data.recent_matches.map(each => ({
      umpires: data.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))

    this.setState({
      latestMatch: updateData,
      isLoading: false,
      bannerUrl: updatedUrl,
      recentMatch: updatedRecentMatches,
    })
  }

  render() {
    const {recentMatch, latestMatch, bannerUrl, isLoading} = this.state
    const {bannerUrls} = bannerUrl
    return (
      <div className="team-match-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <img src={bannerUrls} alt="team banner" className="team-image" />
            <p className="latest">Latest Matches</p>

            <LatestMatch
              latestMatchDetails={latestMatch}
              key={latestMatch.id}
            />

            <ul className="unorder-list">
              {recentMatch.map(each => (
                <MatchCard recentMatchDetails={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
