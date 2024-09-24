import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "./App.css";

import routes from "./routes/routes";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <Toaster />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
