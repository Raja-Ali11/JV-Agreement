'use client'
import { Building2, CircleCheckBig, Clock, Factory, Home, MapPinned, MoreVertical, Send, ShoppingBag, TreePine, Utensils } from "lucide-react"
import { useRouter } from "next/navigation";
import { use } from "react";

export default function InvestDashboard(){
    const getStatusColor = (status: string) => {
        const statusLower = status.toLowerCase();
        if (statusLower.includes('completed')) {
            return 'text-blue-600 p-2 bg-blue-300/20';
        } else if (statusLower.includes('active') || statusLower === 'accepted') {
            return 'text-green-600 p-2 bg-green-300/20';
        } else if (statusLower === 'pending') {
            return 'text-orange-600 p-2 bg-orange-300/20';
        } else if (statusLower === 'rejected') {
            return 'text-red-600 p-2 bg-red-300/20';
        }
        return 'text-gray-600';
    };

    const overviewData = [
        {
            title:"Total Proposal send",
            value: "12",
            icon:<Send/>,
            status:"completed"
        },
        {
            title:"Accepted Deals",
            value: "5",
            icon:<CircleCheckBig/>,
            status:"Active"
        },
        {
            title:"Pending Proposals",
            value: "3",
            icon:<Clock/>,
            status:"Pending"
        }
    ]

    const proposalData = [
        {
            property: "Downtown Plaza",
            type: "Commercial",
            icon: <Building2 size={20} />,
            location: "Austin, TX",
            investment: "$250,000",
            dateSent: "Jan 15, 2024",
            status: "Accepted"
        },
        {
            property: "Riverside Residences",
            type: "Residential",
            icon: <Home size={20} />,
            location: "Portland, OR",
            investment: "$180,000",
            dateSent: "Jan 18, 2024",
            status: "Pending"
        },
        {
            property: "Industrial Park West",
            type: "Industrial",
            icon: <Factory size={20} />,
            location: "Phoenix, AZ",
            investment: "$420,000",
            dateSent: "Jan 20, 2024",
            status: "Accepted"
        },
        {
            property: "Lakefront Mall",
            type: "Retail",
            icon: <ShoppingBag size={20} />,
            location: "Seattle, WA",
            investment: "$315,000",
            dateSent: "Jan 22, 2024",
            status: "Rejected"
        },
        {
            property: "Green Valley Land",
            type: "Land",
            icon: <TreePine size={20} />,
            location: "Denver, CO",
            investment: "$125,000",
            dateSent: "Jan 23, 2024",
            status: "Pending"
        },
        {
            property: "Sunset Hotel Project",
            type: "Hospitality",
            icon: <Utensils size={20} />,
            location: "Miami, FL",
            investment: "$580,000",
            dateSent: "Jan 25, 2024",
            status: "Pending"
        }
    ]

    const router = useRouter();

    return(
        <div className="space-y-6 bg-gray-50 px-12 py-8">
            <div>
                <h2 className="text-3xl font-bold pb-2">Welcome Back, Waqas</h2>
                <p className="text-gray-500">Here's your investment dashboard overview.</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {overviewData.map((item, idx) =>(
                    <div key={idx} className=" rounded-lg p-4 bg-white shadow-sm space-y-2">
                        <p className="flex justify-between text-center">
                            <span className={` ${getStatusColor(item.status)} rounded-md`}>{item.icon}</span>
                            <span className={`${getStatusColor(item.status)} rounded-full text-sm p-1`}>{item.status}</span>
                        </p>
                        <h2 className="font-bold text-2xl">{item.value}</h2>
                        <p className="text-gray-600 text-sm font-semibold">{item.title}</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-between items-center px-8 py-6 bg-blue-600 text-white rounded-xl">
                <div className="space-y-2">
                    <h2 className="font-bold text-3xl">Discover New Investment Opportunities</h2>
                    <p className="text-semibold">Explore the latest real estate deals and find your next investment.</p>
                    <button onClick={() => router.push("/lands")} className="px-4 py-2 mt-2 rounded-md cursor-pointer bg-white text-blue-600 font-semibold">Explore Lands</button>
                </div>
                <p className="text-gray-400 "><MapPinned size={130}/></p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Recent Proposals</h2>
                        <p className="text-gray-500 text-sm">Track the status of your investment proposals</p>
                    </div>
                    <button onClick={()=> router.push("/lands")} className="text-blue-600 cursor-pointer font-semibold text-sm hover:font-bold flex items-center gap-1">
                        View All →
                    </button>
                </div>

                <div className="grid grid-cols-[2fr_1.5fr_1fr_1fr_1fr_0.5fr] gap-4 pb-3 px-4 text-xs font-semibold bg-gray-100 py-4 text-gray-500 uppercase tracking-wide">
                    <div>Property</div>
                    <div>Location</div>
                    <div>Investment</div>
                    <div>Date Sent</div>
                    <div>Status</div>
                    <div>Action</div>
                </div>

                <div className="">
                    {proposalData.map((proposal, idx) => (
                        <div key={idx} className="grid grid-cols-[2fr_1.5fr_1fr_1fr_1fr_0.5fr] gap-4 py-4 px-4 items-center hover:bg-gray-50 border-b-1 border-gray-200">

                            <div className="flex items-center gap-3">
                                <div className="bg-gray-100 p-3 rounded-lg text-gray-600">
                                    {proposal.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">{proposal.property}</h3>
                                    <p className="text-sm text-gray-500">{proposal.type}</p>
                                </div>
                            </div>

                            <div className="text-gray-600">{proposal.location}</div>

                            <div className="font-semibold text-gray-800">{proposal.investment}</div>

                            <div className="text-gray-600">{proposal.dateSent}</div>

                            <div>
                                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(proposal.status)}`}>
                                    <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                                    {proposal.status}
                                </span>
                            </div>

                            <div className="flex justify-center">
                                <button className="text-gray-400 hover:text-gray-600">
                                    <MoreVertical size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}