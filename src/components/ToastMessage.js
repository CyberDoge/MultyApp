import React from "react";

const ToastMessage = ({ children, close }) => {
  return (
    <div className="flex alight-center bg-green-400 fixed translate-x-1/2 md:w-96 w-11/12 right-1/2 p-4 bottom-10  rounded-md">
      <h2 className="flex-1 text-center">{children}</h2>
      <button onClick={close} className="bg-blue-100 rounded-full flex-0">
        {" "}
        X{" "}
      </button>
    </div>
  );
};

export default ToastMessage;
