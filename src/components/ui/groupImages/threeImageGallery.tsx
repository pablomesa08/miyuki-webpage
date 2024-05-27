import { Image } from "@nextui-org/react";
import { useRouter } from "next/router";

type ImageInfo = {
  imageUrl: string;
  backround: string;
  imageTitle: string;
  imageDescription: string;
};

type ImageInfoProps = {
  imageInfoArray: ImageInfo[];
  textColor: string; // Propiedad adicional para el color del texto
};

export default function ThreeImageGallery({ imageInfoArray, textColor }: Readonly<ImageInfoProps>) {
  const router = useRouter();

  const handleImageClick = (imageUrl: string) => {
    const productId = imageUrl.split("/").pop()?.replace(".png", "");
    if (productId) {
      router.push(`/products/product?productId=${productId}`);
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center mt-5 mx-auto px-4 gap-8 md:gap-16 lg:gap-32 w-full" style={{ minHeight: '4rem' }}>
      {imageInfoArray.map((imageInfo, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center p-5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 cursor-pointer"
          onClick={() => handleImageClick(imageInfo.imageUrl)}
        >
          <div className="relative w-full flex justify-center items-center overflow-hidden gap-8 md:gap-16">
            <div className="absolute inset-0 w-150 h-150 flex justify-center items-center overflow-hidden rounded-full">
              <Image
                src={imageInfo.backround}
                alt={`Background for ${imageInfo.imageTitle}`}
                style={{ objectFit: "cover", width: '100%', height: '100%' }}
                className="rounded-full opacity-80"
              />
            </div>
            <div className="relative w-150 h-150 flex justify-center items-center overflow-hidden rounded-full z-10">
              <Image
                src={imageInfo.imageUrl}
                alt={imageInfo.imageTitle}
                style={{ objectFit: "cover", width: '100%', height: '100%' }}
                className="rounded-full"
              />
            </div>
          </div>
          <div className="mt-3 text-center" style={{ minHeight: '4rem' }}>
            <h2 className={`text-lg font-semibold ${textColor}`}>
              {imageInfo.imageTitle}
            </h2>
            <p className={`text-sm ${textColor}`}>
              {imageInfo.imageDescription}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export type { ImageInfo };
