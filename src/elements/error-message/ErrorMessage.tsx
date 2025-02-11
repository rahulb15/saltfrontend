import React from "react";

interface ErrorType {
  message: string;
}

const ErrorMessage = ({ message }: ErrorType) => {
  return (
    <>
      <span
        className="error-message"
        style={{
          color: "red",
          fontSize: "12px",
          display: "block",
          marginTop: "5px",
        }}
      >
        {message}
      </span>
    </>
  );
};

export default ErrorMessage;
