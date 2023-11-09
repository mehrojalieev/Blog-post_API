import './scss/App.scss';
import Nav from './layout/nav/Nav';
import AllRoutes from './routes/AllRoutes'
function App() {
  return (
    <div className="App">
      <Nav />
      <AllRoutes />
    </div>
  );
}

export default App;
