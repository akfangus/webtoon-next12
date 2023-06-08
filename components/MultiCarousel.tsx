import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from '../styles/carousel.module.scss';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
    },
};

type Props = {
    children: React.ReactNode;
};

const MultiCarousel = ({ children }: Props) => {
    return (
        <Carousel
            infinite
            autoPlay
            responsive={responsive}
            className={styles.carouselButton}
            // itemClass="carouselButton2"
        >
            {children}
        </Carousel>
    );
};

export default MultiCarousel;
