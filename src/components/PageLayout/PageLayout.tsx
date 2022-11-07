import React from "react";

type Props = {
  header?: JSX.Element;
  content?: JSX.Element;
};

const PageLayout = ({ header, content }: Props) => {
  return (
    <section className="w-full h-full flex flex-col p-4 gap-4">
      <div>{header}</div>
      <div>{content}</div>
    </section>
  );
};

export default PageLayout;
