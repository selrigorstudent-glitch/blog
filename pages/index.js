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
          Hi! I&apos;m Sean, an Information Technology student who enjoys
          exploring technology, DJing, riding motorcycles, and listening to
          music. In my free time, I make song remixes, ride around the city,
          and go hunting for new music &mdash; especially classic rock, emo,
          and punk, with artists like MCR, Fall Out Boy, and Bryan Adams on
          repeat. My favorite food is anything sweet, spicy, and savory all
          at once &mdash; something I could never get tired of. In five
          years, I see myself working successfully in the IT industry,
          building my skills and experience, creating meaningful projects,
          and pursuing a career that lets me keep growing while doing the
          things I love.
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
