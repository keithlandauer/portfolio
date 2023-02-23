import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase"
import { Review } from "./Review";
import { ReviewForm } from "./ReviewForm";

export interface reviewInterface {
  id: string;
  user: string;
  stars: number;
  text: string;
}

export const Reviews = () => {
  const [reviewList, setReviewList] = useState<reviewInterface[] | null>(null);
  const reviewRef = collection(db, "review");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  /**
   *  Fetch Reviews
   */
  const getReviews = async () => {
    try {
      const data = await getDocs(reviewRef);
      setReviewList(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as reviewInterface[]
      );
    } catch (err) {
      console.error(err);
    }
  };
  /**
   * Rerender reviews when new one submitted.
   */
  useEffect(() => {
    getReviews();
  }, [formSubmitted]);

  return (
    <div className="mt-24 h-screen bg-gray-800" id="reviews">
      <h2
        id="about"
        className="mx-16 font-mono text-4xl font-bold text-green-300 md:mx-24"
      >
        Reviews
      </h2>
      <ReviewForm submission={formSubmitted} setSubmission={setFormSubmitted} />
      <div className="bg-gray-800">
        {reviewList?.map((rev) => (
          <Review key={rev.id} review={rev} />
        ))}
      </div>
    </div>
  );
};
