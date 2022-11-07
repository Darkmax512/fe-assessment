import PageLayout from "~/components/PageLayout/PageLayout";
import DashboardContent from "./components/DashboardContent";

type Props = {};

const DashboardPage = (props: Props) => {
  return <PageLayout content={<DashboardContent />} />;
};

export default DashboardPage;
