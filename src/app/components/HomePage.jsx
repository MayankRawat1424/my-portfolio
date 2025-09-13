import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <div className="px-4 flex justify-between align-left max-w-7xl mx-auto mx-4 pb-5 mb-16 ">
        <div className="">
          <Image
            src="/MRawat.jpeg"
            alt="My Profile Picture"
            width={150}
            height={150}
          />
        </div>
        <div className="w-3/5 mx-24">
          <p className="font-bold text-3xl mb-2">Hi, I'm Mayank Rawat</p>
          <p className="text-3xl mb-6">
            I love turning ideas into clean, functional, and user-friendly web
            experiences.
          </p>
          <p className="text-xl">
            I have a strong interest in web development, cloud technologies, and
            machine learning, and I enjoy exploring how these fields intersect
            to create impactful solutions. Beyond my technical pursuits, I value
            clear and effective communication, which enables me to collaborate
            seamlessly, share ideas with clarity, and contribute meaningfully to
            any team or project.
          </p>
        </div>
        <div className="">
          <dl>
            <div>
              <dt className="text-lg font-semibold text-gray-900">
                Web Development
              </dt>
              <dd className="text-gray-600">
                Building responsive and accessible web applications.
              </dd>
            </div>

            <div>
              <dt className="text-lg font-semibold text-gray-900">
                Cloud Technologies
              </dt>
              <dd className="text-gray-600">
                Deploying and managing applications on cloud platforms.
              </dd>
            </div>

            <div>
              <dt className="text-lg font-semibold text-gray-900">
                Machine Learning
              </dt>
              <dd className="text-gray-600">
                Implementing ML models to solve real-world problems.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

export default HomePage;
