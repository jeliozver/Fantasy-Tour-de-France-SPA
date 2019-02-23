import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StageDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stage: {},
      stageOnFocus: ''
    };

    this.handleResponse = this.handleResponse.bind(this);
    this.prevStage = this.prevStage.bind(this);
    this.nextStage = this.nextStage.bind(this);
  }

  handleResponse(res) {
    const { helper } = this.props;

    if (res.success) {
      res.body.startDay = res.body.startDay.substring(8, 10);

      this.setState({
        stage: res.body,
        stageOnFocus: res.body.stageNumber
      });
    } else {
      helper.notify('error', res.message);
    }
  }

  componentDidMount() {
    const { helper } = this.props;

    this.props.fetchFunc(this.props.match.params.id).then((res) => {
      this.handleResponse(res);
    }).catch((err) => {
      helper.notify('error', err);
    });
  }

  prevStage() {
    const { helper } = this.props;

    this.props.toggleFunc(this.state.stageOnFocus - 1).then((res) => {
      this.handleResponse(res);
    }).catch((err) => {
      helper.notify('error', err);
    });
  }

  nextStage() {
    const { helper } = this.props;
    
    this.props.toggleFunc(this.state.stageOnFocus + 1).then((res) => {
      this.handleResponse(res);
    }).catch((err) => {
      helper.notify('error', err);
    });
  }

  render() {
    return (
      <section id="stage-single">
        <div id="banner">
          <div className="stage-single-head">
            <h1>Stage &#x00023; {this.state.stage.stageNumber}</h1>
            <h2>{this.state.stage.startCity}  >  {this.state.stage.endCity}</h2>
            <h2>{this.state.stage.startDay} July  - {this.state.stage.distance} km  - {this.state.stage.stageType}</h2>
          </div>
        </div>
        <div>
          <button onClick={this.prevStage} className="stage-btn">Prev Stage</button>
          {this.props.isAdmin ?
            <Link className="stage-btn" to={`/stage/edit/${this.state.stage._id}`}>Edit Stage</Link>
            : ''}
          <button onClick={this.nextStage} className="stage-btn">Next Stage</button>
        </div>
        <div id="stage-images">
          <img src={this.state.stage.stageProfile} alt="stageProfile" />
          <img src={this.state.stage.stageMap} alt="stageMap" />
        </div>
      </section>
    );
  }
}

export default StageDetails;