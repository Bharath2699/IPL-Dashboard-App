// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

const url = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {teamsData: [], isLoading: true}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const response = await fetch(url)
    console.log(response)
    const data = await response.json()

    const dataup = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({teamsData: dataup, isLoading: false})
  }

  render() {
    const {teamsData, isLoading} = this.state
    return (
      <div className="home-container">
        <div className="home-header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-image"
          />
          <h1 className="home-heading">IPL Dashboard</h1>
        </div>
        <ul className="home-teamlist">
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            teamsData.map(each => <TeamCard teamData={each} key={each.id} />)
          )}
        </ul>
      </div>
    )
  }
}

export default Home
