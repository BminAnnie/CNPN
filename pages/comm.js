import Head from 'next/head';
import Message from '../components/comm/Message';
import User from '../components/comm/User';
export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className="font-semibold text-5xl text-center text-gray-500 my-5">Message</h1>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-start-1 col-end-4">
                        <User />
                    </div>
                    <div className="col-span-9">
                        <Message />
                    </div>
                </div>
            </main>
        </div>
    );
}
