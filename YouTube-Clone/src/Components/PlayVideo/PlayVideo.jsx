import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import menuIcon from "../../assets/menu.png";
import { useEffect, useState } from "react";
import { API_KEY, valueConverter } from "../../data";
import moment from "moment";

const PlayVideo = ({ videoId }) => {
  const [videoApiData, setVideoApiData] = useState(null);
  const [channelApiData, setChannelApiData] = useState(null);
  const [commentApiData, setCommentApiData] = useState([]);

  const fetchVideoDetailsData = async () => {
    const videoDetailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetailsUrl)
      .then((res) => res.json())
      .then((data) => setVideoApiData(data.items[0]));
  };

  const fetchChannelDetailsData = async () => {
    const channelDetailsUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoApiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelDetailsUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.items && data.items.length > 0) {
          setChannelApiData(data.items[0]);
        } else {
          setChannelApiData(null);
        }
      });
  };

  const fetchCommentsData = async () => {
    const commentsDetailsUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
    await fetch(commentsDetailsUrl)
      .then((res) => res.json())
      .then((data) => setCommentApiData(data.items));
  };

  useEffect(() => {
    fetchVideoDetailsData();
  }, []);

  useEffect(() => {
    fetchCommentsData();
  }, [videoId]);

  useEffect(() => {
    if (
      videoApiData &&
      videoApiData.snippet &&
      videoApiData.snippet.channelId
    ) {
      fetchChannelDetailsData();
    }
  }, [videoApiData]);

  return (
    <>
      <div>
        <div className="flex flex-col gap-5">
          <iframe
            className="rounded-2xl w-full h-[37vw]"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; compute-pressure"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <h3 className="font-bold text-xl">
            {videoApiData ? videoApiData.snippet.title : "Title Here"}
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={
                  channelApiData
                    ? channelApiData.snippet.thumbnails.default.url
                    : "null"
                }
                alt=""
                className="rounded-full w-10 h-10"
              />
              <div>
                <h3 className="font-medium text-md">
                  {videoApiData
                    ? videoApiData.snippet.channelTitle
                    : "Title Here"}
                </h3>
                <span className="text-xs text-gray-500">
                  {channelApiData
                    ? valueConverter(channelApiData.statistics.subscriberCount)
                    : "10K"}{" "}
                  Subscribers
                </span>
              </div>
              <button className="rounded-2xl text-sm bg-black text-white px-2 py-2 w-24">
                Subcribe
              </button>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 w-28 rounded-2xl flex justify-between p-3 items-center text-gray-950">
                <div className="flex gap-2 items-center">
                  <img src={like} alt="" className="w-5 " />
                  <span className="text-sm">
                    {videoApiData
                      ? valueConverter(videoApiData.statistics.likeCount)
                      : 155}
                  </span>
                </div>
                <div className="border border-gray-300 h-6"></div>
                <img src={dislike} alt="" className="w-5 " />
              </div>
              <div className="bg-gray-100 w-28 rounded-2xl flex gap-4 p-3 items-center text-gray-950">
                <img src={share} alt="" className="w-5 " />
                <span className="text-md font-medium">Share</span>
              </div>
              <div className="bg-gray-100 w-28 rounded-2xl flex gap-4 p-3 items-center text-gray-950">
                <img src={save} alt="" className="w-5 " />
                <span className="text-md font-medium">Save</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-3 rounded-xl">
            <span className="text-black text-sm font-medium">
              {videoApiData
                ? valueConverter(videoApiData.statistics.viewCount)
                : "16K"}{" "}
              views{" "}
              <span className="text-gray-500 text-sm">
                {videoApiData
                  ? moment(videoApiData.snippet.publishedAt).fromNow()
                  : "10 Hours ago"}
              </span>
            </span>
            <p className="text-gray-500 text-sm">
              {videoApiData ? videoApiData.snippet.title : ""}
            </p>
            <p className="text-gray-500 text-sm">
              {videoApiData
                ? videoApiData.snippet.description.slice(0, 300)
                : ""}
            </p>
          </div>
          <div className="flex items-center gap-5">
            <span className="font-bold text-black">
              {videoApiData
                ? valueConverter(videoApiData.statistics.commentCount)
                : 100}{" "}
              Comments
            </span>
            <span className="flex items-center gap-2 text-xs">
              <img src={menuIcon} alt="" className="w-4" />
              Sort by
            </span>
          </div>
          <div className="flex items-center gap-3">
            <img src={jack} className="w-6 rounded-full" alt="" />
            <input
              type="text"
              placeholder="Add a comment"
              className="outline-none border-b border-gray-200 w-full text-xs text-gray-400"
            />
          </div>
          {commentApiData &&
            commentApiData?.map((item, index) => (
              <div className="flex items-start p-1 gap-3 mb-1" key={index}>
                <div>
                  <img
                    src={
                      item.snippet?.topLevelComment?.snippet
                        ?.authorProfileImageUrl
                    }
                    alt=""
                    className="w-8 rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-xs">
                    {item.snippet?.topLevelComment?.snippet?.authorDisplayName}{" "}
                    <span>
                      {moment(
                        item.snippet?.topLevelComment?.snippet?.publishedAt
                      ).fromNow()}
                    </span>
                  </h3>
                  <p className="text-sm">
                    {item.snippet?.topLevelComment?.snippet?.textDisplay}
                  </p>
                  <div className="flex items-center justify-start gap-5 mt-2">
                    <div className="flex gap-1 items-center">
                      <img src={like} className="w-4" alt="" />
                      <span className="text-xs text-black">
                        {valueConverter(
                          item.snippet?.topLevelComment?.snippet?.likeCount
                        )}
                      </span>
                    </div>
                    <div className="flex items-center gap-5">
                      <img src={dislike} className="w-4" alt="" />
                      <span className="text-xs text-black">Reply</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default PlayVideo;
