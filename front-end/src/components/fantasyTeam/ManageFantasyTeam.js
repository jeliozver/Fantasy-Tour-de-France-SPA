import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import moment from 'moment';

import '../../resources/style/ManageTeam.css';
import blankJersey from '../../resources/img/blank-jersey.png';

const restDays = [16, 23];

class ManageFantasyTeam extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataReady: false,
      team: { riders: [] },
      stage: {},
      riders: [],
      isLocked: false,
      blankRiders: 8,
      deadline: '',
      activePage: 1,
      totalItemsCount: 0,
      itemsCountPerPage: 15,
      pageRangeDisplayed: 7
    };

    this.getStage = this.getStage.bind(this);
    this.calcDeadline = this.calcDeadline.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.addRider = this.addRider.bind(this);
    this.removeRider = this.removeRider.bind(this);
    this.confirmTeam = this.confirmTeam.bind(this);
  }

  componentDidMount() {
    const { helper } = this.props;

    this.getStage();

    this.props.getTeam().then((team) => {
      if (team.success) {
        if (team.body) {
          for (let rider of team.body.riders) {
            rider['flag'] = helper.getFlag(rider.country);
          }
          this.props.getRiders(`?page=${this.state.activePage}`).then((riders) => {
            for (let rider of riders.body) {
              rider['flag'] = helper.getFlag(rider.country);
            }

            this.calcDeadline();
            this.refreshDeadline = setInterval(() => this.calcDeadline(), 60000);

            this.setState(prevState => ({
              team: team.body,
              blankRiders: prevState.blankRiders - team.body.riders.length,
              riders: riders.body,
              totalItemsCount: riders.count,
              dataReady: true
            }));
          }).catch((err) => {
            helper.notify('error', err);
            this.props.history.push('/');
          });
        } else {
          this.props.history.push('/user/team');
        }
      } else {
        helper.notify('error', team.message);
        this.props.history.push('/');
      }
    }).catch((err) => {
      helper.notify('error', err);
      this.props.history.push('/');
    });
  }

  componentWillUnmount() {
    clearInterval(this.refreshDeadline);
  }

  getStage() {
    const { helper } = this.props;

    let date = moment().format('YYYY-MM-DD').split('-');

    if (Number(date[1]) === 7) {
      if (restDays.includes(Number(date[2]))) {
        let day = Number(date[2]) + 1;
        date[2] = day;
      }

      date = date.join('-');

      this.props.getStage(date).then((res) => {
        if (res.success) {
          this.setState({
            stage: res.body
          });
        } else {
          helper.notify('error', res.message);
        }
      }).catch((err) => {
        helper.notify('error', err);
      });
    }
  }

  calcDeadline() {
    let dateInfo = moment().format('DD HH mm').split(' ');

    let isLocked = this.state.isLocked;
    let deadline = '';
    let days = 0;

    let day = Number(dateInfo[0]);
    let hours = Number(dateInfo[1]);
    let minutes = Number(dateInfo[2]);

    if (restDays.includes(day)) {
      days++;
    }

    if (hours < 15) {
      deadline = `Deadline in: ${days} D ${15 - hours - 1} H ${60 - minutes} M`;
    } else if (hours >= 15 && hours < 20) {
      if (restDays.includes(day)) {
        deadline = `Deadline in: ${days} D ${24 - hours + 15} H ${60 - minutes} M`;
      } else {
        deadline = 'Transfers are locked until: 20:00';
        isLocked = true;
      }
    } else {
      deadline = `Deadline in: ${days} D ${24 - hours + 15} H ${60 - minutes} M`;
    }

    this.setState({
      deadline: deadline,
      isLocked: isLocked
    });
  }

  handlePageChange(pageNumber) {
    const { helper } = this.props;

    this.props.getRiders(`?page=${pageNumber}`).then((riders) => {
      for (let rider of riders.body) {
        rider['flag'] = helper.getFlag(rider.country);
      }
      this.setState({
        riders: riders.body,
        totalItemsCount: riders.count,
        activePage: pageNumber
      });
    }).catch((err) => {
      helper.notify('error', err);
    });
  }

  addRider(rider) {
    const { helper } = this.props;

    if (this.state.team.riders.length >= 8) {
      helper.notify('error', 'You can have only 8 riders in your team!');
    } else {
      let isExists = false;

      for (let r of this.state.team.riders) {
        if (r._id === rider._id) {
          isExists = true;
          break;
        }
      }

      if (isExists) {
        helper.notify('error', 'Rider is already in your team!');
      } else {
        this.setState(prevState => {
          let newBalance = prevState.team.balance - rider.cost;
          prevState.team.riders.push(rider);
          prevState.team.balance = Number(newBalance.toFixed(1));
          prevState.blankRiders -= 1;
          return prevState;
        });
      }
    }
  }

  removeRider(rider) {
    this.setState(prevState => {
      let newBalance = prevState.team.balance + rider.cost;
      prevState.team.riders = prevState.team.riders.filter((r) => r._id !== rider._id);
      prevState.team.balance = Number(newBalance.toFixed(1));
      prevState.blankRiders += 1;
      return prevState;
    });
  }

  confirmTeam() {
    const { helper } = this.props;
    
    if (this.state.isLocked) {
      helper.notify('error', 'Transfers are currently locked!');
    } else if (this.state.team.balance < 0) {
      helper.notify('error', 'Insufficient balance!');
    } else if (this.state.team.riders.length < 8) {
      helper.notify('error', 'You need to have 8 riders to complete your team!');
    } else {
      this.props.editTeam(this.state.team).then((res) => {
        if (res.success) {
          helper.notify('success', res.message);
          this.props.history.push('/user/team');
        } else {
          helper.notify('error', res.message);
        }
      }).catch((err) => {
        helper.notify('error', err);
      });

    }
  }

  render() {
    if (!this.state.dataReady) {
      return (
        <h1>Loading...</h1>
      );
    }

    let blanks = [];

    for (let i = 1; i <= this.state.blankRiders; i++) {
      blanks.push({
        id: i,
        image: blankJersey,
        name: 'No Rider'
      });
    }

    return (
      <section id="manage-fantasy-team">
        <div className="fantasy-team-container">
          <div className="team-panel">
            <div className={this.state.stage.distance ? 'team-stage' : 'hide'}>
              <div>
                STAGE {this.state.stage.stageNumber}: {this.state.stage.startCity} - {this.state.stage.endCity}
              </div>
              <div>
                {this.state.stage.distance} KM - {this.state.stage.stageType}
              </div>
            </div>
            <div className="deadline">
              {this.state.deadline}
            </div>
            <div className={this.state.team.balance >= 0 ? 'balance-pos' : 'balance-neg'}>
              Balance: {this.state.team.balance}
            </div>
            <div className={this.state.team.riders.length >= 8 ? 'confirm-ok' : 'confirm-err'} onClick={this.confirmTeam}>
              Confirm Team
            </div>
          </div>
          {this.state.team.riders.map(
            (rider) => <div key={rider._id} className="rider-card">
              <h1>{rider.name}</h1>
              <div>
                <img src="" className={`flag flag-${rider.flag}`} alt="" />
                <button className="remove-btn" onClick={() => this.removeRider(rider)}>X</button>
              </div>
              <h2>Cost: {rider.cost}</h2>
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
        </div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.itemsCountPerPage}
          totalItemsCount={this.state.totalItemsCount}
          pageRangeDisplayed={this.state.pageRangeDisplayed}
          onChange={this.handlePageChange}
        />
        <div className="riders-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Team</th>
                <th>Cost</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.riders.map(
                (r) => <tr className="fantasy-rider" key={r._id}>
                  <td>{r.name}</td>
                  <td>{r.riderType}</td>
                  <td>{r.team.name}</td>
                  <td>{r.cost}</td>
                  <td>
                    <button onClick={() => this.addRider(r)}>Add</button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={this.state.itemsCountPerPage}
            totalItemsCount={this.state.totalItemsCount}
            pageRangeDisplayed={this.state.pageRangeDisplayed}
            onChange={this.handlePageChange}
          />
        </div>
      </section>
    );
  }
}

export default ManageFantasyTeam;