import Link from 'next/link';

import { getChatRoomList } from './actions';

export default async function Home() {
    const chatRoomList = await getChatRoomList();
    // const chatMessageList = await getChatMessageList();

    return (
        <ul>
            {chatRoomList.map((room) => (
                <li key={room.id}>
                    <Link href={''}>{room.name}</Link>
                </li>
            ))}
        </ul>
    );
}
