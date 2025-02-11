// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import LoadingPage from "./LoadingPage";

// const WebsiteGrader = () => {
//   const [showLanguageOptions, setShowLanguageOptions] = useState(false);
//   const [url, setUrl] = useState("");
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const [validationErrors, setValidationErrors] = useState({
//     url: "",
//     email: ""
//   });


//   const cards = [
//     {
//       title: "What is a website checker?",
//       content:
//         "A website checker is a mini site audit, giving you insight into how your website performs. A good website analyzer should audit your site across a range of criteria so you can get an idea of your overall performance, security, mobile experience, and search engine optimization (SEO). If you’re looking for next steps, read HubSpot’s Academy Course on Web Optimization to learn about the factors that are both improving and reducing your site rating.",
//     },
//     {
//       title: "How to optimize a website for SEO?",
//       content:
//         "There are some concrete steps you can take to optimize your site for SEO. Making sure your pages are indexed (viewable by search engines) is a great start. In addition, making full use of alt-tags and meta-data is advised. If you want to go further, try making sure you have descriptive link text and appropriate content plugins. And if you’re wondering where to start, getting your site’s SEO score is a great first step. It just so happens HubSpot’s website grader has a built-in SEO test!",
//     },
//     {
//       title: "Why is website performance important?",
//       content:
//         "Performance test matters because it is a key factor in user experience. When users get an immediate response, such as a click, a successful login, or confirmation, they are more likely to stay on the page. This fast response is commonly referred to as website speed. Search engines like Google check website speed and interactivity to make sure searchers only see high-quality sites. So beyond building a better user experience, speed tools help you make your site more attractive to search engines – win-win.",
//     },
//     {
//       title: "Why is website grading important?",
//       content:
//         "Test grading is important because it can help you build your site smarter and better while monitoring its health along the way. These site testers help show the impact of the steps you’re taking and areas for new opportunities by checking the pages of your website. It can also help you understand what your competitors are doing, and why they do it. Technical evaluation and general assessment are important in any site build. Doing both makes your site successful in the search results and beyond!",
//     },
//   ];


//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     // Define newValidationErrors object
//     const newValidationErrors = {
//       url: "",
//       email: ""
//     };

//     if(!url.trim()){
//       alert ("Please enter a URL");
//       setLoading(false);
//       return
//     }    

//     // Validation for Email using a simple regex pattern
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email.trim()) {
//       alert("Please enter an email address");
//       setLoading(false);
//       return;
//     }
//     if (!emailRegex.test(email.trim())) {
//       alert("Please enter a valid email address");
//       setLoading(false);
//       return;
//     }

//     // Set validation errors
//     setValidationErrors(newValidationErrors);

//     // Check if there are any validation errors
//     if (newValidationErrors.url || newValidationErrors.email) {
//       // Reset loading state and error if validation fails
//       setLoading(false);
//       setError(null);
//       return; // Stop form submission
//     }

//     setLoading(true);
//     setError(null);


//     try {
//       const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&category=performance&category=accessibility&category=seo&category=best-practices`;
      
//       const response = await fetch(apiUrl);

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       const lighthouseResult = data?.lighthouseResult;
//       if (!lighthouseResult) {
//         throw new Error("Lighthouse data is not available in the API response.");
//       }

//       const performanceScore = parseFloat((lighthouseResult.categories?.performance?.score * 100 || 0).toFixed(1));
//       const accessibilityScore = parseFloat((lighthouseResult.categories?.accessibility?.score * 100 || 0).toFixed(1));
//       const bestPracticesScore = parseFloat((lighthouseResult.categories?.["best-practices"]?.score * 100 || 0).toFixed(1));
//       const seoScore = parseFloat((lighthouseResult.categories?.seo?.score * 100 || 0).toFixed(1));

//       const resultData = {
//         url,
//         scores: {
//           aggregate: (performanceScore + accessibilityScore + bestPracticesScore + seoScore) / 4,
//           details: [
//             { label: "Performance", score: performanceScore, maxScore: 100, color: "red" },
//             { label: "Accessibility", score: accessibilityScore, maxScore: 100, color: "orange" },
//             { label: "Best Practices", score: bestPracticesScore, maxScore: 100, color: "blue" },
//             { label: "SEO", score: seoScore, maxScore: 100, color: "green" },
//           ],  
//         },
//       };

//       navigate("/lighthouse", { state: { analysisData: resultData } });
//     } catch (error) {
//       setError(`Failed to fetch performance data: ${error.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4 animate-fadeIn">
//       <div className="absolute top-4 right-4 flex items-end space-x-4 mb-5">
//         <div className="relative">
//           <button
//             className="flex items-center space-x-2 text-black rounded-3xl border-2 border-gray-500 hover:scale-105 transform transition-transform duration-300"
//             onClick={() => setShowLanguageOptions(!showLanguageOptions)}
//           >
//             English <span className="icon icon-angle-down"></span>
//           </button>
//           {showLanguageOptions && (
//             <ul className="absolute bg-white border rounded-md mt-2 w-40">
//               <li className="p-2">
//                 <a href="" className="text-black">Deutsch</a>
//               </li>
//               <li className="p-2 hover:bg-gray-100">
//                 <a href="">
//                   <span className="icon icon-check"></span> <div className="text-black">English</div>
//                 </a>
//               </li>
//               <li className="p-2 hover:bg-gray-100">
//                 <a href="" className="text-black">Español</a>
//               </li>
//               <li className="p-2 hover:bg-gray-100">
//                 <a href="" className="text-black">Français</a>
//               </li>
//               <li className="p-2 hover:bg-gray-100">
//                 <a href="" className="text-black">日本語</a>
//               </li>
//               <li className="p-2 hover:bg-gray-100">
//                 <a href="" className="text-black">Português</a>
//               </li>
//             </ul>
//           )}
//         </div>
//       </div>
//       <div className="w-full max-w-lg bg-gray-800 rounded-lg shadow-lg p-6" style={{border:"1px solid gray",backgroundColor:"#2D3E50"}}>
//         <div className="flex justify-center mb-4">
//           <img width="151px" alt="Website Grader" src="..\public\newlogo.png" />
//         </div>
//         <h1 className="text-5xl mb-5 text-center">Website Grader <sup>®</sup></h1>
//         <p className="text-lg mb-8 text-center">
//           Grade your website in seconds. Then learn how to improve it for free.
//         </p>
//         <form onSubmit={handleSubmit} className="mb-8">
//           <div className="mb-4">
//             <input
//               type="text"
//               value={url}
//               onChange={(e) => setUrl(e.target.value)} // set url viva state
//               placeholder="https://example.com"
//               className="p-3 w-full text-lg rounded-md border border-gray-300 bg-gray-800 text-white text-center focus:outline-none"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//              value={email}
//              onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter Your Email"
//               className="p-3 w-full text-lg rounded-md border border-gray-300 bg-gray-800 text-white text-center focus:outline-none"
//             />
//           </div>
//           <p className="text-sm text-white mt-2 text-center">
//             We are committed to your privacy. Mycto uses the information you provide to us to contact you about our relevant content, products, and services. You may unsubscribe from these communications at any time. For more information, check out our{" "}
//             <a href="" className="text-blue-500 underline">Privacy Policy</a>.
//           </p>
//           <button type="submit" className="py-3 px-8 bg-orange-600 text-white rounded-md hover:bg-orange-300 transition w-full mt-4 hover:scale-105 transform transition-transform duration-300">
//             Get your score
//           </button>
//         </form>
//         {loading && (
//           <div className="text-white text-lg mt-5 flex justify-center items-center">
//             <div className="loader flex justify-center items-center space-x-1">
//               {Array.from({ length: 15 }).map((_, index) => (
//                 <span key={index} className="w-3.5 h-3.5 bg-white rounded-full animate-bounce" style={{ animationDelay: `${index * 0.15}s` }}></span>
//               ))}
//             </div>
//           </div>
          
//         )}
//         {error && <div className="text-red-500 text-base mt-5">{error}</div>}
//       </div>
//       <section className="BottomFaq__OverviewSection flex items-center mb-6 mt-10">
//         <div className="overview flex-1">
//           <h2 className="overview-title text-2xl font-bold mb-2 text-gray-300">Get Your Website Rating in Seconds</h2>
//           <p className="overview-description text-gray-300">
//             Mycto tools free website grader makes understanding website performance easy. The hardest part of building a site is often the guesswork. Which changes are important, and which aren’t? It can sometimes feel impossible to tell. Our online grader demystifies the whole process. Learn about your page performance, security, search engine optimization (SEO), and mobile experience. Discover what makes your site strong and uncover new opportunities for the future.
//           </p>
//         </div>
//         <div className="overview-img flex-1 text-center pl-10">
//           <img loading="lazy" height="462" width="470" src="//static.hsappstatic.net/website-grader-ui/static-1.3755/img/website-performance-rating.jpg" alt="Webpage score after performing a free test with the Website Grader" className="max-w-full h-auto rounded-xl" style={{border:"1px solid gray"}} />
//         </div>
//       </section>

      
//       <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 ">
//       {cards.map((card, index) => (
//         <div
//           key={index}
//           className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all duration-2000 ease-in-out transform hover:scale-105 cursor-pointer" 
//         >
//           <h3 className="text-lg font-semibold mb-4 text-blue-600">{card.title}</h3>
//           <p className="text-gray-700 text-sm leading-relaxed">{card.content}</p>
//         </div>
        

//       ))}
//     </div>

//     </div>
    
//   );
// };

// export default WebsiteGrader;


// //  Update code



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FaGlobe, FaEnvelope, FaChevronDown, FaSpinner } from "react-icons/fa";
// import LoadingPage from "./LoadingPage";

// const WebsiteGrader = () => {
//   const [showLanguageOptions, setShowLanguageOptions] = useState(false);
//   const [url, setUrl] = useState("");
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const cards = [
//     {
//       title: "What is a website checker?",
//       content:
//         "A website checker is a mini site audit, giving you insight into how your website performs. It audits your site across various criteria for overall performance, security, mobile experience, and SEO.",
//     },
//     {
//       title: "How to optimize a website for SEO?",
//       content:
//         "To optimize for SEO, ensure your pages are indexed, use alt-tags and meta-data, have descriptive link text, and appropriate content plugins. Start by getting your site's SEO score with our built-in SEO test!",
//     },
//     {
//       title: "Why is website performance important?",
//       content:
//         "Website performance is crucial for user experience. Fast response times keep users engaged and improve search engine rankings. Speed tools help make your site more attractive to both users and search engines.",
//     },
//     {
//       title: "Why is website grading important?",
//       content:
//         "Website grading helps you build and monitor your site's health. It shows the impact of your improvements and identifies new opportunities. It also helps you understand and compete with your competitors' strategies.",
//     },
//   ];

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!url.trim()) {
//       setError("Please enter a URL");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email.trim() || !emailRegex.test(email.trim())) {
//       setError("Please enter a valid email address");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
//         url
//       )}&category=performance&category=accessibility&category=seo&category=best-practices`;

//       const response = await fetch(apiUrl);

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       const lighthouseResult = data?.lighthouseResult;
//       if (!lighthouseResult) {
//         throw new Error("Lighthouse data is not available in the API response.");
//       }

//       const performanceScore = parseFloat(
//         (lighthouseResult.categories?.performance?.score * 100 || 0).toFixed(1)
//       );
//       const accessibilityScore = parseFloat(
//         (lighthouseResult.categories?.accessibility?.score * 100 || 0).toFixed(1)
//       );
//       const bestPracticesScore = parseFloat(
//         (lighthouseResult.categories?.["best-practices"]?.score * 100 || 0).toFixed(1)
//       );
//       const seoScore = parseFloat(
//         (lighthouseResult.categories?.seo?.score * 100 || 0).toFixed(1)
//       );

//       const resultData = {
//         url,
//         scores: {
//           aggregate: (performanceScore + accessibilityScore + bestPracticesScore + seoScore) / 4,
//           details: [
//             { label: "Performance", score: performanceScore, maxScore: 100, color: "red" },
//             { label: "Accessibility", score: accessibilityScore, maxScore: 100, color: "orange" },
//             { label: "Best Practices", score: bestPracticesScore, maxScore: 100, color: "blue" },
//             { label: "SEO", score: seoScore, maxScore: 100, color: "green" },
//           ],
//         },
//       };

//       navigate("/lighthouse", { state: { analysisData: resultData } });
//     } catch (error) {
//       setError(`Failed to fetch performance data: ${error.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4 sm:p-6 md:p-8"
//     >
//       <div className="absolute top-4 right-4 z-10">
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="flex items-center space-x-2 bg-white text-gray-800 rounded-full px-4 py-2 text-sm font-medium"
//           onClick={() => setShowLanguageOptions(!showLanguageOptions)}
//         >
//           <span>English</span>
//           <FaChevronDown className={`transition-transform duration-300 ${showLanguageOptions ? 'rotate-180' : ''}`} />
//         </motion.button>
//         {showLanguageOptions && (
//           <motion.ul
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 text-gray-800"
//           >
//             {["English", "Deutsch", "Español", "Français", "日本語", "Português"].map((lang) => (
//               <motion.li
//                 key={lang}
//                 whileHover={{ backgroundColor: "#f3f4f6" }}
//                 className="px-4 py-2 text-sm cursor-pointer"
//               >
//                 {lang}
//               </motion.li>
//             ))}
//           </motion.ul>
//         )}
//       </div>

//       <motion.div
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.2 }}
//         className="w-full max-w-2xl bg-white rounded-lg shadow-2xl p-6 sm:p-8 md:p-10"
//       >
//         <div className="flex justify-center mb-6">
//           <img width="151" alt="Website Grader" src="/newlogo.png" className="h-12 sm:h-16" />
//         </div>
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center text-gray-800">
//           Website Grader <sup className="text-orange-500">®</sup>
//         </h1>
//         <p className="text-lg mb-8 text-center text-gray-600">
//           Grade your website in seconds. Then learn how to improve it for free.
//         </p>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="relative">
//             <FaGlobe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             <input
//               type="text"
//               value={url}
//               onChange={(e) => setUrl(e.target.value)}
//               placeholder="https://example.com"
//               className="pl-10 p-3 w-full text-lg rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//             />
//           </div>
//           <div className="relative">
//             <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter Your Email"
//               className="pl-10 p-3 w-full text-lg rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//             />
//           </div>
//           <p className="text-xs text-gray-500 mt-2 text-center">
//             We are committed to your privacy. MyCTO uses the information you provide to contact you about relevant content, products, and services. You may unsubscribe anytime. For more information, check out our{" "}
//             <a href="#" className="text-orange-500 hover:underline">
//               Privacy Policy
//             </a>
//             .
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             className="py-3 px-8 bg-orange-500 text-white rounded-md w-full text-lg font-medium transition-colors duration-300 hover:bg-orange-600"
//             disabled={loading}
//           >
//             {loading ? (
//               <FaSpinner className="animate-spin mx-auto" />
//             ) : (
//               "Get your score"
//             )}
//           </motion.button>
//         </form>
//         {error && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-red-500 text-sm mt-4 text-center"
//           >
//             {error}
//           </motion.div>
//         )}
//       </motion.div>

//       <motion.section
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4 }}
//         className="mt-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
//       >
//         <div className="grid md:grid-cols-2 gap-8 items-center">
//           <div>
//             <h2 className="text-3xl font-bold mb-4 text-white">Get Your Website Rating in Seconds</h2>
//             <p className="text-gray-300">
//               MyCTO's free website grader makes understanding website performance easy. Discover what makes your site strong and uncover new opportunities for improvement in page performance, security, SEO, and mobile experience.
//             </p>
//           </div>
//           <div className="mt-8 md:mt-0">
//             <img
//               src="//static.hsappstatic.net/website-grader-ui/static-1.3755/img/website-performance-rating.jpg"
//               alt="Webpage score after performing a free test with the Website Grader"
//               className="rounded-lg shadow-xl"
//             />
//           </div>
//         </div>
//       </motion.section>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6 }}
//         className="container mx-auto p-6 mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
//       >
//         {cards.map((card, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.05 }}
//             className="bg-white rounded-lg p-6 shadow-lg"
//           >
//             <h3 className="text-xl font-semibold mb-4 text-gray-800">{card.title}</h3>
//             <p className="text-gray-600">{card.content}</p>
//           </motion.div>
//         ))}
//       </motion.div>
//     </motion.div>
//   );
// };

// export default WebsiteGrader;



import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronDownIcon, CheckIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import React, { useRef } from 'react';
import { useEffect } from 'react';

import Contact from './Contact'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'


const WebsiteGrader = () => {
  useEffect(() => {
    emailjs.init('-243iobnGw0PSzPnp');

  }, []);

  const [url, setUrl] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const navigate = useNavigate()
const form = useRef();
  const handleSubmit = async (event) => {
    event.preventDefault()
    
  
    


    if (!url.trim()) {
      setError('Please enter a URL')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setError('Please enter a valid email address')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&category=performance&category=accessibility&category=seo&category=best-practices`
      
      const response = await fetch(apiUrl)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      const lighthouseResult = data?.lighthouseResult
      if (!lighthouseResult) {
        throw new Error('Lighthouse data is not available in the API response.')
      }

      const performanceScore = parseFloat((lighthouseResult.categories?.performance?.score * 100 || 0).toFixed(1))
      const accessibilityScore = parseFloat((lighthouseResult.categories?.accessibility?.score * 100 || 0).toFixed(1))
      const bestPracticesScore = parseFloat((lighthouseResult.categories?.['best-practices']?.score * 100 || 0).toFixed(1))
      const seoScore = parseFloat((lighthouseResult.categories?.seo?.score * 100 || 0).toFixed(1))


      const emailContent = `
        
         ${url}
        Performance Score: ${performanceScore}
        Accessibility Score:${accessibilityScore}
        Best Practices Score: ${bestPracticesScore}
        SEO Score: ${seoScore}
        Aggregate Score: ${(
          (performanceScore + accessibilityScore + bestPracticesScore + seoScore) /
          4
        ).toFixed(1)}
      `;

      // Send email with the results using EmailJS
      await emailjs.send(
        'service_sd4ada7', // Replace with your EmailJS service ID
        'template_xcy5z5u', // Replace with your EmailJS template ID
        {
          from_name: 'Website Grader',
          to_email: email.trim(), // Use the email input by the user
          message: emailContent, // Send the generated email content
        },
        '-243iobnGw0PSzPnp' // Replace with your EmailJS public key
      );

      console.log('Email sent successfully!');
     
      const resultData = {
        url,
        scores: {
          aggregate: (performanceScore + accessibilityScore + bestPracticesScore + seoScore) / 4,
          details: [
            { label: 'Performance', score: performanceScore, maxScore: 100, color: 'red' },
            { label: 'Accessibility', score: accessibilityScore, maxScore: 100, color: 'orange' },
            { label: 'Best Practices', score: bestPracticesScore, maxScore: 100, color: 'blue' },
            { label: 'SEO', score: seoScore, maxScore: 100, color: 'green' },
          ],  
        },
      }

      navigate('/lighthouse', { state: { analysisData: resultData } })
    } catch (error) {
      setError(`Failed to fetch performance data: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4 animate-fadeIn">
      <div className="absolute top-4 right-4 mb-5"style={{color:"black"}}>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="de">Deutsch</SelectItem>
            <SelectItem value="es">Español</SelectItem>
            <SelectItem value="fr">Français</SelectItem>
            <SelectItem value="ja">日本語</SelectItem>
            <SelectItem value="pt">Português</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="w-full max-w-lg bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
        <div className="flex justify-center mb-4">
          <img width="151" alt="Website Grader" src="/public/newlogo.png" className="h-auto" style={{filter:"brightness(0) invert(1)"}}/>
        </div>
        <h1 className="text-4xl md:text-5xl mb-5 text-center font-bold">Website Grader <sup>®</sup></h1>
        <p className="text-lg mb-8 text-center">
          Grade your website in seconds. Then learn how to improve it for free.
        </p>
        <form onSubmit={handleSubmit} className="mb-8 space-y-4">
          <Input
            ref={form}
            type="text"
            
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            className="text-center"
            style={{color:"black"}}
          />
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="text-center"
            style={{color:"black"}}
          />
          <p className="text-sm text-gray-400 mt-2 text-center">
            We are committed to your privacy. Mycto uses the information you provide to us to contact you about our relevant content, products, and services. You may unsubscribe from these communications at any time. For more information, check out our{' '}
            <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.
          </p>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Analyzing...' : 'Get your score'}
          </Button>
        </form>
        {loading && (
          <div className="flex justify-center items-center space-x-1">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: `${index * 0.15}s` }}></div>
            ))}
          </div>
        )}
        {error && <div className="text-red-500 text-base mt-5 text-center">{error}</div>}
      </div>
      <section className="flex flex-col md:flex-row items-center mb-6 mt-10 gap-6">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2 text-gray-300">Get Your Website Rating in Seconds</h2>
          <p className="text-gray-300">
            Website grader tools free website grader makes understanding website performance easy. The hardest part of building a site is often the guesswork. Which changes are important, and which aren't? It can sometimes feel impossible to tell. Our online grader demystifies the whole process. Learn about your page performance, security, search engine optimization (SEO), and mobile experience. Discover what makes your site strong and uncover new opportunities for the future.
          </p>
        

        </div>
        <div className="flex-1 text-center">
          <img loading="lazy" height="462" width="470" src="//static.hsappstatic.net/website-grader-ui/static-1.3755/img/website-performance-rating.jpg" alt="Webpage score after performing a free test with the Website Grader" className="max-w-full h-auto rounded-xl border border-gray-700" />
        </div>
        
      </section>


     
  {/* <Button
    variant="outline"
    color="black"
    className="mt-4"
    style={{
      color: "black",
      
      height: "50px",
      width: "200px",
      fontSize: "20px",
      onClick: () => {
        navigate('/contact');
        console.log('Contact button clicked');
        
      }
    }}
  >
    Contact Us
  </Button> */}



      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {[
          {
            title: "What is a website checker?",
            content: "A website checker is a mini site audit, giving you insight into how your website performs. A good website analyzer should audit your site across a range of criteria so you can get an idea of your overall performance, security, mobile experience, and search engine optimization (SEO).",
          },
          {
            title: "How to optimize a website for SEO?",
            content: "There are some concrete steps you can take to optimize your site for SEO. Making sure your pages are indexed (viewable by search engines) is a great start. In addition, making full use of alt-tags and meta-data is advised. If you want to go further, try making sure you have descriptive link text and appropriate content plugins.",
          },
          {
            title: "Why is website performance important?",
            content: "Performance test matters because it is a key factor in user experience. When users get an immediate response, such as a click, a successful login, or confirmation, they are more likely to stay on the page. This fast response is commonly referred to as website speed.",
          },
          {
            title: "Why is website grading important?",
            content: "Test grading is important because it can help you build your site smarter and better while monitoring its health along the way. These site testers help show the impact of the steps you're taking and areas for new opportunities by checking the pages of your website.",
          },
        ].map((card, index) => (
          <Card key={index} className="transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{card.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button
    variant="outline"
    color="black"
    className="mt-4"
    style={{
      color: "black",
      
      height: "50px",
      width: "200px",
      fontSize: "20px",
      onClick: () => {
        navigate('/contact');
        console.log('Contact button clicked');
        
      }
    }}
  >
    Contact Us
  </Button>
  <br />
      <Contact />
    </div>
  )
}

export default WebsiteGrader


// 👆👆👆👆👆👆👆
