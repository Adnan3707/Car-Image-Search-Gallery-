import React from 'react';
import ImageCard from './ImageCard';
import 'E:/pics/src/components/ImageList.css'

const ImageList = props => {
    console.log(props.images)
    const images = props.images.map(image => {
        // eslint-disable-next-line jsx-a11y/alt-text
        return (
            //   <img alt={props.description} key={image.id} src={image.urls.regular} />
            <ImageCard key={image.id} image={image} />
        )
    });
    return (
        <div className='image-list'>{images}</div>
    )
};
export default ImageList;