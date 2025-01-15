import { useState, useEffect } from "react";

export function useAssetImage(imageName: string) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    async function loadImage() {
      try {
        const imageModule = await import(`@/assets/${imageName}`);
        setImageSrc(imageModule.default);
      } catch (error) {
        setImageSrc(null);
      }
    }

    loadImage();
  }, [imageName]);

  return imageSrc;
}
