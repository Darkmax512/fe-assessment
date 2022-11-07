import React from "react";
import PageLayout from "~/components/PageLayout/PageLayout";
import BookingContent from "./components/BookingContent";
import BookingHeader from "./components/BookingHeader";

type Props = {};

const BookingPage = (props: Props) => {
  return <PageLayout header={<BookingHeader />} content={<BookingContent />} />;
};

export default BookingPage;
