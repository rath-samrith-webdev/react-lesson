import { useState } from "react";

interface Prop {
  maxLength?: number;
  children: string;
  show: boolean;
}

const ExpandableText = ({ maxLength = 100, children, show }: Prop) => {
  const [shows, setShows] = useState(show);
  if (children.length <= maxLength) return <p>{children}</p>;
  const text = shows ? children : children.substring(0, maxLength);
  return (
    <p>
      {text}
      <button onClick={() => setShows(!shows)}>
        {shows ? "show less" : "show more"}
      </button>
    </p>
  );
};

export default ExpandableText;
