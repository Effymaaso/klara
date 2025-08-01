
'use client';

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Download, Edit, Trash2 } from "lucide-react";
import Link from "next/link";

const samplePosters = [
  {
    id: 1,
    title: "Summer Music Fest",
    imageUrl: "https://placehold.co/600x800.png",
    hint: "music festival",
  },
  {
    id: 2,
    title: "Modern Art Exhibit",
    imageUrl: "https://placehold.co/600x800.png",
    hint: "art exhibition",
  },
  {
    id: 3,
    title: "New Product Launch",
    imageUrl: "https://placehold.co/600x800.png",
    hint: "product launch",
  },
  {
    id: 4,
    title: "Vintage Car Show",
    imageUrl: "https://placehold.co/600x800.png",
    hint: "car show",
  },
    {
    id: 5,
    title: "Abstract Tech Conference",
    imageUrl: "https://placehold.co/600x800.png",
    hint: "tech conference",
  },
  {
    id: 6,
    title: "Minimalist Coffee Shop Ad",
    imageUrl: "https://placehold.co/600x800.png",
    hint: "coffee shop",
  },
];


export default function GalleryPage() {

    const handleDownload = (imageUrl: string) => {
        // This is a client-side download.
        // For tracking or authentication, you might want a backend endpoint.
        // TODO: Optionally, call a backend endpoint to log the download event.
        console.log(`Downloading image: ${imageUrl}`);
        window.open(imageUrl, '_blank');
    }

    const handleDelete = (posterId: number) => {
        // TODO: Implement backend call to delete the poster from the user's gallery.
        console.log(`Deleting poster with ID: ${posterId}`);
        alert(`This is a placeholder for deleting poster ${posterId}. See the console for details.`);
    }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header showAuthButtons={false} />
      <main className="flex-1 py-12">
        <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tighter">Your Gallery</h1>
                    <p className="text-muted-foreground">Browse and manage your generated posters.</p>
                </div>
                 <Link href="/generator">
                    <Button>Create New Poster</Button>
                </Link>
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {samplePosters.map((poster) => (
              <Card key={poster.id} className="overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={poster.imageUrl}
                      alt={poster.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={poster.hint}
                    />
                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <Button size="icon" variant="outline" onClick={() => handleDownload(poster.imageUrl)}><Download className="h-5 w-5"/></Button>
                        <Link href={`/generator?textPrompt=${encodeURIComponent(poster.title)}&imagePrompt=${encodeURIComponent(poster.hint)}&imageUrl=${encodeURIComponent(poster.imageUrl)}`}>
                            <Button size="icon" variant="outline"><Edit className="h-5 w-5"/></Button>
                        </Link>
                        <Button size="icon" variant="destructive" onClick={() => handleDelete(poster.id)}><Trash2 className="h-5 w-5"/></Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{poster.title}</h3>
                    <p className="text-sm text-muted-foreground">Generated on: {new Date().toLocaleDateString()}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
