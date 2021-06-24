import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation } from "../animations";
import Head from 'next/head';

const Contact = () => {
  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-6 py-2"
      >
      <Head>
        <title>
          レジュメ
        </title>
      </Head>
        
      {/* educatiuon & exp */}
      <div className="grid gap-6 md:grid-cols-1">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h4 className="my-3 text-3xl font-bold">お問い合わせ</h4>
          <div>
            <h5 className="my-2 text-xl font-bold">WEB制作 & マーケッター</h5>
            <p className="my-3">
              愛知県出身で大学から東京に上京しました。大学では電子情報を扱い、<br />
              様々なハードウェアの研究開発を行なっていました。<br /><br />
              大学の２年生からWEB制作を趣味で始め、<br />
              商品をセールスするためにはコピーライティング、マーケティングを学び、<br />
              マーケティグ会社へ就職しました。
              現在はWEB制作をしながら本業はSlerに<br />
              常駐し上流工程の設計をしています。
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Contact;