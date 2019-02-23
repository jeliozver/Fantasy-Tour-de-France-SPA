import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
              (stage) => <tr key={stage._id}>
                <td>Stage {stage.stageNumber}</td>
                <td>{stage.stageType}</td>
                <td>{stage.startDay.substring(0, 10)}</td>
                <td>{stage.startCity}</td>
                <td>{stage.endCity}</td>
                <td>{stage.distance} km</td>
                <td>
                  <Link to={`/stage/details/${stage._id}`}>[ Details ]</Link>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    );
  }
}

export default Stages;