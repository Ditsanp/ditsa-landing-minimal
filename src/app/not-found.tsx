import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="relative">
          <div className="text-9xl font-bold text-ditsa-cyan/30">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <MapPin className="h-24 w-24 text-ditsa-cyan animate-bounce" />
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Page not found
        </h1>
        <p className="text-muted-foreground">
          Oops! It seems you&apos;ve wandered off the map. The page you&apos;re
          looking for doesn&apos;t exist or has been moved.
        </p>
        <Button asChild size="lg" className="mt-8 bg-ditsa-cyan">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
