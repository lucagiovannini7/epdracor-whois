import { Link, Outlet, Routes, Route, useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Layout, { AbsoluteBox } from './Layout';
import PlaysTable from './PlaysTable';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="plays" element={<Plays />}>
          <Route path=":playId" element={<PlayPane />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

function Home() {
  return (
    <Box textAlign="center" pt={3}>
      <Button component={Link} to="plays" variant="outlined">
        Go to plays
      </Button>
    </Box>
  );
}

function Plays() {
  return (
    <>
      <AbsoluteBox sx={{ overflow: 'auto' }}>
        <Container maxWidth={false}>
          <PlaysTable />
        </Container>
      </AbsoluteBox>
      <Outlet />
    </>
  );
}

function PlayPane() {
  const { playId } = useParams();
  return (
    <AbsoluteBox sx={{ backgroundColor: 'white' }}>
      <Container maxWidth={false}>
        <IconButton
          component={Link}
          to=".."
          sx={{ position: 'absolute', top: 0, right: 10 }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h1">Play {playId}</Typography>
      </Container>
    </AbsoluteBox>
  );
}
