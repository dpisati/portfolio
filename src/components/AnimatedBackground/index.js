import { useTheme } from 'next-themes';
import React, { useEffect } from 'react';

import styles from './styles.module.css';

export default function AnimatedBackground() {
    return (
        <div className={styles.area}>
            <div className={styles.circles}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </div>
        </div>
    );
}
