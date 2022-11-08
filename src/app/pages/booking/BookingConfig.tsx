import { PagesRouteConfig } from "~/@main/types/Config-Types";
import BookingPage from "./BookingPage";

//Every Page Configs This one could take more like mamin layout setting for this page "not using it here"
//routing like this is full ready for auth and setting system.

const BookingConfig: PagesRouteConfig = {
  routes: [
    {
      path: "booking",
      element: <BookingPage />,
    },
  ],
};

export default BookingConfig;
