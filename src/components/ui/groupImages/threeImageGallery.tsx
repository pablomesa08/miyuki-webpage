import { Image } from "@nextui-org/react";

type ImageInfo = {
  imageUrl: string;
  imageTitle: string;
  imageDescription: string;
};

type ImageInfoProps = {
  imageInfoArray: ImageInfo[];
};

export default function ThreeImageGallery({
  imageInfoArray,
}: Readonly<ImageInfoProps>) {
  return (
    <div className="flex flex-row gap-10 mt-5 ">
      {imageInfoArray.map((imageInfo, index) => (
        <div key={index} className="flex flex-col items-center">
          <Image
            src={imageInfo.imageUrl}
            alt={imageInfo.imageTitle}
            radius="full"
          />
          <h2 className="text-lg text-center font-semibold">
            {imageInfo.imageTitle}
          </h2>
          <p className="text-sm text-center max-w-44">
            {imageInfo.imageDescription}
          </p>
        </div>
      ))}
    </div>
  );
}

export type { ImageInfo };
