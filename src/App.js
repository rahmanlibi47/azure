import "./App.css";
import Navbars from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

function App() {
  return (
    <div className="App">
      <div>
        <div>
          <div>
            <div>
              <Navbars />
              <h2 cl>New Services</h2>
              <button className="btn btn-danger">Button</button>
              <button className="btn btn-success">New</button>
              <AccessibilityNewIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
