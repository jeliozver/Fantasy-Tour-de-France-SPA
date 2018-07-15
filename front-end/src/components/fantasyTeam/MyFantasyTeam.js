import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import blankJersey from '../../resources/img/blank-jersey.png';
import FantasyTeamForm from '../forms/FantasyTeamForm';
import helperService from '../../utilities/helperService';

class MyFantasyTeam extends Component {
  constructor(props) {
    super(props);

    this.state = {
      team: {
        riders: []
      },
      blanks: 8
    };
  }

  componentDidMount() {
    this.props.fetchFunc().then((res) => {
      if (res.success) {
        if (res.body) {

          for (let rider of res.body.riders) {
            rider['flag'] = helperService.getFlag(rider.country);
          }

          this.setState(prevState => ({
            team: res.body,
            blanks: prevState.blanks - res.body.riders.length
          }));
        }
      } else {
        helperService.notify('error', res.message);
      }
    }).catch((err) => {
      helperService.notify('error', err);
    });
  }

  render() {
    let blanks = [];

    for (let i = 1; i <= this.state.blanks; i++) {
      blanks.push({
        id: i,
        image: blankJersey,
        name: 'No Rider'
      });
    }

    if (this.state.team.name) {
      return (
        <section id="my-fantasy-team">
          <h1>{this.state.team.name}</h1>
          <h2>Total Points: {this.state.team.points}</h2>
          {this.state.team.riders.map(
            (rider) => <div key={rider._id} className="rider-card">
              <h1>{rider.name}</h1>
              <h2>{rider.country}</h2>
              <img src="" className={`flag flag-${rider.flag}`} alt="" />
              <h2>{rider.team.name}</h2>
              <Link to={`/rider/details/${rider._id}`}>
                <img src={rider.image} alt="rider-img" />
              </Link>
            </div>
          )}
          {blanks.map(
            (blank) => <div className="rider-card" key={blank.id}>
              <h1>{blank.name}</h1>
              <img className="blank" src={blank.image} alt="" />
            </div>
          )}
        </section>
      );
    } else {
      return (
        <FantasyTeamForm {...this.props} />
      );
    }
  }
}

export default MyFantasyTeam;