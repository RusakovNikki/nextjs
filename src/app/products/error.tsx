"use client";

interface IErrorProps {
  error: Error;
}

const Error = (props: IErrorProps) => {
  const { error } = props;
  return <div>Error: ${JSON.stringify(error)}</div>;
};

export default Error;
