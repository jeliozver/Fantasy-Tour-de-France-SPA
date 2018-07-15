import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import helperService from '../../utilities/helperService';

class TeamDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      team: {
        riders: []
      },
      teamOnFocus: ''
    };

    this.handleResponse = this.handleResponse.bind(this);
    this.prevTeam = this.prevTeam.bind(this);
    this.nextTeam = this.nextTeam.bind(this);
  }

  handleResponse(res) {
    if (res.success) {

      res.body['flag'] = helperService.getFlag(res.body.country);

      for (let rider of res.body.riders) {
        rider['flag'] = helperService.getFlag(rider.country);
      }

      this.setState({
        team: res.body,
        teamOnFocus: res.body.teamNumber
      });
    } else {
      helperService.notify('error', res.message);
    }
  }

  componentDidMount() {
    this.props.fetchFunc(this.props.match.params.id).then((res) => {
      this.handleResponse(res);
    }).catch((err) => {
      helperService.notify('error', err);
    });
  }

  prevTeam() {
    this.props.toggleFunc(this.state.teamOnFocus - 1).then((res) => {
      this.handleResponse(res);
    }).catch((err) => {
      helperService.notify('error', err);
    });
  }

  nextTeam() {
    this.props.toggleFunc(this.state.teamOnFocus + 1).then((res) => {
      this.handleResponse(res);
    }).catch((err) => {
      helperService.notify('error', err);
    });
  }

  render() {
    return (
      <section id="team-single">
        <div onClick={this.prevTeam} className="arrows prev"></div>
        <div onClick={this.nextTeam} className="arrows next"></div>
        <div className="team-card">
          <h1>{this.state.team.name}</h1>
          <h2>{this.state.team.country}</h2>
          <img src="" className={`flag flag-${this.state.team.flag}`} alt="" />
          <img className="jersey" src={this.state.team.jersey} alt="team-jersey" />
        </div>
        <div>
          {this.props.isAdmin ? <Link className="team-btn" to={`/team/edit/${this.state.team._id}`}>Edit Team</Link> : ''}
        </div>
        <div className="team-riders">
          {this.state.team.riders.map(
            (rider) => <div key={rider._id} className="rider-card">
              <h1>{rider.name}</h1>
              <h2>{rider.country}</h2>
              <img src="" className={`flag flag-${rider.flag}`} alt="" />
              <Link to={`/rider/details/${rider._id}`}>
                <img src={rider.image} alt="rider-img" />
              </Link>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default TeamDetails;