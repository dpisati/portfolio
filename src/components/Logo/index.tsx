import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTheme } from 'next-themes';

import styles from './styles.module.css';

export default function Logo() {
    const { resolvedTheme } = useTheme();

    let src: string;

    switch (resolvedTheme) {
        case 'light':
            src = '/logo.svg';
            break;
        case 'dark':
            src = '/logoDark.svg';
            break;
        default:
            src =
                'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
            break;
    }

    return (
        <Link href="/" passHref>
            <div className={styles.logo}>
                <Image
                    src={src}
                    alt="Logo"
                    width={82}
                    height={46}
                    layout="responsive"
                    priority={true}
                />
            </div>
        </Link>
    );
}
