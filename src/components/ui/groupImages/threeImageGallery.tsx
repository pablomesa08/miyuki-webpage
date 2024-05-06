import { Image } from "@nextui-org/react";

type ImageInfo = {
  imageUrl: string;
  imageTitle: string;
  imageDescription: string;
};

type ImageInfoProps = {
  imageInfoArray: ImageInfo[];
};

export default function ThreeImageGallery({ imageInfoArray }: Readonly<ImageInfoProps>) {
  return (
    <div className="flex flex-wrap justify-center items-start mt-5 gap-20 w-full">
      {imageInfoArray.map((imageInfo, index) => (
        <div key={index} className="flex flex-col items-center w-1/3 px-4 py-2">
          <div className="w-full flex justify-center items-center overflow-hidden">
            <div className="w-200 h-200 flex justify-center items-center overflow-hidden rounded-full"> {/* Mantén el tamaño de los círculos */}
              <Image
                src={imageInfo.imageUrl}
                alt={imageInfo.imageTitle}
                width="100%"
                height="100%"
                className="rounded-full"
                style={{ objectFit: 'cover' }}  // Asegúrate de que las imágenes cubran el contenedor completamente
              />
            </div>
          </div>
          <div className="mt-3" style={{ minHeight: '4rem' }}> {/* Altura mínima para el contenedor de texto */}
            <h2 className="text-lg text-center font-semibold">
              {imageInfo.imageTitle}
            </h2>
            <p className="text-sm text-center">
              {imageInfo.imageDescription}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}



export type { ImageInfo };
