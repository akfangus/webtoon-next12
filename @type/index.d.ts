/* eslint-disable camelcase */
declare namespace WebtoonProject {
    export type newWebtoon = {
        _id: string;
        webtoonId: number;
        title: string;
        author: string;
        url: string;
        img: string;
        service: string;
        updateDays: string[];
        fanCount: number | null;
    };
}
