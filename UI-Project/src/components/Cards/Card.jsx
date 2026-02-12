const Card = ({
  imgSrc,
  imgAlt,
  badge,
  description,
  primaryBtnLabel,
  backgroundColor,
}) => {
  return (
    <>
      <div className="h-full w-96 rounded-4xl overflow-hidden relative">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-between p-8">
          <h2 className="bg-gray-200 flex justify-center items-center rounded-full w-12 h-12 font-bold text-2xl">
            {badge}
          </h2>
          <div>
            <p className="text-2xl leading-normal text-gray-100">
              {description}
            </p>
            <div className="flex items-center justify-between mt-8">
              <button
                className="px-4 py-2 rounded-3xl text-lg font-semibold text-white w-36"
                style={{ backgroundColor: backgroundColor || "red" }}
              >
                {primaryBtnLabel}
              </button>
              <button
                className="rounded-full p-2 flex items-center justify-center text-white w-10 h-10 text-xl font-bold"
                style={{ backgroundColor: backgroundColor || "red" }}
              >
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
