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

import AuthService from '../utilities/AuthService';
import CrudService from '../utilities/CrudService';
import helperService from '../utilities/helperService';

const Auth = new AuthService();
const Crud = new CrudService();

const MyRouter = () => {
  const isAuth = Auth.isLoggedIn();
  const isAdmin = Auth.isAdmin();

  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/howto" component={HowTo} />

        <Route path="/stage/all" render={(props) =>
          <Stages
            fetchFunc={Crud.getAllStages}
            {...props}
          />}
        />

        <Route path="/team/all" render={(props) =>
          <Teams
            fetchFunc={Crud.getAllTeams}
            {...props}
          />}
        />

        <Route path="/team/details/:id" render={(props) =>
          <TeamDetails
            fetchFunc={Crud.getSingleTeam}
            toggleFunc={Crud.getTeamByNumber}
            isAdmin={isAdmin}
            {...props}
          />
        } />

        <Route path="/stage/details/:id" render={(props) =>
          <StageDetails
            fetchFunc={Crud.getSingleStage}
            toggleFunc={Crud.getStageByNumber}
            isAdmin={isAdmin}
            {...props}
          />
        } />

        <Route path="/rider/details/:id" render={(props) =>
          <RiderDetails
            fetchFunc={Crud.getSingleRider}
            isAdmin={isAdmin}
            {...props}
          />
        } />

        <Route exact path="/user/team" render={(props) => !isAuth ? <Redirect to="/" /> :
          <MyFantasyTeam
            fetchFunc={Crud.getSingleFantasyTeam}
            initialState={helperService.getFantasyTeamFormState()}
            validateFunc={helperService.validateFantasyTeamForm}
            submitFunc={Crud.addFantasyTeam}
            {...props}
          />}
        />

        <Route path="/user/team/manage" render={(props) => !isAuth ? <Redirect to="/" /> :
          <ManageFantasyTeam
            getTeam={Crud.getSingleFantasyTeam}
            getRiders={Crud.getRiders}
            getStage={Crud.getStageByDate}
            editTeam={Crud.editFantasyTeam}
            {...props}
          />}
        />

        <Route path="/user/register" render={(props) => isAuth ? <Redirect to="/" /> :
          <RegisterForm
            initialState={helperService.getRegisterFormState()}
            submitFunc={Auth.register}
            validateFunc={helperService.validateRegisterForm}
            {...props}
          />}
        />

        <Route path="/user/login" render={(props) => isAuth ? <Redirect to="/" /> :
          <LoginForm
            initialState={helperService.getLoginFormState()}
            submitFunc={Auth.login}
            validateFunc={helperService.validateLoginForm}
            {...props}
          />}
        />

        <Route path="/user/logout" render={() => <Redirect to="/" />} />

        <Route path="/stage/add" render={(props) => !isAdmin ? <Redirect to="/" /> :
          <StageForm
            initialState={helperService.getStageFormState()}
            submitFunc={Crud.addStage}
            validateFunc={helperService.validateStageForm}
            {...props}
          />}
        />

        <Route path="/stage/edit/:id" render={(props) => !isAdmin ? <Redirect to="/" /> :
          <StageForm
            initialState={helperService.getStageFormState()}
            submitFunc={Crud.editStage}
            validateFunc={helperService.validateStageForm}
            fetchFuncs={[Crud.getSingleStage]}
            {...props}
          />}
        />

        <Route path="/team/add" render={(props) => !isAdmin ? <Redirect to="/" /> :
          <TeamForm
            initialState={helperService.getTeamFormState()}
            submitFunc={Crud.addTeam}
            validateFunc={helperService.validateTeamForm}
            {...props}
          />}
        />

        <Route path="/team/edit/:id" render={(props) => !isAdmin ? <Redirect to="/" /> :
          <TeamForm
            initialState={helperService.getTeamFormState()}
            submitFunc={Crud.editTeam}
            validateFunc={helperService.validateTeamForm}
            fetchFuncs={[Crud.getSingleTeam]}
            {...props}
          />}
        />

        <Route path="/rider/add" render={(props) => !isAdmin ? <Redirect to="/" /> :
          <RiderForm
            initialState={helperService.getRiderFormState()}
            submitFunc={Crud.addRider}
            validateFunc={helperService.validateRiderForm}
            fetchFuncs={[Crud.getAllTeams]}
            {...props}
          />}
        />

        <Route path="/rider/edit/:id" render={(props) => !isAdmin ? <Redirect to="/" /> :
          <RiderForm
            initialState={helperService.getRiderFormState()}
            submitFunc={Crud.editRider}
            validateFunc={helperService.validateRiderForm}
            fetchFuncs={[Crud.getAllTeams, Crud.getSingleRider]}
            {...props}
          />}
        />

        <Route path="/result/manage" render={(props) => !isAdmin ? <Redirect to="/" /> :
          <ManageResult
            lockTransfers={Crud.lockTransfers}
            unlockTransfers={Crud.unlockTransfers}
            initialState={helperService.getStageResultFormState()}
            submitFunc={Crud.submitResult}
            validateFunc={helperService.validateStageResultForm}
            fetchFuncs={[Crud.getAllStages]}
            {...props}
          />
        } />
      </Switch>
    </main>
  );
};

export default MyRouter;