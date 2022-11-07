import BrowserRouter from "~/@main/core/BrowserRouter";
import Layout from "./layout/Layout";
import withAppProviders from "./withAppProviders";

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default withAppProviders(App)();
