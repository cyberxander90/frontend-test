import './image-selector.scss';

export const ImageSelectorComponent = {
    template: require('./image-selector.html'),
    bindings: {
        imageUrl: '<',
        onImageUrlUpdated: '&',
        notEditable: '<'
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
            // todo. this must validate the url
            return true;
        }
    }
};