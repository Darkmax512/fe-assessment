import Provider from "react-redux/es/components/Provider";
import store from "./store";
import { FC } from "react";

const withAppProviders = (Component: FC) => (props?: any) => {
  const WrapperComponent = () => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
  return WrapperComponent;
};

export default withAppProviders;
