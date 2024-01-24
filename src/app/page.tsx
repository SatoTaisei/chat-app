import Image from 'next/image';

import { Card } from '@/components/Card';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Card
          heading={'Docs ->'}
          href={
            'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          }
          desc={'Find in-depth information about Next.js features and API.'}
        />
        <Card
          heading={'Learn ->'}
          href={
            'https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          }
          desc={
            'Learn about Next.js in an interactive course with&nbsp;quizzes!'
          }
        />
        <Card
          heading={'Templates ->'}
          href={
            'https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          }
          desc={'Explore the Next.js 13 playground.'}
        />
        <Card
          heading={'Deploy ->'}
          href={
            'https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          }
          desc={
            'Instantly deploy your Next.js site to a shareable URL with Vercel.'
          }
        />
      </div>
    </main>
  );
}
