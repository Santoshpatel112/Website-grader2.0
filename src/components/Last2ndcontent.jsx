// import React from "react";

// const Lcontent = () => {
//   // Data for the table
//   const data = [
//     {
//       category: "Performance",
//       items: [
//         {
//           performance: "Page requests",
//           current: "278",
//           recommendation:
//             "Reduce the number of HTTP requests your site makes. Remove any unnecessary images, scripts, or files, and consider lazy loading your images.",
//         },
//         {
//           performance: "Page speed",
//           current: "9.9Sec",
//           recommendation:
//             "Speed up your site by lightening up your site pages, compressing images and video where possible.",
//         },
//       ],
//     },
//     {
//       category: "Mobile",
//       items: [
//         {
//           performance: "Legible Font Size",
//           current: "No",
//           recommendation:
//             "Increase the font size of some of your text so at least 60% of the page has a font size of 12px or larger.",
//         },
//         {
//           performance: "Tap Targets",
//           current: "No",
//           recommendation:
//             "Tap targets (e.g., links and buttons) should be at least 8px apart from each other, and at least 48px wide and 48px tall so they are clickable for mobile users.",
//         },
//         {
//           performance: "Responsive",
//           current: "No",
//           recommendation:
//             "Give your site the gift of responsive design by using the Mycto Website Platform.",
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="max-w-6xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold text-center mb-6">What should I do next?</h1>
//       {data.map((section, index) => (
//         <div key={index} className="mb-8">
//           <h2 className="text-xl font-semibold text-gray-700 mb-4">{section.category}</h2>
//           <div className="overflow-x-auto">
//             <table className="table-auto w-full border-collapse border border-gray-200">
//               <thead>
//                 <tr className="bg-blue-500 text-white">
//                   <th className="px-4 py-2 text-left">Performance</th>
//                   <th className="px-4 py-2 text-left">Current</th>
//                   <th className="px-4 py-2 text-left">Recommendation</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {section.items.map((item, idx) => (
//                   <tr key={idx} className="odd:bg-white even:bg-gray-100">
//                     <td className="border px-4 py-2 font-medium text-gray-700">
//                       {item.performance}
//                     </td>
//                     <td className="border px-4 py-2 text-gray-600">{item.current}</td>
//                     <td className="border px-4 py-2 text-gray-600">{item.recommendation}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Lcontent;




import React from "react";

const Lcontent = () => {
  // Data for the table
  const data = [
    {
      category: "Performance",
      items: [
        {
          performance: "Page requests",
          current: "278",
          recommendation:
            "Reduce the number of HTTP requests your site makes. Remove any unnecessary images, scripts, or files, and consider lazy loading your images.",
        },
        {
          performance: "Page speed",
          current: "9.9Sec",
          recommendation:
            "Speed up your site by lightening up your site pages, compressing images and video where possible.",
        },
      ],
    },
    {
      category: "Mobile",
      items: [
        {
          performance: "Legible Font Size",
          current: "No",
          recommendation:
            "Increase the font size of some of your text so at least 60% of the page has a font size of 12px or larger.",
        },
        {
          performance: "Tap Targets",
          current: "No",
          recommendation:
            "Tap targets (e.g., links and buttons) should be at least 8px apart from each other, and at least 48px wide and 48px tall so they are clickable for mobile users.",
        },
        {
          performance: "Responsive",
          current: "No",
          recommendation:
            "Give your site the gift of responsive design by using the Mycto Website Platform.",
        },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-white mb-6">What should I do next?</h1>
      {data.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-semibold text-gray-200 mb-4">{section.category}</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-700">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-4 py-2 text-left">Performance</th>
                  <th className="px-4 py-2 text-left">Current</th>
                  <th className="px-4 py-2 text-left">Recommendation</th>
                </tr>
              </thead>
              <tbody>
                {section.items.map((item, idx) => (
                  <tr key={idx} className="odd:bg-gray-900 even:bg-gray-700">
                    <td className="border px-4 py-2 font-medium text-gray-300">
                      {item.performance}
                    </td>
                    <td className="border px-4 py-2 text-gray-400">{item.current}</td>
                    <td className="border px-4 py-2 text-gray-400">{item.recommendation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lcontent;
