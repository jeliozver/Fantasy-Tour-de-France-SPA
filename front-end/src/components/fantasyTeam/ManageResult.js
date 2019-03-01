import React from 'react';

import StageResultForm from '../forms/StageResultForm';

const ManageResult = (props) => {
  const { helper, lockTransfers, unlockTransfers, ...otherProps } = props;

  const handleLock = () => {
    lockTransfers().then((res) => {
      if (res.success) {
        helper.notify('success', res.message);
      } else {
        helper.notify('error', res.message);
      }
    }).catch((err) => {
      helper.notify('error', err);
    });
  };

  const handleUnlock = () => {
    unlockTransfers().then((res) => {
      if (res.success) {
        helper.notify('success', res.message);
      } else {
        helper.notify('error', res.message);
      }
    }).catch((err) => {
      helper.notify('error', err);
    });
  };

  return (
    <section id="manage-result">
      <div>
        <button className="lock" onClick={handleLock}><i className="fas fa-lock"></i> Transfers</button>
        <button className="unlock" onClick={handleUnlock}><i className="fas fa-lock-open"></i> Transfers</button>
      </div>
      <div>
        <h1>Top ten results in classification after stage is complete</h1>
        <StageResultForm {...otherProps} />
      </div>
    </section>
  );
};

export default ManageResult;