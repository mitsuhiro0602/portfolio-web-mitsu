import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import ServiceCard from '../components/ServiceCard';
import { services } from "../data";

const index = () => {
  console.log(services)
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        I am currently pursuring B.Tech Degree(Final Year) in Cimputer
        Science Engineering from Academy of Technology. I have 3+ years of
        experience Engineering from Academy of Technoloy. I have a Youtube Channel
        Where I teach Full Stack Web Development
      </h5>
      <div className="flex-grow p-4 mt-5 bg-gray-400"
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
        <h6 className="my-3 text-xl font-bold">What I offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div className="bg-gray-200 rounded-lg lg:col-span-1 ">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default index

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
