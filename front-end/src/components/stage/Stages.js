import React, { Component } from 'react';

import Stage from './Stage';
class Stages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stages: []
    };
  }

  componentDidMount() {
    const { helper } = this.props;

    this.props.fetchFunc().then((res) => {
      if (res.success) {
        this.setState({
          stages: res.body
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
      <section id="stages-all">
        <table>
          <thead>
            <tr>
              <th>Stage</th>
              <th>Stage Type</th>
              <th>Start Date</th>
              <th>Start City</th>
              <th>End City</th>
              <th>Distance</th>
              <th>Stage Details</th>
            </tr>
          </thead>
          <tbody>
            {this.state.stages.map(
              (stage) => <Stage key={stage._id} stage={stage} />
            )}
          </tbody>
        </table>
      </section>
    );
  }
}

export default Stages;