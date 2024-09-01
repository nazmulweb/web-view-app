import { Button, Card, Carousel } from "flowbite-react";

import Img1 from "./assets/1.jpg";
import Img2 from "./assets/2.jpg";
import Img3 from "./assets/3.jpg";
import Img4 from "./assets/4.jpg";

function App() {
  return (
    <main className=" m-auto mt-10 w-11/12">
      <div className="mb-10 h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Card
          className="w-full"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={Img1}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest of 2021 so far, in reverse chronological.
          </p>
        </Card>
        <Card
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
        </Card>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card className="w-full" imgSrc={Img1} horizontal>
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
      </div>
    </main>
  );
}

export default App;
