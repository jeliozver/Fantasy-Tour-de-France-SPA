import React, { Component } from 'react';

import Team from './Team';

class Teams extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: []
    };
  }

  componentDidMount() {
    const { helper } = this.props;
    
    this.props.fetchFunc().then((res) => {
      if (res.success) {

        for (let tm of res.body) {
          tm['flag'] = helper.getFlag(tm.country);
        }

        this.setState({
          teams: res.body
        });
      } else {
        helper.notify('error', res.message);
      }
    }).catch((err) => {
      helper.notify('error', err);
    });
  }

  render() {
    return (
      <section id="teams-all">
        {this.state.teams.map(
          (tm) => <Team key={tm._id} team={tm} />
        )}
      </section>
    );
  }
}

export default Teams;