import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

import wrapper from "../store/configureStore";

const NodeBird = ({Component}) => {
    return (
        <>
            {/*<div>공통 메뉴</div>*/}
            <Head>
                <meta charSet="utf-8"/>
                <title>NodeBird</title>
            </Head>
            <Component/>
        </>
    );
};

NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(NodeBird);

// 모든 페이지에서 공통인 경우
// _app.js는 pages들의 공통 부분입니다.