import React from 'react';
import LazyLoad from 'react-lazyload';
import { CardPosterImageProps } from 'types/Poster'

class CardPosterImage extends React.Component<CardPosterImageProps> {

    static defaultProps: Partial<CardPosterImageProps> = {
        height: 250,
        width: 175
    }

    public render() {
        return <div>
            <LazyLoad height={this.props.height}>
                <img src={this.props.url} height={this.props.height} width={this.props.width} />
            </LazyLoad>
        </div>;
    }
}

export default CardPosterImage;
