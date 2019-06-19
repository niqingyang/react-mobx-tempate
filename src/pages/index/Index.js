import React from 'react';
import {inject, observer} from "mobx-react";
import classnames from 'classnames';
import styles from './index.less';

@inject(({stores: {intl}}) => ({intl}))
@observer
class Index extends React.Component {
    render() {
        const {intl: {formatMessage}} = this.props;

        return (
            <div className={classnames(styles.indexBg, 'bg')}>
                <h1>{formatMessage({id: 'index.welcome'})}</h1>
            </div>
        );
    }
}

export default Index;