import { Button, Card, Carousel } from "flowbite-react";

import Img1 from "assets/1";
import Img2 from "assets/2";
import Img3 from "assets/3";
import Img4 from "assets/4";

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
          imgSrc="/images/blog/image-1.jpg"
        >
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
