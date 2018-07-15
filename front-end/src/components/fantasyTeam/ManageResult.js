import React, { Component } from 'react';

import StageResultForm from '../forms/StageResultForm';
import helperService from '../../utilities/helperService';

class ManageResult extends Component {
  constructor(props) {
    super(props);

    this.handleLock = this.handleLock.bind(this);
    this.handleUnlock = this.handleUnlock.bind(this);
  }

  handleLock() {
    this.props.lockTransfers().then((res) => {
      if (res.success) {
        helperService.notify('success', res.message);
      } else {
        helperService.notify('error', res.message);
      }
    }).catch((err) => {
      helperService.notify('error', err);
    });
  }

  handleUnlock() {
    this.props.unlockTransfers().then((res) => {
      if (res.success) {
        helperService.notify('success', res.message);
      } else {
        helperService.notify('error', res.message);
      }
    }).catch((err) => {
      helperService.notify('error', err);
    });
  }

  render() {
    let { lockTransfers, unlockTransfers, ...otherProps } = this.props;

    return (
      <section id="manage-result">
        <div>
          <button className="lock" onClick={this.handleLock}><i className="fas fa-lock"></i> Transfers</button>
          <button className="unlock" onClick={this.handleUnlock}><i className="fas fa-lock-open"></i> Transfers</button>
        </div>
        <div>
          <h1>Top ten results in classification after stage is complete</h1>
          <StageResultForm {...otherProps} />
        </div>
      </section>
    );
  }
}

export default ManageResult;