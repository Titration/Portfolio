import { BlogPosts } from 'app/components/posts'
import { PaperPosts } from 'app/components/posts_papers';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        I'm <b>Shan Xue</b>, a recent graduate with a Master's degree in Electrical and Computer Engineering from the University of Waterloo.
      </p>
      <p>
        My interests include <b>deep learning</b>, <b>computer vision</b>, <b>LLM</b>, <b>cloud computing</b>, with a focus on practical applications. I have contributed to academic publications and projects in <b>deep learning</b>, driven by a passion for innovation and the intersection of technology and efficiency. I am continually seeking new opportunities to apply my expertise to solve complex challenges.
      </p>
      <div className="my-8">
        <BlogPosts />
        <div className="font-semibold text-2xl mb-8 tracking-tighter">My Papers</div>
        <PaperPosts />
      </div>
    </section>
  )
}
