import React from "react";
import { Image } from "@nextui-org/react";

type RectangleImageInfo = {
  imageUrl: string;
  imageTitle: string;
  imageDescription: string;
};

type RectangleImageInfoProps = {
  imageInfoArray: RectangleImageInfo[];
  textColor: string; // Propiedad adicional para el color del texto
};

const ThreeRectangleImageGallery: React.FC<RectangleImageInfoProps> = ({ imageInfoArray, textColor }) => {
  return (
    <div className="flex flex-wrap justify-center items-center mt-5 mx-auto px-4 gap-8 md:gap-16 lg:gap-32 w-full">
      {imageInfoArray.map((imageInfo, index) => (
        <div key={index} className="flex flex-col items-center p-5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="bg-gray-200 p-4 rounded-md shadow-lg w-full flex flex-col items-center">
            <div className="w-full h-64 flex justify-center items-center overflow-hidden rounded-md mb-4">
              <Image
                src={imageInfo.imageUrl}
                alt={imageInfo.imageTitle}
                style={{ objectFit: "cover", width: '100%', height: '100%' }}
                className="rounded-md"
              />
            </div>
            <div className="text-center" style={{ minHeight: '4rem' }}>
              <h2 className={`text-lg font-semibold ${textColor}`}>
                {imageInfo.imageTitle}
              </h2>
              <p className={`text-sm ${textColor}`}>
                {imageInfo.imageDescription}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThreeRectangleImageGallery;
export type { RectangleImageInfo };
