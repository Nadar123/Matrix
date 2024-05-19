import { useState, useEffect, useRef } from 'react';
import { wrap, releaseProxy } from 'comlink';

interface ImageLoader {
  loadImage: (url: string) => Promise<string>;
}
const useImageLoader = (url: string) => {
  const [imageObjectURL, setImageObjectURL] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const workerRef = useRef<Worker>();

  useEffect(() => {
    const worker = new Worker(
      new URL('../workers/imageLoader.worker', import.meta.url)
    );
    workerRef.current = worker;
  }, []);

  useEffect(() => {
    const loadImage = async () => {
      if (!workerRef.current) return;
      setIsLoading(true);
      const imageLoader = wrap<ImageLoader>(workerRef.current);
      const objectURL = await imageLoader.loadImage(url);
      setImageObjectURL(objectURL);
      setIsLoading(false);
      imageLoader[releaseProxy]();
    };

    loadImage();
  }, [url]);

  return { imageObjectURL, isLoading };
};

export default useImageLoader;
