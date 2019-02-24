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

const MyRouter = (props) => {
  const { Crud, Auth, Helper } = props;
  const isAuth = Auth.isLoggedIn();
  const isAdmin = Auth.isAdmin();

  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/howto" component={HowTo} />

        <Route path="/stage/all" render={(props) =>
          <Stages
            helper={Helper}
            fetchFunc={Crud.getAllStages}
            {...props}
          />}
        />

        <Route path="/team/all" render={(props) =>
          <Teams
            helper={Helper}
            fetchFunc={Crud.getAllTeams}
            {...props}
          />}
        />

        <Route path="/team/details/:id" render={(props) =>
          <TeamDetails
            helper={Helper}
            fetchFunc={Crud.getSingleTeam}
            toggleFunc={Crud.getTeamByNumber}
            isAdmin={isAdmin}
            {...props}
          />
        } />

        <Route path="/stage/details/:id" render={(props) =>
          <StageDetails
            helper={Helper}
            fetchFunc={Crud.getSingleStage}
            toggleFunc={Crud.getStageByNumber}
            isAdmin={isAdmin}
            {...props}
          />
        } />

        <Route path="/rider/details/:id" render={(props) =>
          <RiderDetails
            helper={Helper}
            fetchFunc={Crud.getSingleRider}
            isAdmin={isAdmin}
            {...props}
          />
        } />

        <Route exact path="/user/team" render={(props) => !isAuth ? <Redirect to="/" /> :
          <MyFantasyTeam
            helper={Helper}
            fetchFunc={Crud.getSingleFantasyTeam}
            initialState={Helper.getFantasyTeamFormState()}
            validateFunc={Helper.validateFantasyTeamForm}
            submitFunc={Crud.addFantasyTeam}
            {...props}
          />}
        />

        <Route path="/user/team/manage" render={(props) => !isAuth ? <Redirect to="/" /> :
          <ManageFantasyTeam
            helper={Helper}
            getTeam={Crud.getSingleFantasyTeam}
            getRiders={Crud.getRiders}
            getStage={Crud.getStageByDate}
            editTeam={Crud.editFantasyTeam}
            {...props}
          />}
        />

        <Route path="/user/register" render={(props) => isAuth ? <Redirect to="/" /> :
          <RegisterForm
            helper={Helper}
            initialState={Helper.getRegisterFormState()}
            submitFunc={Auth.register}
            validateFunc={Helper.validateRegisterForm}
            {...props}
          />}
        />

        <Route path="/user/login" render={(props) => isAuth ? <Redirect to="/" /> :
          <LoginForm
            helper={Helper}
            initialState={Helper.getLoginFormState()}
            submitFunc={Auth.login}
            validateFunc={Helper.validateLoginForm}
            {...props}
          />}
        />

        <Route path="/user/logout" render={() => <Redirect to="/" />} />

        <Route path="/stage/add" render={(props) => !isAdmin ? <Redirect to="/" /> :
          <StageForm
            helper={Helper}
            initialState={Helper.getStageFormState()}
            submitFunc={Crud.addStage}
            validateFunc={Helper.validateStageForm}
            {...props}
          />}
        />

        <Route path="/stage/edit/:id" render={(props) => !isAdmin ? <Redirect to="/" /> :
          <StageForm
            helper={Helper}
            initialState={Helper.getStageFormState()}
            submitFunc={Crud.editStage}
            validateFunc={Helper.validateStageForm}
            fetchFuncs={[Crud.getSingleStage]}
            {...props}
          />}
        />

        <Route path="/team/add" render={(props) => !isAdmin ? <Redirect to="/" /> :
          <TeamForm
            helper={Helper}
            initialState={Helper.getTeamFormState()}
            submitFunc={Crud.addTeam}
            validateFunc={Helper.validateTeamForm}
            {...props}
          />}
        />

        <Route path="/team/edit/:id" render={(props) => !isAdmin ? <Redirect to="/" /> :
          <TeamForm
            helper={Helper}
            initialState={Helper.getTeamFormState()}
            submitFunc={Crud.editTeam}
            validateFunc={Helper.validateTeamForm}
            fetchFuncs={[Crud.getSingleTeam]}
            {...props}
          />}
        />

        <Route path="/rider/add" render={(props) => !isAdmin ? <Redirect to="/" /> :
          <RiderForm
            helper={Helper}
            initialState={Helper.getRiderFormState()}
            submitFunc={Crud.addRider}
            validateFunc={Helper.validateRiderForm}
            fetchFuncs={[Crud.getAllTeams]}
            {...props}
          />}
        />

        <Route path="/rider/edit/:id" render={(props) => !isAdmin ? <Redirect to="/" /> :
          <RiderForm
            helper={Helper}
            initialState={Helper.getRiderFormState()}
            submitFunc={Crud.editRider}
            validateFunc={Helper.validateRiderForm}
            fetchFuncs={[Crud.getAllTeams, Crud.getSingleRider]}
            {...props}
          />}
        />

        <Route path="/result/manage" render={(props) => !isAdmin ? <Redirect to="/" /> :
          <ManageResult
            helper={Helper}
            lockTransfers={Crud.lockTransfers}
            unlockTransfers={Crud.unlockTransfers}
            initialState={Helper.getStageResultFormState()}
            submitFunc={Crud.submitResult}
            validateFunc={Helper.validateStageResultForm}
            fetchFuncs={[Crud.getAllStages]}
            {...props}
          />
        } />
      </Switch>
    </main>
  );
};

export default MyRouter;