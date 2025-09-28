import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <section
        id="home"
        className="grid grid-cols-1 md:grid-cols-5 px-4 max-w-7xl mx-auto pb-5 mb-32 scroll-mt-32 "
      >
        <div className="col-span-1  mr-16 md:border-r-2 md:border-gray-400 mb-8">
          <Image
            src="/MRawat.jpeg"
            alt="My Profile Picture"
            width={150}
            height={150}
          />
        </div>
        <div className="col-span-3 max-w-2xl mb-20 md:mb-0">
          <p className="font-bold text-3xl mb-4">Hi, I'm Mayank Rawat</p>
          <p className="text-3xl mb-8">
            I love turning ideas into clean, functional, and user-friendly web
            experiences.
          </p>
          <p className="text-xl mb-8 tracking-wide">
            I have a strong interest in web development, cloud technologies, and
            machine learning, and I enjoy exploring how these fields intersect
            to create impactful solutions.
          </p>
          <p className="text-xl tracking-wide">
            Explore my work and learn more about me — see projects I'm proud of,
            or get in touch to collaborate.
          </p>
        </div>
        <div className="col-span-1">
          <dl>
            <div>
              <dt className="text-xl mb-2 font-semibold text-gray-900">
                Web Development
              </dt>
              <dd className="text-gray-600 mb-8 text-md">
                Building responsive and accessible web applications.
              </dd>
            </div>

            <div>
              <dt className="text-xl mb-2 font-semibold text-gray-900">
                Cloud Technologies
              </dt>
              <dd className="text-gray-600 mb-8 text-md">
                Deploying and managing applications on cloud platforms.
              </dd>
            </div>

            <div>
              <dt className="text-xl mb-2 font-semibold text-gray-900">
                Machine Learning
              </dt>
              <dd className="text-gray-600 mb-8 text-md">
                Implementing ML models to solve real-world problems.
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
};

export default HomePage;
