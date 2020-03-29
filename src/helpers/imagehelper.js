import { dist } from './constants'

class ImageHelper {
  static PathToImage (image) {
    return dist + '/' + image
  }
}

export default ImageHelper
