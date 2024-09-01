import Img1 from "../../assets/1.jpg";

export const About = () => {
  return (
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
  );
};
