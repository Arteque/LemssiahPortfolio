import { FC, useEffect, useState } from "react";
import Card from "./Assets/Card";
import { Button, buttonVariants } from "./Assets/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faPlay, faTimes } from "@fortawesome/free-solid-svg-icons";
import VideoPlayer from "./Assets/VideoPlayer";

// Define the types for the API response
interface YoutubeVideoSnippet {
  title: string;
  description: string;
  publishedAt: string;
  resourceId: {
    videoId: string;
  };
  thumbnails: {
    default: { url: string };
    medium: { url: string };
    high: { url: string };
  };
}

interface YoutubeVideo {
  snippet: YoutubeVideoSnippet;
}

interface YoutubeApiResponse {
  items: YoutubeVideo[];
}

type SingleVideoData = {
  url: string;
  title: string;
};

interface YoutubeProps {
  result: number; // Add result prop
}

const Youtube: FC<YoutubeProps> = ({ result }) => {
  const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems";
  const [youtubeData, setYoutubeData] = useState<YoutubeVideo[]>([]);
  const [videoUrl, setVideoUrl] = useState<SingleVideoData | null>(null);
  const [player, setPlayer] = useState(false);

  useEffect(() => {
    const fetchYoutubeData = async (): Promise<void> => {
      try {
        const response = await fetch(
          `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLRSKNDpLx5fIMfpQI6-2y7WtShBHfLL_u&maxResults=50&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
        );
        const data: YoutubeApiResponse = await response.json();
        const videos = data.items;
        setYoutubeData(videos);
      } catch (err) {
        console.error("Error fetching YouTube data:", err);
      }
    };

    fetchYoutubeData();
  }, []);

  const openVideo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const url = e.currentTarget.href;
    const title = e.currentTarget.title;
    setVideoUrl({ url, title });
    setPlayer(true);
  };

  useEffect(() => {
    setPlayer(!!videoUrl);
  }, [videoUrl]);

  return (
    <>
      {youtubeData.length > 0 ? (
        youtubeData.slice(0, result).map((item, index) => (
          <Card
            className="relative group cursor-pointer overflow-hidden bg-bg my-5 shadow-sm shadow-prime-200 group-hover:shadow-lg"
            key={index}
            variant="mediaCard"
          >
            <div className="card__header">
              <img
                src={item.snippet.thumbnails.high.url}
                alt={item.snippet.title}
                className="
                  transition-transform duration-[10s] ease-in-out scale-[1]
                  opacity-[1] group-hover:opacity-[0.2] group-hover:scale-[1.01]
                  group-hover:rotate-[2deg]"
              />
            </div>
            <div className="card__body">
              <h3
                className="text-prime line-clamp-4 p-5 transition-all duration-[1s]
                md:absolute md:bottom-[-100px] md:left-3 md:right-3
                group-hover:bottom-0"
              >
                {item.snippet.title}
              </h3>
            </div>
            <div className="card__footer">
              <a
                className={`
                  ${buttonVariants({ variant: 'rounded' })} w-fit rounded-none
                  text-prime bg-bg transition-all absolute top-1 left-1 p-5 flex gap-2
                  md:opacity-[0.9] md:group-hover:opacity-[1] md:scale-0
                  md:group-hover:scale-[1] md:left-[50%] md:top-[50%] md:-translate-x-1/2
                  md:-translate-y-1/2
                `}
                href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}
                title={item.snippet.title}
                target="_blank"
                onClick={openVideo}
              >
                <FontAwesomeIcon icon={faPlay} size="sm" className="pointer-events-none" />
                <span className="md:hidden">Play</span>
              </a>
            </div>
          </Card>
        ))
      ) : (
        <p className="flex items-center justify-center gap-5">
          <FontAwesomeIcon icon={faCircle} />
          <span>Loading ...</span>
        </p>
      )}

      <div
        className={`${player ? 'opacity-1 pointer-events-auto' : 'opacity-0 pointer-events-none'}
          videoplayer-container transition-all duration-100
          fixed top-0 left-0 right-0 bottom-0 z-[999999999]
          flex flex-col p-2 items-center justify-center bg-bg
          md:top-20 md:left-20 md:right-20 md:bottom-20 rounded-lg shadow-md
        `}
      >
        {player && (
          <>
            <Button
              variant="rounded"
              className="absolute top-0 right-0 bg-second"
              onClick={() => setPlayer(false)}
            >
              <FontAwesomeIcon icon={faTimes} size="xl" />
            </Button>
            <h2 className="text-prime mt-5 py-5">{videoUrl?.title}</h2>
            <VideoPlayer videoUrl={videoUrl?.url} />
          </>
        )}
      </div>
    </>
  );
};

export default Youtube;
