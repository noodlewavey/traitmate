import logo from './logo.svg';
import CenteredBox from './CenteredBox';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './index.css';
import ProfileTemplate from './ProfileTemplate';
import {CssBaseline} from '@mui/material';
import './styles.css';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Delete } from '@mui/icons-material';
import Box from '@mui/material/Box';

const theme = createTheme({
  palette: {
    background: {
      default: '#dfd3bc',
    },
    text: {
      primary: 'black',
    },

    accent: {
      main: '#002fff',
      accent1: '#0018bc',
      accent2: '#0a2381',
      accent3: '#00114d',
      accent4: 'black',
    }
  },
  typography: {
    fontFamily: 'IBM Plex Mono, Display Regular, Display Italic, Display Light Italic, Display Bold Italic, Display Bold, monospace',
    body1: {
      fontFamily: 'IBM Plex Mono, monospace',
      fontWeight: 400,
    },
    body2: {
      fontFamily: 'IBM Plex Mono, monospace',
      fontWeight: 300,
    },
    h1: {
      fontFamily:'DisplayLightItalic, serif',
    },
    h2:{
      fontFamily: 'DisplayItalic, serif',
    },
    button: {
      fontFamily: 'IBM Plex Mono, monospace',
      fontWeight: 600,
    }
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ProfileTemplate />
      <Box sx={{display: 'flex', justifyContent:'space-between', alignItems: 'center', width: '100%', padding: '0 1rem'}}>
      <IconButton aria-label="dislike">
        <DeleteForeverIcon />
      </IconButton>
      <IconButton aria-label="like">
        <FavoriteBorderIcon/>
      </IconButton>
      </Box>
    </ThemeProvider>
  );
}

export default App;
