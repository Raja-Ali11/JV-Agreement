
export default function Dashboard() {
  const stats = [
    {
      title: "Total Listed Lands",
      value: 12,
      subText: "+2 this month",
      color: "text-blue-600",
      gradient: "from-blue-500 to-blue-400",
    },
    {
      title: "Active Proposals",
      value: 7,
      subText: "3 pending review",
      color: "text-orange-500",
      gradient: "from-orange-500 to-orange-400",
    },
    {
      title: "Ongoing Deals",
      value: 4,
      subText: "$2.4M total value",
      color: "text-green-600",
      gradient: "from-green-500 to-green-400",
    },
  ];
  const listings = [
    {
      property: "Oakwood Farm",
      type: "Agricultural Land",
      location: "Austin, TX",
      size: "45 acres",
      price: "$850,000",
      status: "Active",
    },
    {
      property: "Riverside Plaza",
      type: "Commercial Development",
      location: "Dallas, TX",
      size: "12 acres",
      price: "$1,200,000",
      status: "In Deal",
    },
    {
      property: "Sunset Heights",
      type: "Residential Development",
      location: "Houston, TX",
      size: "28 acres",
      price: "$2,100,000",
      status: "Closed",
    },
    {
      property: "Valley Ranch",
      type: "Mixed Use",
      location: "San Antonio, TX",
      size: "67 acres",
      price: "$1,850,000",
      status: "Active",
    },
  ];
   const statusStyles: Record<string, string> = {
    Active: "bg-green-100 text-green-600",
    "In Deal": "bg-yellow-100 text-yellow-600",
    Closed: "bg-gray-200 text-gray-600",
  };



  return (
    <div className="bg-gray-50 py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Welcome Section */}
        <div className="mb-7">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            Welcome back, ALI
          </h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Here's what's happening with your land investments today.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl p-3 border border-gray-100 shadow-sm
              hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Top Gradient Line */}
             

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 text-sm">{item.title}</p>
                  <h3 className="text-xl font-bold text-gray-800 mt-1">
                    {item.value}
                  </h3>
                </div>

                <div
                  className={`w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 
                  group-hover:scale-110 transition`}
                >
                  <div className={`w-3 h-3 rounded-sm ${item.color} bg-current`} />
                </div>
              </div>

              <p className={`text-sm mt-2 font-medium ${item.color}`}>
                {item.subText}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 px-8">
      <div className="flex flex-col sm:flex-row gap-4">

        {/* Add New Land */}
        <button className="px-3 py-1.5 rounded-lg bg-blue-600 text-white font-medium 
        shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300">
          + Add New Land
        </button>

        {/* View Proposals */}
        <button className="px-3 py-1.5 rounded-lg border border-gray-300 
        bg-white text-gray-700 font-medium 
        hover:bg-gray-100 hover:shadow-sm transition-all duration-300">
          View Proposals
        </button>

        {/* Export Report */}
        <button className="px-3 py-1.5 rounded-lg border border-gray-300 
        bg-white text-gray-700 font-medium 
        hover:bg-gray-100 hover:shadow-sm transition-all duration-300">
          Export Report
        </button>

      </div>
    </div>
     <div className="bg-white mt-10 rounded-xl shadow-sm border border-gray-100 p-3">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-lg font-semibold text-gray-800">
          Recent Land Listings
        </h3>
        <button className="text-blue-600 text-sm font-medium hover:underline">
          View All
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          
          <thead className="text-gray-500 border-b">
            <tr>
              <th className="py-2">Property</th>
              <th>Location</th>
              <th>Size</th>
              <th>Listed Price</th>
              <th>Status</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {listings.map((item, index) => (
              <tr
                key={index}
                className="border-b last:border-none hover:bg-gray-50 transition"
              >
                {/* Property */}
                <td className="py-4 mx">
                  <div className="font-medium text-gray-800">
                    {item.property}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {item.type}
                  </div>
                </td>

                <td>{item.location}</td>
                <td>{item.size}</td>
                <td className="font-medium text-gray-800">
                  {item.price}
                </td>

                {/* Status */}
                <td>
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium ${statusStyles[item.status]}`}
                  >
                    {item.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="text-right">
                  <button className="text-blue-600 hover:underline text-sm font-medium">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>


    </div>
  );
};

