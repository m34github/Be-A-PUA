import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E91E63'
    },
    secondary: {
      main: '#039BE5'
    }
  },
});

const common = {
  footer: {
    position: 'fixed',
    bottom: 0,
    width: '100%'
  },
  main: {
    padding: 12,
    marginTop: 56,
    marginBottom: 36
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

const progress = {
  goal: {
    height: 32
  },
  goalSection: {
    paddingBottom: 12
  },
  icon: {
    fontSize: 64
  },
  time: {
    height: 16
  },
  timeSection: {
    paddingBottom: 12
  },
  linearSection: {
    paddingTop: 12,
    paddingBottom: 12
  }
};

const targetSet = {
  paperSection: {
    paddingTop: 24
  },
  sliderSection: {
    paddingTop: 24
  }
};

export { common, loader, theme, progress, targetSet };
