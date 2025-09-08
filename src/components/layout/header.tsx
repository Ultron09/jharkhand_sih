import { PalashIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center">
        <div className="mr-4 flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <PalashIcon className="h-7 w-7 text-primary" />
            <span className="font-bold text-lg font-headline">Jharkhand Explorer</span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          {/* Future navigation items can be added here */}
        </div>
      </div>
    </header>
  );
}
