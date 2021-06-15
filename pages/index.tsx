import {
  GetServerSidePropsContext,
  GetStaticPropsContext,
  NextPage
} from 'next';
import ServiceCard from '../components/ServiceCard';
import { services } from "../data";
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../animations';


const About: NextPage = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        I am currently pursuring B.Tech Degree(Final Year) in Cimputer
        Science Engineering from Academy of Technology. I have 3+ years of
        experience Engineering from Academy of Technoloy. I have a Youtube Channel
        Where I teach Full Stack Web Development
      </h5>
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
    </div>
  )
}

export default About;

// export const getServersideProps = async(
//   context: GetServerSidePropsContext
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
