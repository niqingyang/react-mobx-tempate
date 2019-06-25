import React from 'react';
import styles from './index.less';

function BasicLayout(props) {
    const {children} = props;

    return (
        <div className={styles.normal}>
            <h1 className={styles.title}>Hello! Welcome</h1>
            {children}
        </div>
    );
}

export default BasicLayout;