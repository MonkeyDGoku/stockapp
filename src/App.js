import './App.css';
import Navbar from './layout/navbar/Navbar';
import Dashboard from './views/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Stock Dashboar
      */}
      <section>

        <Dashboard />
      </section>
    </div>
  );
}

export default App;
