import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#039BE5'
    },
    secondary: {
      main: '#E91E63'
    }
  },
});

const common = {
  main: {
    padding: 12,
    marginTop: 56,
    marginBottom: 56
  }
};

const loader = {
  progress: {
    height: window.innerHeight,
    width: window.innerWidth,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { common, loader, theme };
