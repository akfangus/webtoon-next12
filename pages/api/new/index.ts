// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse<WebtoonProject.newWebtoon>) {
    console.log('new api');
    const webtoons = await fetch(`${process.env.NEXT_PUBLIC_OPEN_URL}?service=kakao`) //
        .then((response) => response.json());

    console.log('api call:', webtoons);

    res.status(200).json(webtoons.webtoons);
}
