import React, { useReducer, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import moment from 'moment';

import { manageFantasyTeamReducer } from '../../reducers';
import '../../resources/style/ManageTeam.css';
import blankJersey from '../../resources/img/blank-jersey.png';

const restDays = [16, 23];
const initialState = {
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

let refreshDeadline;

const ManageFantasyTeam = (props) => {
  const [state, dispatch] = useReducer(manageFantasyTeamReducer, initialState);
  let blanks = [];

  for (let i = 1; i <= state.blankRiders; i++) {
    blanks.push({
      id: i,
      image: blankJersey,
      name: 'No Rider'
    });
  }

  useEffect(() => {
    const { helper, getTeam, getRiders, history } = props;

    getStage();

    getTeam().then((team) => {
      if (team.success) {
        if (team.body) {
          for (let rider of team.body.riders) {
            rider['flag'] = helper.getFlag(rider.country);
          }

          getRiders(`?page=${state.activePage}`).then((riders) => {
            for (let rider of riders.body) {
              rider['flag'] = helper.getFlag(rider.country);
            }

            calcDeadline();

            refreshDeadline = setInterval(() => calcDeadline(), 60000);

            dispatch({
              type: 'teamRiders',
              team: team.body,
              blankRiders: team.body.riders.length,
              riders: riders.body,
              totalItemsCount: riders.count,
              dataReady: true
            });
          }).catch((err) => {
            helper.notify('error', err);
            history.push('/');
          });
        } else {
          history.push('/user/team');
        }
      } else {
        helper.notify('error', team.message);
        history.push('/');
      }
    }).catch((err) => {
      helper.notify('error', err);
      history.push('/');
    });

    return () => {
      clearInterval(refreshDeadline);
    };
  }, []);

  /**
   * Gets stage
   */
  const getStage = () => {
    const { helper, getStage } = props;

    let date = moment().format('YYYY-MM-DD').split('-');

    if (Number(date[1]) === 7) {
      if (restDays.includes(Number(date[2]))) {
        const day = Number(date[2]) + 1;
        date[2] = day;
      }

      date = date.join('-');

      getStage(date).then((res) => {
        if (res.success) {
          dispatch({ type: 'stage', stage: res.body });
        } else {
          helper.notify('error', res.message);
        }
      }).catch(err => helper.notify('error', err));
    }
  };

  /**
   * Calculates transfers deadline
   */
  const calcDeadline = () => {
    const dateInfo = moment().format('DD HH mm').split(' ');
    const day = Number(dateInfo[0]);
    const hours = Number(dateInfo[1]);
    const minutes = Number(dateInfo[2]);

    let isLocked = state.isLocked;
    let deadline = '';
    let days = 0;

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

    dispatch({ type: 'deadline', deadline, isLocked });
  };

  /**
   * Handles page change
   * 
   * @param {Number} pageNumber 
   */
  const handlePageChange = (pageNumber) => {
    const { helper, getRiders } = props;

    getRiders(`?page=${pageNumber}`).then((riders) => {
      for (let rider of riders.body) {
        rider['flag'] = helper.getFlag(rider.country);
      }

      dispatch({
        type: 'pageChange',
        riders: riders.body,
        totalItemsCount: riders.count,
        activePage: pageNumber
      });
    }).catch(err => helper.notify('error', err));
  };

  /**
   * Adds selected rider to your team
   * 
   * @param {Object} rider 
   */
  const addRider = (rider) => {
    const { helper } = props;

    if (state.team.riders.length >= 8) {
      helper.notify('error', 'You can have only 8 riders in your team!');
    } else {
      let isExists = false;

      for (const r of state.team.riders) {
        if (r._id === rider._id) {
          isExists = true;
          break;
        }
      }

      if (isExists) {
        helper.notify('error', 'Rider is already in your team!');
      } else {
        dispatch({ type: 'addRider', rider });
      }
    }
  };

  /**
   * Removes selected rider from your team
   * 
   * @param {Object} rider 
   */
  const removeRider = rider => dispatch({ type: 'removeRider', rider });

  /**
   * Handles change fantasy team confirmation
   */
  const confirmTeam = () => {
    const { helper, editTeam, history } = props;

    if (state.isLocked) {
      helper.notify('error', 'Transfers are currently locked!');
    } else if (state.team.balance < 0) {
      helper.notify('error', 'Insufficient balance!');
    } else if (state.team.riders.length < 8) {
      helper.notify('error', 'You need to have 8 riders to complete your team!');
    } else {
      editTeam(state.team).then((res) => {
        if (res.success) {
          helper.notify('success', res.message);
          history.push('/user/team');
        } else {
          helper.notify('error', res.message);
        }
      }).catch(err => helper.notify('error', err));
    }
  };

  if (!state.dataReady) {
    return <h1>Loading...</h1>;
  }

  return (
    <section id="manage-fantasy-team">
      <div className="fantasy-team-container">
        <div className="team-panel">
          <div className={state.stage.distance ? 'team-stage' : 'hide'}>
            <div>
              STAGE {state.stage.stageNumber}: {state.stage.startCity} - {state.stage.endCity}
            </div>
            <div>
              {state.stage.distance} KM - {state.stage.stageType}
            </div>
          </div>
          <div className="deadline">
            {state.deadline}
          </div>
          <div className={state.team.balance >= 0 ? 'balance-pos' : 'balance-neg'}>
            Balance: {state.team.balance}
          </div>
          <div className={state.team.riders.length >= 8 ? 'confirm-ok' : 'confirm-err'} onClick={confirmTeam}>
            Confirm Team
          </div>
        </div>
        {state.team.riders.map(
          (rider) => <div key={rider._id} className="rider-card">
            <h1>{rider.name}</h1>
            <div>
              <img src="" className={`flag flag-${rider.flag}`} alt="" />
              <button className="remove-btn" onClick={() => removeRider(rider)}>X</button>
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
        activePage={state.activePage}
        itemsCountPerPage={state.itemsCountPerPage}
        totalItemsCount={state.totalItemsCount}
        pageRangeDisplayed={state.pageRangeDisplayed}
        onChange={handlePageChange}
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
            {state.riders.map(
              (r) => <tr className="fantasy-rider" key={r._id}>
                <td>{r.name}</td>
                <td>{r.riderType}</td>
                <td>{r.team.name}</td>
                <td>{r.cost}</td>
                <td>
                  <button onClick={() => addRider(r)}>Add</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <Pagination
          activePage={state.activePage}
          itemsCountPerPage={state.itemsCountPerPage}
          totalItemsCount={state.totalItemsCount}
          pageRangeDisplayed={state.pageRangeDisplayed}
          onChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default ManageFantasyTeam;