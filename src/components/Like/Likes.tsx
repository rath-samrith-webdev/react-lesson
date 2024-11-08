import { useState } from "react";
import { BsHeartFill, BsHeart } from "react-icons/bs";

interface LikeProp {
  isClicked: boolean;
}
const Like = ({ isClicked }: LikeProp) => {
  const [liked, setLiked] = useState(isClicked);
  return (
    <>
      {liked ? (
        <BsHeartFill onClick={() => setLiked(isClicked)} />
      ) : (
        <BsHeart onClick={() => setLiked(!isClicked)} />
      )}
    </>
  );
};
export default Like;
