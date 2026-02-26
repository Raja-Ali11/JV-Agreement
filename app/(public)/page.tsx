'use client';
import { UserPlus, Handshake, ChartLine, Home, HandCoins } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LandImg from '../../public/landImg.jpg';
import LandImg1 from '../../public/landImg1.jpg';
import LandImg2 from '../../public/landImg2.jpg';

export default function Page() {
  const navlinks = [
    {name: "Home", path: "#home"},
    {name: "How It Works", path: "#works"},
    {name: "Featured", path: "#featured"},
    {name: "About", path: "#about"},
  ]
  

  const workSteps = [
    {icon: <UserPlus/> ,title: "Step 1: Register", description: "Create your account as a landowner or investor. Complete your profile and verify your details to get started."},
    {icon: <Handshake/> ,title: "Step 2: Connect", description: "Landowners list their land opportunities, and investors explore potential projects that match their interests."},
    {icon: <ChartLine/> ,title: "Step 3: Grow", description: "Finalize partnerships, invest securely, and grow profitable ventures together with confidence."},
  ]

  const benefits = [
    {icon: <Home/> ,title: "For Landowners", points: [
      "Unlock the value of your land without selling it",
      "Access verified investors ready to partner with you",
      "Receive funding for development projects",
      "Transparent process with legal support and guidance",
    ]},
    {icon: <HandCoins /> ,title: "For Investors", points: [
      "Discover verified land opportunities with strong potential",
      "Choose projects aligned with your investment goals",
      "Diversify your portfolio with land-based investments",
      "Secure deals with trusted landowners and clear terms"
    ]},
  ]

  const featuredLands = [
    {catg:"Residential", img:LandImg, title: "5 Acre Residential Plot", des: "Prime residential land suitable for housing projects and gated communities.", location: "Islamabad, PK", price: "PKR 950,000"},
    {catg:"Commercial", img:LandImg1, title: "10 Acre Commercial Land", des: "Strategically located commercial land ideal for retail and office spaces.", location: "Lahore, PK", price: "PKR 2,500,000"},
    {catg:"Agricultural", img:LandImg2, title: "15 Acre Agricultural Land", des: "Fertile agricultural land perfect for farming and agribusiness ventures.", location: "Multan, PK", price: "PKR 1,200,000"},
  ]

  return(
    <>
    <header className="sticky top-0 flex justify-between items-center py-4 px-12 bg-white shadow-xl">
      <h2 className="font-bold text-xl">Land Venture</h2>

      <nav className="space-x-4">
        {navlinks.map((link, idx) => (
          <Link key={link.name} href={link.path}
          className="text-gray-500 hover:text-gray-900 font-semibold"
          >
            {link.name}</Link>
        ))}
      </nav>

      <div className="font-semibold space-x-4">
        <Link href="/login" className="text-gray-500 hover:text-gray-900">Sign in</Link>
        <Link href="/register" className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-1000">Get Started</Link>
      </div>
    </header>
    
    <div id="home" className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="text-center space-y-6 px-4 max-w-3xl">
        <h3 className="text-5xl font-bold leading-tight">Connect Landowners with Investors for Profitable Ventures</h3>
        <p className="text-gray-600 mb-2 ">A trusted platform to bring landowners and investors together to unlock new opportunities in real estate and land development.</p>
        <div className="flex gap-6 justify-center mt-6 font-semibold">
          <Link href="/register" className="bg-green-900 rounded-lg text-white px-4 py-2 rounded hover:bg-green-1000">Get Started Today</Link>
          <Link href="#about" className="px-4 py-2 border-2 rounded-lg border-green-900 text-green-800 hover:bg-green-900 hover:text-white">Learn More</Link>
        </div>
      </div>
    </div>

    <div id="work" className="mx-auto py-16 px-16 space-y-12 bg-gray-50">
      <div>
        <h2 className="text-4xl font-bold text-center mb-4">How It Works</h2>
        <p className="max-w-3xl mx-auto text-center text-gray-600 px-4">
          Simple steps to connect, invest, and grow your land development journey.        
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {workSteps.map((step, idx)=>(
          <div key={idx} className="p-6 bg-white rounded-xl shadow-lg text-center space-y-4">
            <p className="p-4 mb-2 border-b-4 border-green-900 bg-green-800/10 rounded-full text-green-800 inline-block">{step.icon}</p>
            <h3 className="font-bold text-xl">{step.title}</h3>
            <p className="text-gray-500">{step.description}</p>
          </div>
        ))}
      </div>
    </div>

    <div id="about" className="py-16 px-16 space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-center mb-4">Benefits for Everyone</h2>
        <p className="max-w-3xl mx-auto text-center text-gray-600 px-4 mb-8">
          Whether you own land or want to invest, our platform helps you succeed.        
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="p-6 rounded-xl bg-green-800/10">
            <div className="flex gap-4 items-center mb-4">
              <p className="p-3 bg-green-800 text-white rounded-lg inline-block">{benefit.icon}</p>
              <h3 className="text-xl font-bold">{benefit.title}</h3>
            </div>              
            <ul className="list-disc list-inside space-y-2 marker:text-green-900">
                {benefit.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
            </ul>

          </div>
        ))}
      </div>
    </div>

    <div id="featured" className="py-16 px-16 bg-gray-50 space-y-12">
      <div className="space-y-2">
        <h2 className="text-4xl font-bold px-4 mb-4">Featured Land Opportunities</h2>
        <p className="max-w-3xl text-gray-600 px-4">Explore top land opportunities ready for development.</p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {featuredLands.map((land, idx) => (
          <div key={idx} className="max-w-300px bg-white rounded-lg">
            <Image src={land.img} alt={land.title} width={200} height={200} className="rounded-lg mb-4 w-full h-55"/>
            <div className="p-4">
              <span className="flex justify-between">
                <span className="bg-green-900 text-white px-2 py-1 rounded-lg text-sm font-semibold">{land.catg}</span>
                <span className="text-md text-gray-700 font-semibold ml-4">{land.location}</span>
              </span>
              <h3 className="font-bold mt-2">{land.title}</h3>
              <p className="text-gray-600 mb-2">{land.des}</p>
              <p>
                <span className="font-bold text-green-900">Price: </span>{land.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="py-16 px-16 space-y-12 flex items-center justify-center text-center border-b-8 border-green-900">
      <div className="space-y-4 max-w-2xl">
        <h3 className="text-4xl font-bold">Ready to Start Your Journey?</h3>
        <p className="text-gray-500 font-semibold">Join thousands of landowners and investors who are building successful land ventures together.</p>
        <div className="mt-6 space-x-4 font-semibold">
          <Link href="/register" className="bg-green-900 rounded-lg text-white px-4 py-2 rounded hover:bg-green-1000">Get Started Now</Link>
          <Link href="#about" className="px-4 py-2 border-2 rounded-lg border-green-900 text-green-800 hover:bg-green-900 hover:text-white">Learn More</Link>
        </div>
      </div>
    </div>
    </>
  )
}