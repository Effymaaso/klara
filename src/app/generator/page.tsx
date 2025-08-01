
import { Suspense } from 'react';
import { Header } from "@/components/header";
import { PosterGenerator } from "@/components/poster-generator";

export default function GeneratorPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<div>Loading...</div>}>
            <PosterGenerator />
        </Suspense>
      </main>
    </div>
  );
}
