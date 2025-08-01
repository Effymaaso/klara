import { Header } from "@/components/header";
import { PosterGenerator } from "@/components/poster-generator";

export default function GeneratorPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <PosterGenerator />
      </main>
    </div>
  );
}
