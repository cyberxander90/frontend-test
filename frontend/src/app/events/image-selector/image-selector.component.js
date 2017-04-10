import './image-selector.scss';

export const ImageSelectorComponent = {
    template: require('./image-selector.html'),
    bindings: {
        imageUrl: '<',
        onImageUrlUpdated: '&'
    },
    controller: class ImageSelectorComponent{

        changed(){
            this.onImageUrlUpdated({
                $event: {
                    imageUrl: this.imageUrl,
                    isValid: this.isValidUrl(this.imageUrl)
                }
            });
        }

        isValidUrl(url){
            // todo
            return true;
        }
    }
};