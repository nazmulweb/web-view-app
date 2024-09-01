import { Card, Carousel } from "flowbite-react";

import Img1 from "./assets/1.jpg";
import Img5 from "./assets/5.png";
import Img6 from "./assets/6.png";
import Img7 from "./assets/7.png";
import Img8 from "./assets/8.png";
import data from "./data/card-data";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="mb-10 h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img src={Img6} alt="..." />
          <img src={Img7} alt="..." />
          <img src={Img8} alt="..." />
        </Carousel>
      </div>
      <div className="my-8">
        <div className="my-6 mt-14 lg:mt-20">
          <h1 className="mb-3 text-3xl font-medium">Lorem ipsum dolor</h1>
          <p className=" text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            numquam eum consectetur quos accusantium doloribus .
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data?.map((item) => (
            <Card
              className="w-full"
              imgAlt={item.title}
              imgSrc={item.img}
              key={item.id}
            >
              <Link to={`details/${item.id}`}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
              </Link>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {item.des}
              </p>
            </Card>
          ))}

          {/* <Card
            className="w-full"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={Img2}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest of 2021 so far, in reverse chronological.
            </p>
          </Card>
          <Card
            className="w-full"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={Img3}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest of 2021 so far, in reverse chronological.
            </p>
          </Card>
          <Card
            className="w-full"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={Img4}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest of 2021 so far, in reverse chronological.
            </p>
          </Card> */}
        </div>
      </div>
      <div className="my-8">
        <div className="my-6 mt-14 lg:mt-20">
          <h1 className="mb-3 text-3xl font-medium">Lorem ipsum dolor</h1>
          <p className=" text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            numquam eum consectetur quos accusantium doloribus .
          </p>
        </div>
        <div className="my-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card className="w-full" imgSrc={Img5} horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
          <Card className="w-full" imgSrc={Img1} horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
          <Card className="w-full" imgSrc={Img5} horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
