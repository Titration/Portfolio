import Link from 'next/link';
import { formatDate } from 'app/blog/utils'

export function PaperPosts() {
  const allPapers = [
    {
        title: 'A Comprehensive Review of Deep Neural Networks for Dynamic Hand Gestures Recognition',
        slug: 'A%20Comprehensive%20Review%20of%20Deep%20Neural%20Networks%20for%20Dynamic%20Hand%20Gestures%20Recognition.pdf',
        createdAt: '2023-03-01'
    },
    {
        title: 'A self-adaptive solution for accelerating trading strategies using JIT',
        slug: 'A%20self-adaptive%20solution%20for%20accelerating%20trading%20strategies%20using%20JIT.pdf',
        createdAt: '2023-12-03'
    },
    {
        title: 'Dynamic Hand Gesture Recognition using a Lightweight 3D CNN Model',
        slug: 'Dynamic%20Hand%20Gesture%20Recognition%20using%20a%20Lightweight%203D%20CNN%20Model.pdf',
        createdAt: '2023-04-12'
    },
    {
        title: 'Predicting warm efficiency of insulation materials in actual space based on data collected by intelligent temperature control system',
        slug: 'Predicting%20warm%20efficiency%20of%20insulation%20materials%20in%20actual%20space%20based%20on%20data%20collected%20by%20intelligent%20temperature%20control%20system.pdf',
        createdAt: '2022-12-11'
    },
    {
        title: 'Undergraduate Honours Thesis',
        slug: 'Undergraduate Honours Thesis.pdf',
        createdAt: '2019-09-14'
    },
    {
      title: 'From theory to practice: insights and hurdles in collecting social media data for social science research',
      slug: "external-paper",
      createdAt: "2024-05-29",
      externalLink: "https://www.frontiersin.org/journals/big-data/articles/10.3389/fdata.2024.1379921/full"
    },
  ];

  return (
    <div>
      {allPapers
        .sort((a, b) => {
            if (
              new Date(a.createdAt) > new Date(b.createdAt)
            ) {
              return -1
            }
            return 1
          })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            target="_blank"
            href={post.externalLink ? post.externalLink : `/paper/${decodeURIComponent(post.slug)}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(post.createdAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
