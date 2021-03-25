import React from 'react';
import Head from "next/head";
import AppLayout from "../components/AppLayout";

const Signup = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <title>회원가입 | NodeBird</title>
            </Head>
            <AppLayout>회원가입 페이지</AppLayout>
        </>
    );
}

export default Signup;