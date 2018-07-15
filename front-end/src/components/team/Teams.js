import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import helperService from '../../utilities/helperService';

class Teams extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: []
    };
  }

  componentDidMount() {
    this.props.fetchFunc().then((res) => {
      if (res.success) {

        for (let tm of res.body) {
          tm['flag'] = helperService.getFlag(tm.country);
        }

        this.setState({
          teams: res.body
        });
      } else {
        helperService.notify('error', res.message);
      }
    }).catch((err) => {
      helperService.notify('error', err);
    });
  }

  render() {
    return (
      <section id="teams-all">
        {this.state.teams.map(
          (tm) => <div key={tm._id}>
            <h1>{tm.name}</h1>
            <img src="" className={`flag flag-${tm.flag}`} alt="" />
            <Link className="effect" to={{ pathname: `/team/details/${tm._id}` }}>
              <img className="jersey" src={tm.jersey} alt="team-jersey" />
              <p>Team Details</p>
            </Link>
          </div>
        )}
      </section>
    );
  }
}

export default Teams;