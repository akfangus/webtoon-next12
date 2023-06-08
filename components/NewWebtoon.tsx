import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/carousel.module.scss';

type Props = {
    webtoon: WebtoonProject.newWebtoon;
};

const NewWebtoon = ({ webtoon: { author, fanCount, img, title, url, webtoonId } }: Props) => {
    return (
        <Link href={url}>
            <article className={styles.article}>
                <Image src={img} alt={title} width={200} height={300} priority />
            </article>
            <div className={styles.content}>
                <p>{title}</p>
                <span>{author}</span>
            </div>
        </Link>
    );
};

export default NewWebtoon;
