import { useParams } from "react-router";
import PlayVideo from "../../Components/PlayVideo/PlayVideo";
import RecommendedVideos from "../../Components/RecommendedVideos/RecommendedVideos";

const Video = () => {
  const { videoId, categoryId } = useParams();

  return (
    <div className="flex w-full items-start gap-8 px-20 mt-6">
      <div className="flex-1 min-w-0">
        <PlayVideo videoId={videoId} />
      </div>
      <aside className="w-[28%] flex flex-col gap-3">
        <RecommendedVideos categoryId={categoryId} />
      </aside>
    </div>
  );
};

export default Video;
