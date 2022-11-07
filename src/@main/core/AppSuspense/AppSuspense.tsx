import React, { PropsWithChildren, Suspense } from "react";
import AppLoading from "../AppLoading";

type Props = {
  loadingProps?: object;
};

const AppSuspense = ({
  loadingProps = { delay: 0 },
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <Suspense fallback={<AppLoading {...loadingProps} />}>
      {props.children}
    </Suspense>
  );
};

export default AppSuspense;
