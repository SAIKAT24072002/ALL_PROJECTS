import React, { useEffect, useState } from "react";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import { Link } from "react-router";
import { API_KEY, valueConverter } from "../../data";
import moment from "moment";

const Feeds = ({ category }) => {
  const [data, setData] = useState([]);

  async function fetchYoutubeData() {
    const videoURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;

    await fetch(videoURL)
      .then((res) => res.json())
      .then((data) => setData(data.items));
  }

  useEffect(() => {
    fetchYoutubeData();
  }, [category]);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((item) => (
          <Link
            key={item.id}
            to={`video/${item.snippet.categoryId}/${item.id}`}
            className="bg-white rounded-md overflow-hidden"
          >
            <img
              src={
                item.snippet.thumbnails.medium.url
                  ? item.snippet.thumbnails.medium.url
                  : ""
              }
              alt=""
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="p-3">
              <h2 className="text-sm font-medium">{item.snippet.title}</h2>
              <h3 className="text-xs text-gray-600">
                {item.snippet.channelTitle}
              </h3>
              <p className="text-xs text-gray-500">
                {valueConverter(item.statistics.viewCount)} views •{" "}
                {moment(item.snippet.publishedAt).fromNow()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Feeds;
