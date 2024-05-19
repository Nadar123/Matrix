/* eslint-disable no-restricted-globals */
import { expose } from 'comlink';

class ImageLoader {
  async loadImage(imageUrl: string): Promise<string> {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const imageObjectURL = URL.createObjectURL(blob);
    return imageObjectURL;
  }
}

const imageLoaderInstance = new ImageLoader();
expose(imageLoaderInstance, self as any);
/* eslint-enable no-restricted-globals */
