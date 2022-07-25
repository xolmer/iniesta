import { useState, useEffect } from "react";
import { MdFavorite } from "react-icons/md";

import useAuthStore from "../store/authStore";

interface IProps {
  handleLike: () => void;
  handleDislike: () => void;
  likes: any[];
}

const LikeButton = ({ likes, handleLike, handleDislike }: IProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const { userProfile }: any = useAuthStore();

  const filterLikes = likes?.filter((item) => item._ref === userProfile?._id);

  useEffect(() => {
    if (filterLikes?.length > 0) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [filterLikes, likes]);

  return (
    <div className="flex gap-6">
      <div className="mt-4 flex flex-col justify-center items-center cursor-pointer">
        {isLiked ? (
          <div onClick={handleDislike} className="bg-primary rounded-full p-2 md:p-4 text-[#00b5b2]">
            <MdFavorite className="text-lg md:text-2xl" />
          </div>
        ) : (
          <div onClick={handleLike} className="bg-primary rounded-full p-2 md:p-4 ">
            <MdFavorite className="text-lg md:text-2xl" />
          </div>
        )}
        <p className="text-md font-semibold">{likes?.length || 0}</p>
      </div>
    </div>
  );
};

export default LikeButton;
