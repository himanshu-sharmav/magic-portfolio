import { Flex, Meta, Schema } from "@once-ui-system/core";
import { notFound } from "next/navigation";
import GalleryView from "@/components/gallery/GalleryView";
import { baseURL, gallery, person, routes } from "@/resources";

export async function generateMetadata() {
  if (!routes["/gallery"]) return { title: "Page not found", robots: { index: false, follow: false } };
  return Meta.generate({
    title: gallery.title,
    description: gallery.description,
    baseURL: baseURL,
    image: `${baseURL}/images/og/home.jpg`,
    path: gallery.path,
  });
}

export default function Gallery() {
  if (!routes["/gallery"]) notFound();
  return (
    <Flex maxWidth="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={gallery.title}
        description={gallery.description}
        path={gallery.path}
        image={`${baseURL}/images/og/home.jpg`}
        author={{
          name: person.name,
          url: `${baseURL}${gallery.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <GalleryView />
    </Flex>
  );
}
