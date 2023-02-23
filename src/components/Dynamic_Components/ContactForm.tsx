import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import emailjs from "emailjs-com";
import { useEffect, useState } from "react";

interface FormData {
  name: string;
  email: string;
  text: string;
}
interface Props {
  modal: boolean;
  setModal: (modal: boolean) => void;
}

export const ContactForm = (props: Props) => {
  const { modal, setModal } = props;
  const [localData, setLocalData] = useState<FormData>();

  const schema = yup.object().shape({
    name: yup.string().required("You must have a name."),
    email: yup.string().email().required("Please enter valid email."),
    text: yup.string().required("Email must have body text."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onCreateContact = (data: FormData) => {
    try {
      setLocalData(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (localData) {
      const templateParams = {
        name: localData.name,
        email: localData.email,
        text: localData.text,
      };
      emailjs.send(
        "gmail",
        "template_10p6jab",
        templateParams,
        "Bd_51wprcUz30Js_s"
      );
    }
    reset();
  }, [isSubmitSuccessful]);

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-30 backdrop-blur-sm">
      <div className="flex font-mono font-bold">
        <div className="mx-auto rounded bg-gray-500 bg-opacity-90 md:mt-10">
          <button
            type="button"
            className="float-right rounded-md p-4 text-green-300 delay-100 hover:text-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() => setModal(false)}
          >
            <span className="sr-only">Close</span>
            <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="rounded p-16">
            <h1 className="mb-2 text-center text-4xl text-green-300 md:mb-10">
              Contact
            </h1>
            <form
              className="sm:w-52 md:w-72 lg:w-96"
              onSubmit={handleSubmit(onCreateContact)}
            >
              <input
                placeholder="Name..."
                className="form-control m-0 block w-full rounded border border-gray-700 bg-gray-700 bg-clip-padding p-3 text-base text-gray-200 transition ease-in-out"
                {...register("name")}
              />

              {errors.name?.message && (
                <div className="relative my-4 rounded border-2 border-red-400 bg-red-200 px-4 py-3 text-red-700">
                  <p className="block sm:inline">{errors.name?.message}</p>
                </div>
              )}

              <input
                placeholder="Email..."
                className="form-control m-0 my-3 block w-full rounded border border-gray-700 bg-gray-700 bg-clip-padding p-3 text-base text-gray-200 transition ease-in-out"
                {...register("email")}
              />

              {errors.email?.message && (
                <div className="relative my-4 rounded border-2 border-red-400 bg-red-200 px-4 py-3 text-red-700">
                  <p className="block sm:inline">{errors.email?.message}</p>
                </div>
              )}

              <textarea
                placeholder="Text..."
                className="form-control m-0 block h-48 w-full resize-none rounded border border-gray-700 bg-gray-700 bg-clip-padding px-3 py-1.5 font-mono text-base text-gray-200 transition ease-in-out"
                {...register("text")}
              />

              {errors.text?.message && (
                <div className="relative my-4 rounded border-2 border-red-400 bg-red-200 px-4 py-3 text-red-700">
                  <p className="block sm:inline">{errors.text?.message}</p>
                </div>
              )}
              <button
                type="submit"
                className="form-control m-0 my-3 block w-1/2 rounded border border-green-300 bg-green-300 bg-clip-padding p-1 text-base text-gray-700 transition delay-100 duration-300 ease-in-out hover:cursor-pointer hover:bg-gray-50 md:p-3"
              >
                {" "}
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
