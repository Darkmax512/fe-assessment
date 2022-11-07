import { useTimeout } from "~/@main/hooks";
import { useState } from "react";

type Props = {
  delay?: any;
};

function AppLoading({ delay = false, ...props }: Props) {
  const [showLoading, setShowLoading] = useState(!delay);
  useTimeout(() => {
    setShowLoading(true);
  }, delay);

  return (
    <div>
      <p
        className="text-13 sm:text-20 font-medium -mb-16"
        color="text.secondary"
      >
        Loading
      </p>
    </div>
  );
}

export default AppLoading;
