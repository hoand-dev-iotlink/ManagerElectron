import Head from 'next/head';

export default function LayoutAccount({ children }) {
    return (
        <>
            <Head> <title>Phần mềm quản lý hệ thống điện</title> </Head>
            <main>{children}</main>
        </>
    );
};