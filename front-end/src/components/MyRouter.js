import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import '../resources/style/Main.css';

import Home from './home/Home';
import HowTo from './HowTo';
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';
import StageForm from './forms/StageForm';
import Stages from './stage/Stages';
import StageDetails from './stage/StageDetails';
import TeamForm from './forms/TeamForm';
import Teams from './team/Teams';
import TeamDetails from './team/TeamDetails';
import RiderForm from './forms/RiderForm';
import RiderDetails from './rider/RiderDetails';
import MyFantasyTeam from './fantasyTeam/MyFantasyTeam';
import ManageFantasyTeam from './fantasyTeam/ManageFantasyTeam';
import ManageResult from './fantasyTeam/ManageResult';

import helperService from '../utilities/helperService';

const MyRouter = (props) => {
  const _props = props;
  const isAuth = _props.Auth.isLoggedIn();
  const isAdmin = _props.Auth.isAdmin();

  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/howto" component={HowTo} />

        <Route path="/stage/all" render={(props) =>
          <Stages
            fetchFunc={_props.Crud.getAllStages}
            {...props}
          />}
        />

        <Route path="/team/all" render={(props) =>
          <Teams
            fetchFunc={_props.Crud.getAllTeams}
            {...props}
          />}
        />

        <Route path="/team/details/:id" render={(props) =>
          <TeamDetails
            fetchFunc={_props.Crud.getSingleTeam}
            toggleFunc={_props.Crud.getTeamByNumber}
            isAdmin={isAdmin}
            {...props}
          />
        } />

        <Route path="/stage/details/:id" render={(props) =>
          <StageDetails
            fetchFunc={_props.Crud.getSingleStage}
            toggleFunc={_props.Crud.getStageByNumber}
            isAdmin={isAdmin}
            {...props}
          />
        } />

        <Route path="/rider/details/:id" render={(props) =>
          <RiderDetails
            fetchFunc={_props.Crud.getSingleRider}
            isAdmin={isAdmin}
            {...props}
          />
        } />

        <Route exact path="/user/team" render={(props) => !isAuth ? <Redirect to="/" /> :
          <MyFantasyTeam
            fetchFunc={_props.Crud.getSingleFantasyTeam}
            initialState={helperService.getFantasyTeamFormState()}
            validateFunc={helperService.validateFantasyTeamForm}
            submitFunc={_props.Crud.addFantasyTeam}
            {...props}
          />}
        />

        <Route path="/user/team/manage" render={(props) => !isAuth ? <Redirect to="/" /> :
          <ManageFantasyTeam
            getTeam={_props.Crud.getSingleFantasyTeam}
            getRiders={_props.Crud.getRiders}
            getStage={_props.Crud.getStageByDate}
            editTeam={_props.Crud.editFantasyTeam}
            {...props}
          />}
        />

        <Route path="/user/register" render={(props) => isAuth ? <Redirect to="/" /> :
          <RegisterForm
            initialState={helperService.getRegisterFormState()}
            submitFunc={_props.Auth.register}
            validateFunc={helperService.validateRegisterForm}
            {...props}
          />}
        />

        <Route path="/user/login" render={(props) => isAuth ? <Redirect to="/" /> :
          <LoginForm
            initialState={helperService.getLoginFormState()}
            submitFunc={_props.Auth.login}
            validateFunc={helperService.validateLoginForm}
            {...props}
          />}
        />

        <Route path="/user/logout" render={() => <Redirect to="/" />} />

        <Route path="/stage/add" render={(props) => !isAdmin ? <Redirect to="/" /> :
          <StageForm
            initialState={helperService.getStageFormState()}
            submitFunc={_props.Crud.addStage}
            validateFunc={helperService.validateStageForm}
            {...props}
          />}
        />

        <Route path="/stage/edit/:id" render={(props) => !isAdmin ? <Redirect to="/" /> :
          <StageForm
            initialState={helperService.getStageFormState()}
            submitFunc={_props.Crud.editStage}
            validateFunc={helperService.validateStageForm}
            fetchFuncs={[_props.Crud.getSingleStage]}
            {...props}
          />}
        />

        <Route path="/team/add" render={(props) => !isAdmin ? <Redirect to="/" /> :
          <TeamForm
            initialState={helperService.getTeamFormState()}
            submitFunc={_props.Crud.addTeam}
            validateFunc={helperService.validateTeamForm}
            {...props}
          />}
        />

        <Route path="/team/edit/:id" render={(props) => !isAdmin ? <Redirect to="/" /> :
          <TeamForm
            initialState={helperService.getTeamFormState()}
            submitFunc={_props.Crud.editTeam}
            validateFunc={helperService.validateTeamForm}
            fetchFuncs={[_props.Crud.getSingleTeam]}
            {...props}
          />}
        />

        <Route path="/rider/add" render={(props) => !isAdmin ? <Redirect to="/" /> :
          <RiderForm
            initialState={helperService.getRiderFormState()}
            submitFunc={_props.Crud.addRider}
            validateFunc={helperService.validateRiderForm}
            fetchFuncs={[_props.Crud.getAllTeams]}
            {...props}
          />}
        />

        <Route path="/rider/edit/:id" render={(props) => !isAdmin ? <Redirect to="/" /> :
          <RiderForm
            initialState={helperService.getRiderFormState()}
            submitFunc={_props.Crud.editRider}
            validateFunc={helperService.validateRiderForm}
            fetchFuncs={[_props.Crud.getAllTeams, _props.Crud.getSingleRider]}
            {...props}
          />}
        />

        <Route path="/result/manage" render={(props) => !isAdmin ? <Redirect to="/" /> :
          <ManageResult
            lockTransfers={_props.Crud.lockTransfers}
            unlockTransfers={_props.Crud.unlockTransfers}
            initialState={helperService.getStageResultFormState()}
            submitFunc={_props.Crud.submitResult}
            validateFunc={helperService.validateStageResultForm}
            fetchFuncs={[_props.Crud.getAllStages]}
            {...props}
          />
        } />
      </Switch>
    </main>
  );
};

export default MyRouter;