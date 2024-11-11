import { useState } from "react";

interface Prop {
  maxLength?: number;
  children: string;
  show: boolean;
}

const ExpandableText = ({ maxLength = 100, children, show }: Prop) => {
  const [shows, setShows] = useState(show);
  return (
    <>
      {maxLength && !shows ? (
        <p>{children.substring(0, maxLength)}</p>
      ) : (
        <p>{children}</p>
      )}
      <button onClick={() => setShows(!shows)}>{shows?'Show Less':'Show All'}</button>
    </>
  );
};

export default ExpandableText;
