import './scss/App.scss';
import Nav from './layout/nav/Nav';
import AllRoutes from './routes/AllRoutes'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function App() {
  return (
    <>
      <SkeletonTheme baseColor='#b2b2b2' highlightColor='lightgray' duration={0.5}>
      <Nav />
      <AllRoutes />
      </SkeletonTheme>
    </>
  );
}

export default App;
