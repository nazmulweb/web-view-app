import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import data from "../../data/card-data";

export const Details = () => {
  const { id } = useParams();
  const singleData = data.find((item) => item?.id === Number(id));
  return (
    <>
      <Helmet>
        <title>{singleData?.title}</title>
        <meta
          name="description"
          content="This is the home page of my awesome application."
        />
      </Helmet>
      <div className="flex flex-col gap-8 md:flex-row">
        <img
          src={singleData?.img}
          alt={singleData?.title}
          className="rounded"
        />
        <div>
          <h2 className="mb-5 text-3xl">{singleData?.title}</h2>
          <p>{singleData?.des}</p>
        </div>
      </div>
    </>
  );
};
