import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ItineraryForm from '@/components/itinerary-form';
import { AttractionsList } from '@/components/attractions-list';
import { MarketplaceList } from '@/components/marketplace-list';
import { TransportInfo } from '@/components/transport-info';

function HeroSection() {
  return (
    <div className="relative overflow-hidden rounded-lg bg-card text-card-foreground shadow-lg">
      <div className="absolute inset-0">
        <Image
          src="https://picsum.photos/1200/400"
          alt="Scenic view of Jharkhand"
          fill
          className="object-cover"
          data-ai-hint="waterfall landscape"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="relative grid items-center p-8 md:p-12 min-h-[300px] md:min-h-[400px]">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-lg">
            Explore the Soul of Jharkhand
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl drop-shadow">
            Your AI-powered guide to the hidden gems and vibrant culture of
            Jharkhand.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <HeroSection />
      <Tabs defaultValue="planner" className="w-full mt-12">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
          <TabsTrigger value="planner">Plan Your Trip</TabsTrigger>
          <TabsTrigger value="attractions">Explore</TabsTrigger>
          <TabsTrigger value="market">Marketplace</TabsTrigger>
          <TabsTrigger value="transport">Transport</TabsTrigger>
        </TabsList>
        <TabsContent value="planner" className="mt-6 rounded-lg border bg-card p-6">
          <ItineraryForm />
        </TabsContent>
        <TabsContent value="attractions" className="mt-6">
          <AttractionsList />
        </TabsContent>
        <TabsContent value="market" className="mt-6">
          <MarketplaceList />
        </TabsContent>
        <TabsContent value="transport" className="mt-6">
          <TransportInfo />
        </TabsContent>
      </Tabs>
    </div>
  );
}
