import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/" key={'main'}>
                        <strong>Logo</strong>
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href="/webtoon/days" key={'days'}>
                        요일별
                    </Link>
                </li>
                <li>
                    <Link href="/webtoon/genre" key={'genre'}>
                        장르별
                    </Link>
                </li>
                <li>
                    <Link href="/mypage" key={'mypage'} role="button">
                        마이페이지
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
