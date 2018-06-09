import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Home from './containers/Home';
import TargetSet from './components/TargetSet.jsx';
import Progress from './components/Progress.jsx';
import Result from './components/Result.jsx';
import store from './modules';
import { theme } from './style';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <article>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/set" component={TargetSet} />
                <Route exact path="/progress" component={Progress} />
                <Route exact path="/result" component={Result} />
                <Redirect to="/" />
              </Switch>
            </Router>
          </article>
        </MuiThemeProvider>
      </Provider>
    );
  }
}
