import React, { Component } from 'react';

const withFormHandling = (WrappedComponent) =>
  class extends Component {
    constructor(props) {
      super(props);

      // Initial state for the formData can be set though props
      this.state = this.props.initialState || {};

      this.handleFocus = this.handleFocus.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    // If fetchFuncs are passed it will iterate and execute then when component mounts
    // then the state formData will be updated and it will re-render the page
    // filling the form with the information from the response 
    // (used when form needs to be filled with data)
    componentDidMount() {
      const { helper } = this.props;
      
      if (this.props.fetchFuncs) {
        for (let i = 0; i < this.props.fetchFuncs.length; i++) {
          this.props.fetchFuncs[i](this.props.match.params.id).then((res) => {
            if (res.success) {
              if (Array.isArray(res.body)) {
                this.setState({
                  otherData: res.body
                });
              } else {
                this.setState({
                  formData: res.body
                });
              }
            } else {
              helper.notify('error', res.message);
              this.props.history.replace('/');
            }
          }).catch((err) => {
            helper.notify('error', err);
          });
        }
      }
    }

    handleFocus() {
      this.setState({
        type: 'date'
      });
    }

    // Make copy of formData object then update required property
    // finally update the state
    handleChange(e) {
      let fieldName = e.target.name;
      let fieldValue = e.target.value;
      let stateCopy = JSON.parse(JSON.stringify(this.state.formData));

      stateCopy[fieldName] = fieldValue;

      this.setState({
        formData: stateCopy
      });
    }

    // OnSubmit executes the passed in form validation func using formData form state
    // If validation passes it executes the passed in submitFunc and launches notifications
    handleFormSubmit(e) {
      const { helper } = this.props;
      
      e.preventDefault();

      let validationResult = this.props.validateFunc(this.state.formData);

      if (validationResult.success) {
        this.props.submitFunc(this.state.formData, this.props.match.params.id)
          .then((res) => {
            if (res.success) {
              helper.notify('success', res.message);

              if (this.props.match.url.indexOf('edit') !== -1) {
                this.props.history.push(this.props.match.url.replace('edit', 'details'));
              } else if (this.props.match.url.indexOf('/user/team') !== -1) {
                this.props.history.replace('/user/team/manage');
              } else {
                this.props.history.push('/');
              }
            } else {
              helper.notify('error', res.message, res.errors);
            }
          }).catch((err) => {
            helper.notify('error', err);
          });
      } else {
        helper.notify('error', validationResult.message, validationResult.errors);
      }
    }

    render() {
      return (
        <WrappedComponent
          handleChange={this.handleChange}
          handleFocus={this.handleFocus}
          handleFormSubmit={this.handleFormSubmit}
          formData={this.state.formData}
          otherData={this.state.otherData}
          type={this.state.type}
        />
      );
    }
  };

export default withFormHandling;