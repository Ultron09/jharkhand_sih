export type Attraction = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  rating: number;
  tags: string[];
  dataAiHint: string;
};

export const attractions: Attraction[] = [
  {
    id: 1,
    name: "Hundru Falls",
    description: "Hundru Falls is a mesmerizing waterfall located on the Subarnarekha River. The water cascades down from a height of 322 feet, creating a stunning spectacle. It's a popular picnic spot and offers breathtaking views, especially during the monsoon season.",
    imageUrl: "https://picsum.photos/600/400?random=1",
    rating: 5,
    tags: ["Nature", "Waterfall", "Scenery"],
    dataAiHint: "waterfall nature",
  },
  {
    id: 2,
    name: "Betla National Park",
    description: "One of the first national parks in India to become a tiger reserve, Betla is home to a diverse range of wildlife, including elephants, leopards, and numerous bird species. Safari tours offer a chance to experience the region's rich biodiversity up close.",
    imageUrl: "https://picsum.photos/600/400?random=2",
    rating: 4,
    tags: ["Wildlife", "National Park", "Safari"],
    dataAiHint: "forest wildlife",
  },
  {
    id: 3,
    name: "Baidyanath Jyotirlinga Temple, Deoghar",
    description: "One of the twelve Jyotirlingas, the Baidyanath Temple in Deoghar is a major pilgrimage site for Hindus. The temple complex has a rich history and a vibrant spiritual atmosphere, attracting devotees from all over the country.",
    imageUrl: "https://picsum.photos/600/400?random=3",
    rating: 5,
    tags: ["Pilgrimage", "Temple", "Spiritual"],
    dataAiHint: "temple spiritual",
  },
   {
    id: 4,
    name: "Patratu Valley",
    description: "Known for its winding roads and panoramic views, Patratu Valley offers a stunning drive through lush green hills. The Patratu Dam at the base of the valley is a serene spot for boating and enjoying the sunset.",
    imageUrl: "https://picsum.photos/600/400?random=4",
    rating: 4,
    tags: ["Scenery", "Road Trip", "Dam"],
    dataAiHint: "valley road",
  },
  {
    id: 5,
    name: "Netarhat",
    description: "Often called the 'Queen of Chotanagpur,' Netarhat is a beautiful hill station known for its glorious sunrises and sunsets. The cool climate, dense forests, and scenic viewpoints make it a perfect retreat from city life.",
    imageUrl: "https://picsum.photos/600/400?random=5",
    rating: 5,
    tags: ["Hill Station", "Sunrise", "Nature"],
    dataAiHint: "hills sunrise",
  },
  {
    id: 6,
    name: "Dassam Falls",
    description: "Another spectacular waterfall, Dassam Falls is where the Kanchi River tumbles down from a height of 144 feet. The area is surrounded by lush greenery, making it an ideal spot for nature lovers and photographers.",
    imageUrl: "https://picsum.photos/600/400?random=6",
    rating: 4,
    tags: ["Nature", "Waterfall", "Scenery"],
    dataAiHint: "waterfall scenic",
  },
  {
    id: 7,
    name: "Jubilee Park, Jamshedpur",
    description: "A gift to the city of Jamshedpur from the Tata Steel company, this park is modeled after the Brindavan Gardens of Mysore. It features fountains, a laser show, a zoo, and beautiful gardens, making it a perfect family destination.",
    imageUrl: "https://picsum.photos/600/400?random=11",
    rating: 4,
    tags: ["Park", "Leisure", "Family"],
    dataAiHint: "city park",
  },
  {
    id: 8,
    name: "Parasnath Hills",
    description: "A major pilgrimage destination for Jains, Parasnath Hills is the highest mountain peak in Jharkhand. The hill is dotted with numerous ancient and beautiful Jain temples (Shikharji). It's a place of great spiritual significance and offers challenging treks.",
    imageUrl: "https://picsum.photos/600/400?random=12",
    rating: 5,
    tags: ["Pilgrimage", "Trekking", "Mountain"],
    dataAiHint: "mountain temple",
  },
  {
    id: 9,
    name: "Maluti Temples",
    description: "Known as the 'village of temples,' Maluti is famous for its 72 extant terracotta temples from the 17th century. These temples, with intricate carvings depicting scenes from Hindu epics, are an archaeological treasure.",
    imageUrl: "https://picsum.photos/600/400?random=13",
    rating: 4,
    tags: ["Heritage", "Temple", "Archaeology"],
    dataAiHint: "ancient ruins",
  },
];

export type MarketplaceItem = {
    id: number;
    name: string;
    seller: string;
    price: string;
    imageUrl: string;
    tag?: string;
    dataAiHint: string;
}

export const marketplaceItems: MarketplaceItem[] = [
    {
        id: 1,
        name: "Dhokra Art Elephant",
        seller: "Jharkhand Tribal Crafts",
        price: "₹1,200",
        imageUrl: "https://picsum.photos/400/400?random=7",
        tag: "Handicraft",
        dataAiHint: "metal craft",
    },
    {
        id: 2,
        name: "Handwoven Tussar Silk Saree",
        seller: "Sari Weavers of Godda",
        price: "₹4,500",
        imageUrl: "https://picsum.photos/400/400?random=8",
        tag: "Textile",
        dataAiHint: "silk fabric",
    },
    {
        id: 3,
        name: "Sohrai Painted Vase",
        seller: "Hazaribagh Art Collective",
        price: "₹850",
        imageUrl: "https://picsum.photos/400/400?random=9",
        tag: "Pottery",
        dataAiHint: "painted pottery",
    },
    {
        id: 4,
        name: "Bamboo decorative basket",
        seller: "Dumka Bamboo Artisans",
        price: "₹500",
        imageUrl: "https://picsum.photos/400/400?random=10",
        tag: "Eco-friendly",
        dataAiHint: "bamboo basket",
    }
];

export type TransportOption = {
    id: number;
    name: string;
    type: 'Bus' | 'Train' | 'Taxi';
    description: string;
    availability: string;
    avgCost: string;
}

export const transportOptions: TransportOption[] = [
    {
        id: 1,
        name: "State Bus Services",
        type: "Bus",
        description: "Public buses connect major towns and cities. They are an economical way to travel, though they can be crowded.",
        availability: "Frequent between major cities; less frequent to rural areas.",
        avgCost: "Low",
    },
    {
        id: 2,
        name: "Indian Railways",
        type: "Train",
        description: "Jharkhand has a good rail network, with major stations in Ranchi, Jamshedpur, and Dhanbad connecting to the rest of India.",
        availability: "Connects major cities and towns within the state and country.",
        avgCost: "Medium",
    },
    {
        id: 3,
        name: "Local Taxis & Auto-rickshaws",
        type: "Taxi",
        description: "Taxis and auto-rickshaws are available for short-distance travel within cities and to nearby tourist spots. Fares should be negotiated beforehand.",
        availability: "Readily available in urban and tourist areas.",
        avgCost: "High",
    }
];
