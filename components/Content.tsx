import Link from 'next/link';
import React from 'react';
import NewWebtoon from './NewWebtoon';
import AllWebtoon from './AllWebtoon';
import MultiCarousel from './MultiCarousel';

interface Props {
    newWebtoon: WebtoonProject.newWebtoon[];
}

const Content = ({ newWebtoon }: Props) => {
    return (
        <>
            <main className="container custom-container">
                <div>
                    <MultiCarousel>
                        {newWebtoon.map((webtoon) => (
                            <NewWebtoon key={webtoon.webtoonId} webtoon={webtoon} />
                        ))}
                    </MultiCarousel>
                </div>
                <article>
                    <AllWebtoon />
                </article>
            </main>
        </>
    );
};

export default Content;
