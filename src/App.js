import { BrowserRouter as Router } from 'react-router-dom';

import Routing from './routing/Routing';
import './App.css';

const styles = {
  display: "flex",
  backgroundColor: "#1A3309",
  color: "#CDD1C4",
  fontSize: '32px',
  fontFamily: "Open Sans",
  flexDirection: "column",
  alignContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  justifyContent: "space-between",
}

function App() {
  return (
    <div style={styles}>
      <Router>
        <Routing />
      </Router>
    </div>
  );
}

export default App;
