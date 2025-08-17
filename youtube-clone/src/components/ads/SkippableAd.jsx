import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Text,
  Image,
  VStack,
} from "@chakra-ui/react";

const SkippableAd = ({ onSkip, adData }) => {
  const [countdown, setCountdown] = useState(5);
  const [canSkip, setCanSkip] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  // Default ad data if none provided
  const defaultAdData = {
    title: "Discover Amazing Products",
    description: "Shop the latest trends and get exclusive deals!",
    buttonText: "Shop Now",
    type: "video",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    image: "https://via.placeholder.com/400x225/1a1a1a/ffffff?text=Advertisement",
    url: "https://example.com",
    brand: "YourBrand"
  };

  const currentAd = adData || defaultAdData;

  // Auto-play video when component mounts
  useEffect(() => {
    if (videoRef.current && currentAd.type === "video") {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, [currentAd.type]);

  // Smooth progress animation
  useEffect(() => {
    const startTime = Date.now();
    const duration = 5000; // 5 seconds in milliseconds

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(newProgress);
      
      if (elapsed < duration) {
        requestAnimationFrame(updateProgress);
      } else {
        setCanSkip(true);
        setProgress(100);
      }
    };

    requestAnimationFrame(updateProgress);
  }, []);

  // Countdown timer for display
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setCanSkip(true);
    }
  }, [countdown]);

  const handleSkip = () => {
    // Pause video when skipping
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsVisible(false);
    setTimeout(() => {
      onSkip();
    }, 300);
  };

  const handleAdClick = () => {
    window.open(currentAd.url, "_blank");
  };

  if (!isVisible) return null;

  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="100%"
      bg="black"
      zIndex={1000}
      display="flex"
      alignItems="center"
      justifyContent="center"
      transition="opacity 0.3s ease"
      opacity={isVisible ? 1 : 0}
    >
      {/* Skip Button - YouTube style rounded rectangle */}
      <Box
        position="absolute"
        bottom="60px"
        right="20px"
        zIndex={1001}
      >
        <Button
          size="md"
          bg="rgba(0, 0, 0, 0.8)"
          color="white"
          isDisabled={!canSkip}
          onClick={handleSkip}
          borderRadius="20px"
          fontSize="14px"
          fontWeight="500"
          px={4}
          py={2}
          minH="40px"
          minW="80px"
          border="1px solid rgba(255, 255, 255, 0.2)"
          _hover={{
            bg: canSkip ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0.8)",
            transform: canSkip ? "scale(1.05)" : "none"
          }}
          _disabled={{
            opacity: 0.8,
            cursor: "not-allowed",
            _hover: {
              transform: "none"
            }
          }}
          transition="all 0.2s ease"
        >
          <Text fontSize="14px" fontWeight="500">
            {canSkip ? "Skip" : `Skip in ${countdown}`}
          </Text>
          {canSkip && (
            <Image
              src="/playpause.png"
              alt="Skip icon"
              width="25px"
              height="25px"
              ml={2}
              filter="brightness(0) invert(1)"
            />
          )}
        </Button>
      </Box>

      {/* Ad Content */}
      <Box
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        onClick={handleAdClick}
        position="relative"
      >
        {currentAd.type === "video" ? (
          <Box
            as="video"
            ref={videoRef}
            width="100%"
            height="100%"
            objectFit="cover"
            autoPlay
            muted
            loop
            playsInline
            src={currentAd.videoUrl}
            onError={() => {
              console.log("Video failed to load, falling back to image");
            }}
          />
        ) : (
          <VStack
            spacing={4}
            maxWidth="600px"
            padding="20px"
            textAlign="center"
          >
            <Image
              src={currentAd.image}
              alt="Advertisement"
              borderRadius="lg"
              maxHeight="300px"
              objectFit="cover"
              fallbackSrc="https://via.placeholder.com/400x225/1a1a1a/ffffff?text=Advertisement"
            />
            <VStack spacing={2}>
              <Text color="white" fontSize="2xl" fontWeight="bold">
                {currentAd.title}
              </Text>
              <Text color="gray.300" fontSize="md">
                {currentAd.description}
              </Text>
              <Text color="gray.500" fontSize="sm">
                {currentAd.brand}
              </Text>
            </VStack>
            <Button
              colorScheme="red"
              size="lg"
              onClick={(e) => {
                e.stopPropagation();
                handleAdClick();
              }}
            >
              {currentAd.buttonText}
            </Button>
          </VStack>
        )}

        {/* Overlay content for video ads */}
        {currentAd.type === "video" && (
          <Box
            position="absolute"
            bottom="80px"
            left="20px"
            bg="white"
            borderRadius="10px"
            padding="16px 20px"
            maxWidth="390px"
            boxShadow="0 2px 8px rgba(0,0,0,0.3)"
            cursor="pointer"
            onClick={(e) => {
              e.stopPropagation();
              handleAdClick();
            }}
            _hover={{
              transform: "scale(1.02)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.4)"
            }}
            transition="all 0.2s ease"
          >
            <Box display="flex" alignItems="center" justifyContent="space-between" gap={4}>
              <VStack spacing={1} align="flex-start" flex="1">
                <Text color="black" fontSize="15px" fontWeight="600" lineHeight="1.2">
                  {currentAd.title}
                </Text>
                <Text color="gray.600" fontSize="13px" lineHeight="1.3">
                  {currentAd.brand || "godaddy.com"}
                </Text>
              </VStack>
              <Button
                bg="#4285f4"
                color="white"
                size="sm"
                borderRadius="20px"
                fontSize="14px"
                fontWeight="500"
                px={5}
                py={2}
                minH="38px"
                flexShrink={0}
                _hover={{
                  bg: "#3367d6"
                }}
                _active={{
                  bg: "#2c5aa0"
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleAdClick();
                }}
              >
                Learn more
              </Button>
            </Box>
          </Box>
        )}
      </Box>

      {/* Smooth Yellow Progress Bar - YouTube style */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        width="100%"
        height="3px"
        bg="rgba(255, 255, 255, 0.2)"
        overflow="hidden"
      >
        <Box
          width={`${progress}%`}
          height="100%"
          bg="#FFD700"
          transition="none"
          style={{
            willChange: "width",
            transform: "translateZ(0)" // Hardware acceleration
          }}
        />
      </Box>

      {/* Ad Label - YouTube style */}
      <Box
        position="absolute"
        bottom="20px"
        left="20px"
        bg="rgba(0, 0, 0, 0.8)"
        color="white"
        px={2}
        py={1}
        borderRadius="2px"
        fontSize="12px"
        fontWeight="400"
        border="1px solid rgba(255, 255, 255, 0.2)"
      >
        Ad
      </Box>
    </Box>
  );
};

export default SkippableAd; 