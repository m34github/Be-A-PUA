import { connect } from 'react-redux';

import AuthedComponent from '../components/Authed.jsx';
import LoginComponent from '../components/Login.jsx';
import HomeComponent from '../components/Home.jsx';
import SideMenuComponent from '../components/SideMenu.jsx';
import UserComponent from '../components/User.jsx';
import MemoComponent from '../components/Memo.jsx';
import { action } from '../actions';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  checkAuth: () => {
    dispatch(action.checkAuth());
  },
  getUserInfo: () => {
    dispatch(action.getUserInfo());
  },
  readMemo: () => {
    dispatch(action.readMemo());
  },
  tryLogin: (email, password) => {
    dispatch(action.tryLogin(email, password));
  },
  tryLogout: () => {
    dispatch(action.tryLogout());
  },
  writeMemo: (uid, memo) => {
    dispatch(action.writeMemo(uid, memo));
  }
});

export const Authed = connect(mapStateToProps, mapDispatchToProps)(AuthedComponent);
export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
export const SideMenu = connect(mapStateToProps, mapDispatchToProps)(SideMenuComponent);
export const User = connect(mapStateToProps, mapDispatchToProps)(UserComponent);
export const Memo = connect(mapStateToProps, mapDispatchToProps)(MemoComponent);
