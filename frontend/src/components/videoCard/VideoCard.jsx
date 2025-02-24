import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VideoCard = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNewsVideos = async () => {
            try {
                const response = await axios.get(
                    'https://newsapi.org/v2/everything',
                    {
                        params: {
                            q: 'news',
                            language: 'en',
                            sortBy: 'publishedAt',
                            apiKey: import.meta.env.VITE_NEWS_API_KEY,
                        },
                    }
                );
                console.log("API Response:", response.data); // Inspect the full response

                // Filter articles that have video URLs
                const videoArticles = response.data.articles.filter(
                    (article) => article.urlToVideo
                );
                console.log("Filtered Videos:", videoArticles); // Inspect filtered videos
                setVideos(videoArticles);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching news videos:", error);
                setError(error);
                setLoading(false);
            }
        };

        fetchNewsVideos();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching news videos: {error.message}</div>;
    }

    return (
        <div>
            <h1>Latest News Videos</h1>
            {videos.length > 0 ? (
                <ul>
                    {videos.map((video) => (
                        <li key={video.url}>
                            <a href={video.url} target="_blank" rel="noopener noreferrer">
                                {video.title}
                            </a>
                            <div>
                                <iframe
                                    width="300"
                                    height="315"
                                    src={video.urlToVideo.replace("watch?v=", "embed/")}
                                    frameBorder="0"
                                    allowFullScreen
                                    title={video.title}
                                ></iframe>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No news videos available at the moment.</p>
            )}
        </div>
    );
};

export default VideoCard;
