import { ReactNode } from "react";

/**
 * @interface ChildrenProps
 * @children is support passing an elements as children to the components
 * @all_elements is the type of @ReactNode
 */
interface ChildrenProps {
  children: ReactNode;
}

const Alert = ({ children }: ChildrenProps) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
