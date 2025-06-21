import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={`container mx-auto px-4 ${className ?? ""}`}>
      {children}
    </section>
  );
};

export default Container;
