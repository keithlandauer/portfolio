import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { AiFillStar } from "react-icons/ai";

interface FormData {
  user: string;
  text: string;
  stars: number;
}
interface Props {
  submission: boolean;
  setSubmission: (submission: boolean) => void;
}
/**
 *
 * @param props for letting parent(Review) know that form has been submitted
 */
export const ReviewForm = (props: Props) => {
  const { submission, setSubmission } = props;
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  const schema = yup.object().shape({
    user: yup.string().required("You must have a name."),
    text: yup.string().required("Say something..."),
    stars: yup
      .number()
      .required()
      .typeError("Choose between 1 and 5 stars (ideally 5...)"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const reviewRefs = collection(db, "review");

  /**
   *
   * @param data form interace
   */
  const onCreateReview = async (data: FormData) => {
    try {
      await addDoc(reviewRefs, {
        ...data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  /**
   * clear form when submission is successful, set local states back to default, use prop function to update parent state
   */
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setRating(0);
      setSubmission(true);
    }
  }, [isSubmitSuccessful]);

  return (
    <div className="mx-16 mt-14 mb-6 block rounded bg-gray-700 p-6 font-mono font-bold md:mx-24">
      <form onSubmit={handleSubmit(onCreateReview)}>
        <div className="form-group my-6">
          <input
            placeholder="Name..."
            className="form-control m-0 block w-full  rounded border border-gray-600 bg-gray-700 bg-clip-padding px-3 py-1.5 font-mono text-base text-gray-200 transition ease-in-out md:w-1/2"
            {...register("user")}
          />
          {errors.user?.message && (
            <div className="relative my-4 rounded border-2 border-red-400 bg-red-200 px-4 py-3 text-red-700">
              <p className="block sm:inline">{errors.user?.message}</p>
            </div>
          )}
          <textarea
            placeholder="Review..."
            className="form-control m-0 block w-full rounded border border-gray-600 bg-gray-700 bg-clip-padding px-3 py-1.5 font-mono text-base text-gray-200 transition ease-in-out"
            {...register("text")}
          />
          {errors.text?.message && (
            <div className="relative my-4 rounded border-2 border-red-400 bg-red-200 px-4 py-3 text-red-700">
              <p className="block sm:inline">{errors.text?.message}</p>
            </div>
          )}
          <div className="my-6 flex">
            {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1;
              return (
                <div key={index}>
                  <label>
                    <input
                      type="radio"
                      className="hidden"
                      value={ratingValue}
                      key={index}
                      {...register("stars")}
                    />
                    <AiFillStar
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(0)}
                      onClick={() => setRating(ratingValue)}
                      className={
                        ratingValue <= (hover || rating)
                          ? "h-8 w-8 cursor-pointer text-green-300 md:h-10 md:w-10"
                          : "h-8 w-8 cursor-pointer text-gray-500 md:h-10 md:w-10"
                      }
                    />
                  </label>
                </div>
              );
            })}

            <button
              type="submit"
              className="md:text-md rounded bg-green-300 text-xs text-gray-800 transition delay-100 duration-300 ease-in-out hover:bg-gray-200 md:mx-6 md:hover:scale-125 "
            >
              <span className="mx-2 p-2 md:p-6">Submit</span>
            </button>
          </div>
          {errors.stars?.message && (
            <div className="relative my-4 rounded border-2 border-red-400 bg-red-200 px-4 py-3 text-red-700">
              <p className="block sm:inline">{errors.stars?.message}</p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
