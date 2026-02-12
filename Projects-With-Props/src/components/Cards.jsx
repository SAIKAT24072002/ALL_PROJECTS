import { Bookmark } from "lucide-react";
function Cards({
  brandLogo,
  company,
  datePosted,
  post,
  tag1,
  tag2,
  pay,
  location,
}) {
  return (
    <>
      <div className="w-72 rounded-2xl bg-white p-3">
        <div className="flex justify-between items-center">
          <img
            src={brandLogo}
            alt="Company logo"
            className="w-10 p-1 rounded-full bg-gray-200"
          />
          <button className="flex gap-1 items-center w-fit p-2 bg-gray-200 rounded-md cursor-pointer">
            save <Bookmark />
          </button>
        </div>
        <div className="flex gap-1 items-center mt-6">
          <h2 className="font-sans font-bold">{company}</h2>
          <span className="text-[10px] text-gray-400">{datePosted}</span>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">{post}</h2>
        </div>
        <div className="mt-2 flex gap-2 items-center">
          <button className="px-2 py-1 bg-gray-200 rounded-md text-[12px] font-semibold">
            {tag1}
          </button>
          <button className="px-2 py-1 bg-gray-200 rounded-md text-[12px] font-semibold">
            {tag2}
          </button>
        </div>
        <div className="border mt-20 border-gray-300 w-full"></div>
        <div className="flex justify-between items-center mt-4">
          <div>
            <h3 className="font-semibold text-md">{pay}</h3>
            <h3 className="text-[10px] text-gray-400">{location}</h3>
          </div>
          <div>
            <button className="bg-black text-gray-300 px-3 py-1 text-sm rounded-lg cursor-pointer">
              Apply now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cards;
