import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import "./index.css";

//  React TS Context Provider
import { MaterialUIControllerProvider } from "context";
import DataProvider from "context/DataContext";

ReactDOM.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </MaterialUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
