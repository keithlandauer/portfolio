export const About = () => {
  return (
    <div className="font-mono font-bold" id="about">
      <h2 className="mx-16 mb-8 text-4xl text-green-300 md:mx-24">About Me</h2>
      <div className="ml-16 flex flex-row items-end pr-4 md:mx-24">
        <div className="py-6">
          <p className="text-md my-auto font-medium text-gray-300 md:text-xl">
            I went back to school after completing six years in the military.
            Recently graduated, I have my Bachelor's in Computer Science from
            Old Dominion University. While completing my degree, I was a tutor
            for the Computer Science Department helping students with math and
            various CS concepts &#40;C++ Programming, Python, and
            Algorithms/Data Structures&#41;. <br />
            <br /> My interest in web development began while completing a
            senior capstone project. From there, I've been continously striving
            to learn new technologies including front-end frameworks, REST
            API's, SQL, and more! <br />
            <br /> Some technologies and tools I've worked with include: <br />
            <br />
          </p>
          <div className="flex flex-row text-xs font-medium md:text-xl">
            <ul className="whitespace-nowrap text-green-300">
              <li>&#8226; JavaScript</li>
              <li>&#8226; Python</li>
              <li>&#8226; C++</li>
            </ul>
            <ul className="whitespace-nowrap  px-2 text-green-300">
              <li>&#8226; Vue.js</li>
              <li>&#8226; React.js</li>
              <li>&#8226; Django</li>
            </ul>
            <ul className="px-2  text-green-300">
              <li>&#8226; Django REST API</li>
              <li>&#8226; SQL</li>
              <li>&#8226; Machine Learning &#40;Sckikit-Learn, NLP&#41;</li>
            </ul>
          </div>
        </div>
        <img
          src={require("../../img/me.jpeg")}
          alt=""
          className="mr-14 mb-8 hidden h-56 w-60 rounded-full md:block"
        />
      </div>
    </div>
  );
};
