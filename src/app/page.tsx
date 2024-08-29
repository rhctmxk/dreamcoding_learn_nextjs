import React from 'react';
import Counter from "../app/components/Counter";
import os from 'os';
import Image from "next/image";

export default function Home() {
    console.log('안녕 - 서버');
    console.log(os.hostname());

    return (
        <>
            <h1>홈페이지다!! 버전 4</h1>
            <Counter />
            <Image src="https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='shop'
            width={400} height={400}
            />
        </>
    );
}