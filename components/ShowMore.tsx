"use client";

import { ShowMoreProps } from "@/types";
import CustomButton from "./CustomeButton";

const ShowMore: React.FC<ShowMoreProps> = ({ pageNumber, isNext, setLimit }) => {
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1 ) * 10;
    setLimit(newLimit);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          text="Show more"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
