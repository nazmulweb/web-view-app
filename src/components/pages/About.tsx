import Img1 from "../../assets/1.jpg";
import { Helmet } from "react-helmet-async";

export const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta
          name="description"
          content="This is the home page of my awesome application."
        />
      </Helmet>
      <div className="flex flex-col gap-8 md:flex-row">
        <img src={Img1} alt={"image "} className="rounded" />
        <div>
          <h2 className="mb-5 text-3xl">
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <p>
            adipisicing elit. Eveniet est perferendis laboriosam in asperiores
            dicta suscipit ipsam quos aliquam minima corrupti, quas amet?
            Aspernatur nobis consectetur nostrum explicabo aperiam voluptate.
          </p>
        </div>
      </div>
    </>
  );
};
