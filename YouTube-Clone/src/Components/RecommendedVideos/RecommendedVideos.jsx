import { useEffect, useState } from "react";
import { API_KEY, valueConverter } from "../../data";
import moment from "moment";

const RecommendedVideos = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  const fetchRecomendedVideos = async () => {
    const recomendedVideoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;

    await fetch(recomendedVideoUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data.items || []));
  };

  useEffect(() => {
    fetchRecomendedVideos();
  }, [categoryId]);

  return (
    <div className="flex flex-col gap-3 w-full">
      {apiData.map((item, index) => (
        <div
          key={index}
          className="flex gap-3 items-start cursor-pointer hover:bg-gray-50 rounded-xl p-2 transition-all"
        >
          <img
            src={item.snippet.thumbnails.medium.url}
            alt={item.snippet.title}
            className="rounded-lg w-40 h-24 object-cover"
          />
          <div className="flex flex-col justify-between">
            <h3 className="text-sm font-medium line-clamp-2 leading-tight">
              {item.snippet.title}
            </h3>
            <span className="text-xs text-gray-500 mt-1">
              {item.snippet.channelTitle}
            </span>
            <div className="flex gap-2 text-xs text-gray-500">
              <span>{valueConverter(item.statistics.viewCount)} views</span>
              <span>•</span>
              <span>{moment(item.snippet.publishedAt).fromNow()}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommendedVideos;
