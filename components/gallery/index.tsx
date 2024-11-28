"use client";

import Image from "next/image";
import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import { IImage as IImageType } from "@/types";

import GalleryTab from "./gallery-tab";

interface IGalleryProps {
  images: IImageType[];
}

export default function Gallery({
  images
}: IGalleryProps) {
  return (
    <TabGroup as="div" className="flex flex-col-reverse">
      <div className="mx-auto m-6 hidden w-full max-w-2x; sm:block lg:max-w-auto">
        <TabList className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </TabList>
      </div>
      <TabPanels className="aspect-square w-full">
        {images.map((image) => (
          <TabPanel key={image.id}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <Image
                fill
                src={image.url}
                alt="Image"
                className="object-cover object-center"
              />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}