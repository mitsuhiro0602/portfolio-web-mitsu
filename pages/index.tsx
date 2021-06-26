import {
  GetServerSidePropsContext,
  GetStaticPropsContext,
  NextPage
} from 'next';
import ServiceCard from '../components/ServiceCard';
import { services } from "../data";
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation, stagger } from '../animations';
import Head from 'next/head';
import Contact from '../components/Contact';


const About = ({endpoint}) => {
  // console.log(endpoint)
  return (
    <motion.div
      variants={routeAnimation} 
      initial="animate"
      exit="exit"
      className="flex flex-col flex-grow px-6 pt-1"
    >
      <Head>
        <title>
          Mitsuhiro Ookochi ポートフォリオ
        </title>
      </Head>
      <h6 className="my-3 text-base font-medium">
        <p>ただオシャレなサイトを作るのではなく、お客様の思いの伝わるデザイン、</p>
        <p>そしてコンバージョンに繋がるデザイン設計をして制作いたします。</p><br />
        <p>オウンドメディアの構築からLステップやメルマガを使った売り上げに直結する導線、</p>
        <p>お客様を惹きつける文章テクニックを使って売り上げアップに貢献します。</p>
      </h6>
      <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
        <h4 className="my-3 text-xl font-bold">私ができること</h4>
        <motion.div 
          className="grid gap-6 lg:grid-cols-2" 
          variants={stagger} 
          initial="initial" 
          animate="animate"
        >
          {/* children's initial and animate property should be same as the parent during a stagger effect */}
          {services.map((service) => (
            <motion.div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              variants={fadeInUp}
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="col-span-2 p-2 py-4 pl-6 my-4 rounded-lg pybg-gray-200 dark:bg-dark-200 md:col-span-1 lg:px-88"
          variants={fadeInUp}
        >
          <Contact/>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About;

export const getServersideProps = async(
  context: GetServerSidePropsContext
) => {
  return { props: { endpoint: process.env.VERCEL_URL }};
};