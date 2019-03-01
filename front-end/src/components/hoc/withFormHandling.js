import React, { useState, useEffect } from 'react';

const withFormHandling = (WrappedComponent) => {
  const Content = (props) => {
    const [state, setState] = useState(props.initialState || {});

    /**
     * If fetchFuncs are passed it will iterate and execute then when component mounts
     * then the state formData will be updated and it will re-render the page
     * filling the form with the information from the response 
     * (used when form needs to be filled with data)
     */
    useEffect(() => {
      const { helper, fetchFuncs, match, history } = props;

      if (fetchFuncs) {
        for (let i = 0; i < fetchFuncs.length; i++) {
          fetchFuncs[i](match.params.id).then((res) => {
            if (res.success) {
              if (Array.isArray(res.body)) {
                setState({ ...state, otherData: res.body });
              } else {
                setState({ ...state, formData: res.body });
              }
            } else {
              helper.notify('error', res.message);
              history.replace('/');
            }
          }).catch(err => helper.notify('error', err));
        }
      }
    }, []);

    const handleFocus = () => {
      setState({ ...state, type: 'date' });
    };

    /**
     * Make copy of formData object then update required property
     * finally update the state
     * 
     * @param {SynteticEvent} e
     */
    const handleChange = (e) => {
      const fieldName = e.target.name;
      const fieldValue = e.target.value;
      const stateCopy = JSON.parse(JSON.stringify(state.formData));

      stateCopy[fieldName] = fieldValue;

      setState({ ...state, formData: stateCopy });
    };

    /**
     * OnSubmit executes the passed in form validation func using formData form state
     * If validation passes it executes the passed in submitFunc and launches notifications
     * 
     * @param {SynteticEvent} e
     */
    const handleFormSubmit = (e) => {
      const { helper, submitFunc, match, history } = props;

      e.preventDefault();

      const validationResult = props.validateFunc(state.formData);

      if (validationResult.success) {
        submitFunc(state.formData, match.params.id)
          .then((res) => {
            if (res.success) {
              helper.notify('success', res.message);

              if (match.url.indexOf('edit') !== -1) {
                history.push(match.url.replace('edit', 'details'));
              } else if (match.url.indexOf('/user/team') !== -1) {
                history.replace('/user/team/manage');
              } else {
                history.push('/');
              }
            } else {
              helper.notify('error', res.message, res.errors);
            }
          })
          .catch(err => helper.notify('error', err));
      } else {
        helper.notify('error', validationResult.message, validationResult.errors);
      }
    };

    return (
      <WrappedComponent
        handleChange={handleChange}
        handleFocus={handleFocus}
        handleFormSubmit={handleFormSubmit}
        formData={state.formData}
        otherData={state.otherData}
        type={state.type}
      />
    );
  };

  return Content;
};

export default withFormHandling;