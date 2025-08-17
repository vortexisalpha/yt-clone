// Sample advertisement data with videos
export const adsData = [
  {
    id: 1,
    title: "Discover Amazing Tech Products",
    description: "Shop the latest gadgets and electronics with exclusive deals!",
    buttonText: "Shop Now",
    type: "video",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=225&fit=crop&crop=center",
    url: "https://example-tech-store.com",
    brand: "TechStore",
    category: "technology"
  },
  {
    id: 2,
    title: "Learn Programming Today",
    description: "Master coding skills with our comprehensive online courses!",
    buttonText: "Start Learning",
    type: "video",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop&crop=center",
    url: "https://example-coding-course.com",
    brand: "CodeAcademy",
    category: "education"
  },
  {
    id: 3,
    title: "Fitness Revolution",
    description: "Transform your body with our premium fitness equipment!",
    buttonText: "Get Fit",
    type: "video",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=225&fit=crop&crop=center",
    url: "https://example-fitness.com",
    brand: "FitLife",
    category: "fitness"
  },
  {
    id: 4,
    title: "Delicious Food Delivery",
    description: "Order your favorite meals from top restaurants near you!",
    buttonText: "Order Now",
    type: "video",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=225&fit=crop&crop=center",
    url: "https://example-food-delivery.com",
    brand: "FoodExpress",
    category: "food"
  },
  {
    id: 5,
    title: "Travel the World",
    description: "Book amazing vacation packages at unbeatable prices!",
    buttonText: "Book Trip",
    type: "video",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=225&fit=crop&crop=center",
    url: "https://example-travel.com",
    brand: "TravelMore",
    category: "travel"
  },
  {
    id: 6,
    title: "Fashion Forward",
    description: "Discover the latest fashion trends and style essentials!",
    buttonText: "Shop Fashion",
    type: "video",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=225&fit=crop&crop=center",
    url: "https://example-fashion.com",
    brand: "StyleHub",
    category: "fashion"
  }
];

// Function to get a random ad
export const getRandomAd = () => {
  const randomIndex = Math.floor(Math.random() * adsData.length);
  return adsData[randomIndex];
};

// Function to get ad by category
export const getAdByCategory = (category) => {
  const categoryAds = adsData.filter((ad) => ad.category === category);
  if (categoryAds.length === 0) return getRandomAd();
  const randomIndex = Math.floor(Math.random() * categoryAds.length);
  return categoryAds[randomIndex];
};

// Function to get ad by video content (you can enhance this based on video title/description)
export const getAdForVideo = (videoTitle = "") => {
  const title = videoTitle.toLowerCase();
  
  // Simple keyword matching for ad targeting
  if (title.includes("tech") || title.includes("programming") || title.includes("coding")) {
    return getAdByCategory("technology") || getAdByCategory("education");
  } else if (title.includes("fitness") || title.includes("workout") || title.includes("gym")) {
    return getAdByCategory("fitness");
  } else if (title.includes("food") || title.includes("cooking") || title.includes("recipe")) {
    return getAdByCategory("food");
  } else if (title.includes("travel") || title.includes("vacation") || title.includes("trip")) {
    return getAdByCategory("travel");
  } else if (title.includes("fashion") || title.includes("style") || title.includes("clothing")) {
    return getAdByCategory("fashion");
  }
  
  // Default to random ad
  return getRandomAd();
}; 