import { attractions } from "@/lib/placeholder-data";
import { AttractionCard } from "./attraction-card";

export function AttractionsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {attractions.map((attraction) => (
        <AttractionCard key={attraction.id} attraction={attraction} />
      ))}
    </div>
  );
}
