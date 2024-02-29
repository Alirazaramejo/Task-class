import React from 'react'
import Header from './Components/Header/Header'
import Image from './Components/ImageComponent/Image'
import Text from './Components/Text/Text'
import Image1 from './assets/Image/img1.png'
import Image2 from './assets/Image/img2.webp'
import Banner from './Components/Banner/Banner'
import Card from './Components/Card/Card'
import OnlyText from './Components/OnlyText/OnlyText'
import Second from './Components/OnlyText/Second'
import GapCard from './Components/Card/Gap/GapCard'
import SecondLast from './Components/secondLast/SecondLast'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <div>
      <div className=" w-[1200px] m-auto">
     <Header/>
     <Banner/>
     <Image img={Image1}/>
   <Text text="I love making cool things and solving complex problems for people — like you."/>
   <Text text="I deliver impactful results through strategic thinking and data-driven insights."/>
   <Image img={Image2}/>
   <OnlyText/>
   <div className="flex flex-wrap gap-6">
  <Card num={"01"} heading={"Discovery"} para={"The first part of my process is about learning all about your industry."}/>
  <Card num={"02"} heading={"Strategy"} para={"Next, we’ll map an approach to meet your business’s design objectives."}/>
  <Card num={"03"} heading={"Wireframe"} para={"Depending on complexity, I’ll create wireframes to get alignment on the strategic direction, interactions, and the functional requirements."}/>
  <Card num={"04"} heading={"Design"} para={"I’ll explore the art direction and animation for the experience, ensuring it aligns with your target audience and brand personality."}/>
  <Card num={"05"} heading={"Build"} para={"Once the designs are finalized, I’ll partner with a creative developer to bring the vision to reality."}/>
  <Card num={"06"} heading={"Deliver"} para={"Lastly, I’ll compile and send the project assets and guidelines to you. On time and on budget."}/>
</div>

  <Second/>
  <div className='mt-3'>
  <GapCard para={"Crosby"} LeftText={"Senior UX Designer"} rightText={"(2021 – Present)"} para2={"Leading the design and strategy of Crosby's retail POS tool across mobile and in-store platforms."}/>
  <GapCard para={"Norman & Co"} LeftText={"Lead Product Designer"} rightText={"(2015 – 2021)"} para2={"Led the design and strategy of Norman & Co's core in-car experience, called Scout."}/>
  <GapCard para={"Gardona"} LeftText={"Product Designer"} rightText={"(2012 – 2015)"} para2={"Launched Gardona's e-scooter rental-sharing web app, and built a centralized evolution of design systems."}/>
  <GapCard para={"Freelance"} LeftText={"Product Designer"} rightText={"(2012 – 2015)"} para2={"Partnered with early stage startups to design product features, specializing in e-commerce experiences."}/>
  <div className='mt-10 flex justify-center'>
    <div className='flex space-x-5'>
      <button className='w-[166px] h-[52px] text-center bg-white text-black rounded-full font-semibold'>
        view work
      </button>
      <button className='w-[166px] h-[52px] text-center text-white rounded-full font-semibold outline-double hover:text-yellow-50'>
        view resume
      </button>
    </div>
  </div>
</div>

 
    </div>
    <SecondLast/>
    <Footer/>
    </div>
    
  )
}

export default App