import { useEffect, useState } from "react";
import Card from "./Assets/Card";
import { buttonVariants } from "./Assets/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faPlay } from "@fortawesome/free-solid-svg-icons";

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
        {youtubeData ? (
          youtubeData.map((item, index) => (
            <Card className="relative group cursor-pointer  overflow-hidden bg-bg my-5
               shadow-sm shadow-prime-200 group-hover:shadow-lg " key={index} variant="mediaCard">
              <div className="card__header">
                <img src={item.snippet.thumbnails.high.url} alt={item.snippet.title} className="
                transition-all mix-blend-screen
                group-hover:opacity-5"/>
              </div>
              <div className="card__body">
                <h3 className="text-prime line-clamp-4 absolute -bottom-20 left-3 right-3
                    transition-all group-hover:bottom-2 
                ">{item.snippet.title} <br />
                 <small className="text-bg-200"> 
                    <FontAwesomeIcon icon={faCalendarAlt} /> {item.snippet.publishedAt.split("T")[0].split("-").reverse().join(".")}  </small>
                </h3>
               
              </div>
              <div className="card__footer">
                <a className={`${buttonVariants({variant:'rounded'})} 
                block text-prime bg-bg absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 transition-all
                opacity-0 group-hover:opacity-[1] scale-0 group-hover:scale-[1]
                `} href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`} title={item.snippet.title} target="_blank">
                    <FontAwesomeIcon icon={faPlay} size="xl" />
                </a>
              </div>
            </Card>
          ))
        ) : (
          <p>Loading YouTube data...</p>
        )}
    </>
  );
};

export default Youtube;
