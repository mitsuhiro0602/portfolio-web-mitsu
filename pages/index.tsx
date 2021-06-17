import {
  GetServerSidePropsContext,
  GetStaticPropsContext,
  NextPage
} from 'next';
import ServiceCard from '../components/ServiceCard';
import { services } from "../data";
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation, stagger } from '../animations';


const About = ({endpoint}) => {
  console.log(endpoint)
  return (
    <motion.div 
      variants={routeAnimation} 
      initial="animate"
      exit="exit"
      className="flex flex-col flex-grow px-6 pt-1"
    >
      <h6 className="my-3 text-base font-medium">
        I am currently pursuring B.Tech Degree(Final Year) in Cimputer
        Science Engineering from Academy of Technology. I have 3+ years of
        experience Engineering from Academy of Technoloy. I have a Youtube Channel
        Where I teach Full Stack Web Development
      </h6>
      <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
        <h4 className="my-3 text-xl font-bold">What I offer</h4>
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
      </div>
    </motion.div>
  )
}

export default About;

// !called every time the page refreshed
export const getServersideProps = async(
  context: GetServerSidePropsContext
) => {
  // console.log(process.env.VERCEL_URL)
  
  // // calculation
  // const res = await fetch(`${process.env.VERCEL_URL}/api/services`)
  // const data = await res.json()
  return { props: { endpoint: process.env.VERCEL_URL }};
};

// !called only during the build of the project
// export const getStaticProps = async(
//   context: GetStaticPropsContext
// ) => {
  
//   // calculation
//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   console.log('SERVER', services)

//   return {
//     props: {
//       services: data.services,
//     },

//   }
// }
