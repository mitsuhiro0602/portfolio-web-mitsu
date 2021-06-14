import Bar from "../components/Bar";
import { languages, tools } from '../data';

const resume = () => {
  return (
    <div className="px-6 py-2">
      {/* educatiuon & exp */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Computer Sience Engineering</h5>
            <p className="font-semibold">Academy of Technology(2017-2021)</p>
            <p className="my-3">
              I am currently pursuing 8.tech in computer science Engineering from academy of technology
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Software Engineer Jr.</h5>
            <p className="font-semibold">TCS(2021-on)</p>
            <p className="my-3">
              I don't know why I am dogin this job 
            </p>
          </div>
        </div>
      </div>
      {/* Language & tool */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map(Language=>(
              <Bar data={Language} key={Language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map(tool=>(
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default resume
