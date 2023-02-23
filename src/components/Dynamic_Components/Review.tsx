import { useEffect, useState } from "react";
import { reviewInterface as iReview } from "./Reviews";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Animate } from "../Avg_Components/Animate";
interface Props {
  review: iReview;
}

export const Review = (props: Props) => {
  const { review } = props;
  const [blackStars, setBlackStars] = useState<number>(0);

  /**
   * set number of unfilled stars
   */
  const calculateBlackStars = () => {
    setBlackStars(5 - review.stars);
  };
  /**
   *
   * @returns filled stars up to rating of review and fills the rest as outline stars
   */
  const outputStars = () => {
    return (
      <div className="flex flex-row px-6 py-2 md:px-8">
        {[...Array(review.stars)].map((star, i) => (
          <div key={i}>
            <span className="text-green-300">
              <AiFillStar className="h-8 w-8 md:h-10 md:w-10" />
            </span>
          </div>
        ))}
        {[...Array(blackStars)].map((star, j) => (
          <div key={j}>
            <span className="text-green-300">
              <AiOutlineStar className="h-8 w-8 md:h-10 md:w-10" />
            </span>
          </div>
        ))}
      </div>
    );
  };
  /**
   * calculate unfilled stars when rendered
   */
  useEffect(() => {
    calculateBlackStars();
  }, []);

  return (
    <Animate>
      <div className="flex flex-col py-8 font-mono">
        <div className="mx-16 rounded-md bg-gray-700 md:mx-24">
          <p className="text-md px-6 py-4 font-bold text-green-300 md:px-8 md:text-lg">
            {review.user}
          </p>
          <p className="md:text-md px-6 py-2 text-sm text-gray-300 md:px-8">
            {review.text}
          </p>
          {outputStars()}
        </div>
      </div>
    </Animate>
  );
};
