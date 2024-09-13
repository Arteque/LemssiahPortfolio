import { useEffect, useState } from "react";
import Card from "./Assets/Card";
import { buttonVariants } from "./Assets/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faCircle, faPlay } from "@fortawesome/free-solid-svg-icons";

// Define the types for the API response
interface YoutubeVideoSnippet {
  title: string;
  description: string;
  publishedAt:string;
  resourceId:{
    videoId:string;
  },
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

const Youtube: React.FC = () => {
  const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems";

  // Type your state as an array of YoutubeVideo or an empty array
  const [youtubeData, setYoutubeData] = useState<YoutubeVideo[]>([]);

  useEffect(() => {
    const fetchYoutubeData = async (): Promise<void> => {
      try {
        const response = await fetch(
          `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLRSKNDpLx5fIMfpQI6-2y7WtShBHfLL_u&maxResults=6&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
        );
        const data: YoutubeApiResponse = await response.json();
        const videos = data.items;
        setYoutubeData(videos);
        console.log(videos)
      } catch (err) {
        console.error("Error fetching YouTube data:", err);
      }
    };

    fetchYoutubeData(); // Call the function inside useEffect
  }, []); // Empty dependency array to ensure it runs only once

  return (
    <>
        {youtubeData.length > 0 ? (
          youtubeData.map((item, index) => (
            <Card className="relative group cursor-pointer  overflow-hidden bg-bg my-5
               shadow-sm shadow-prime-200 group-hover:shadow-lg " key={index} variant="mediaCard">
              <div className="card__header">
                <img src={item.snippet.thumbnails.high.url} alt={item.snippet.title} className="
                transition-all mix-blend-lighten
                group-hover:opacity-5"/>
              </div>
              <div className="card__body">
                <h3 className="text-prime line-clamp-4 
                   p-5
                   md:absolute md:-bottom-20 md:left-3 md:right-3
                    transition-all group-hover:bottom-2 
                ">{item.snippet.title} <br />
                 <small className="text-bg-200"> 
                    <FontAwesomeIcon icon={faCalendarAlt} /> {item.snippet.publishedAt.split("T")[0].split("-").reverse().join(".")}  </small>
                </h3>
               
              </div>
              <div className="card__footer">
                <a className={`${buttonVariants({variant:'rounded'})} 
                text-prime bg-bg 
                transition-all
                absolute top-5 left-5
                p-5 flex gap-2
                md:opacity-0 md:group-hover:opacity-[1] md:scale-0 md:group-hover:scale-[1]
                 md:left-[50%] md:top-[50%] md:-translate-x-1/2 md:-translate-y-1/2 
                `} href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`} title={item.snippet.title} target="_blank">
                    <FontAwesomeIcon icon={faPlay} size="sm" />
                    <span className="md:hidden"> Play</span>
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
    </>
  );
};

export default Youtube;
