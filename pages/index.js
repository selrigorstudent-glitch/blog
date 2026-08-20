import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi! I&apos;m Sean, an Information Technology student who likes
          to explore the world of technology, go DJing, motorcycling, and
          listening to music. In my free time, I enjoy creating remixes of
          songs, going on adventures in the city, and hunting for new
          music, especially old rock, emo, and punk songs, such as by
          MCR, Fall Out Boy, Bryan Adams, and others. My all-time
          favorite food is something sweet, spicy, and savory – a
          combination that I will never get tired of. In five years,
          I see myself working in the IT field, gaining experience and
          knowledge, creating amazing things, and pursuing a career
          that lets me keep growing while doing the things I love.
        </p>
        <p>
          (This is a sample website - you&apos;ll be building a site like
          this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
