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

const header = {
  appBar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  typography: {
    fontFamily: 'Righteous'
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

const result = {
  goalSection: {
    paddingBottom: 12
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  infoSection: {
    paddingTop: 24,
    paddingBottom: 24
  },
  message: {
    textAlign: 'center',
    paddingBottom: 24
  },
  timeSection: {
    paddingBottom: 12
  },
  tips: {
    background: '#039BE5',
    borderRadius: 12,
    color: '#fff',
    margin: 6,
    padding: 12
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

export { common, header, loader, progress, result, targetSet, theme };
