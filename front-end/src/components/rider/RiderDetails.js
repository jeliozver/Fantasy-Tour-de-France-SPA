import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RiderDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rider: {
        team: {}
      }
    };
  }

  componentDidMount() {
    const { helper } = this.props;
    
    this.props.fetchFunc(this.props.match.params.id).then((res) => {
      if (res.success) {
        res.body['flag'] = helper.getFlag(res.body.country);
        this.setState({
          rider: res.body
        });
      }
    }).catch((err) => {
      helper.notify('error', err);
    });
  }

  render() {
    return (
      <section id="rider-single">
        <div>
          <h1>
            {this.state.rider.name}
            <img src="" className={`flag flag-${this.state.rider.flag}`} alt="" />
          </h1>
          <img className="rider-img" src={this.state.rider.image} alt="rider" />
          <div>
            {this.props.isAdmin ? <Link className="rider-btn" to={`/rider/edit/${this.state.rider._id}`}>Edit Rider</Link> : ''}
          </div>
          <table>
            <thead>
              <tr>
                <th>Team</th>
                <th>Rider Type</th>
                <th>Nationality</th>
                <th>Age</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Link to={`/team/details/${this.state.rider.team._id}`}>{this.state.rider.team.name}</Link>
                </td>
                <td>{this.state.rider.riderType}</td>
                <td>{this.state.rider.country}</td>
                <td>{this.state.rider.age}</td>
                <td>{this.state.rider.cost}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default RiderDetails;