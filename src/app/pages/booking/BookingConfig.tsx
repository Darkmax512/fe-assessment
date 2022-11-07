import { PagesRouteConfig } from "~/@main/types/Config-Types";
import BookingPage from "./BookingPage";

const BookingConfig: PagesRouteConfig = {
  routes: [
    {
      path: "booking",
      element: <BookingPage />,
    },
  ],
};

export default BookingConfig;
