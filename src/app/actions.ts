'use server';

import { collection, getDocs } from 'firebase/firestore';

import { db } from '@/lib/firebase/firebase';

export async function getChatRoomList() {
  const chatRoomList = [];
  const querySnapshot = await getDocs(collection(db, 'rooms'));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    chatRoomList.push({ id: doc.id, name: doc.data().name });
  });
  return chatRoomList;
}
