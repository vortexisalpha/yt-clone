import React, { useState, useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import YouTube from "react-youtube";

import SkippableAd from "../ads/SkippableAd";
import { getAdForVideo } from "../../data/adsData";

const VideoPlayerWithAds = ({ 
  videoId, 
  opts, 
  videoTitle = "", 
  onVideoReady,
  showAd = true 
}) => {
  const [showingAd, setShowingAd] = useState(showAd);
  const [adData, setAdData] = useState(null);
  const youtubePlayerRef = useRef(null);

  useEffect(() => {
    if (showAd && videoId) {
      // Get targeted ad based on video content
      const selectedAd = getAdForVideo(videoTitle);
      setAdData(selectedAd);
      setShowingAd(true);
    }
  }, [videoId, videoTitle, showAd]);

  const handleAdSkip = () => {
    setShowingAd(false);
    // Autoplay the YouTube video when ad is skipped
    if (youtubePlayerRef.current) {
      youtubePlayerRef.current.playVideo();
    }
  };

  const handleVideoReady = (event) => {
    youtubePlayerRef.current = event.target;
    if (onVideoReady) {
      onVideoReady(event);
    }
  };

  return (
    <Box position="relative" width="100%" height="100%">
      {/* YouTube Video Player */}
      <Box width="100%" height="100%">
        <YouTube 
          videoId={videoId} 
          opts={{
            ...opts,
            width: "100%",
            height: "100%"
          }}
          onReady={handleVideoReady}
          style={{
            width: "100%",
            height: "100%"
          }}
          iframeClassName="youtube-iframe"
        />
      </Box>
      
      {/* Skippable Ad Overlay */}
      {showingAd && adData && (
        <SkippableAd
          adData={adData}
          onSkip={handleAdSkip}
        />
      )}
    </Box>
  );
};

export default VideoPlayerWithAds; 