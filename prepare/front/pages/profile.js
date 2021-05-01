import React from 'react';
import Head from "next/head";

import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
    const followerList = [{nickname: 'jyryu'}, {nickname: 'itpro'}, {nickname: '노드버드오피셜'}];
    const followingList = [{nickname: 'jyryu'}, {nickname: 'itpro'}, {nickname: '노드버드오피셜'}];

    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="유저검색" data={followingList} />
                <FollowList header="물건검색" data={followerList} />
            </AppLayout>
        </>
    );
}

export default Profile;