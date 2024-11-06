import { ReactNode } from "react";

interface Show {
  isShow: boolean;
  dismiss: () => void;
  children: ReactNode;
}

const Alert = ({ isShow, dismiss, children }: Show) => {
  return (
    <>
      {isShow && (
        <div
          className="alert alert-primary alert-dismissible fade show"
          role="alert"
        >
          {children}
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={dismiss}
          ></button>
        </div>
      )}
    </>
  );
};
export default Alert;
