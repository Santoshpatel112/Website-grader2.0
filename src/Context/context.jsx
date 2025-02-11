// Context/context.js
import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const PageSpeedContext = createContext();


export const PageSpeedProvider = ({ children}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const url =
      "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://developers.google.com";

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((responseData) => {
        const performanceData = {
          imageUrl: responseData.lighthouseResult?.audits["final-screenshot"]?.details?.data || null,
          pageSize: (responseData.lighthouseResult?.audits["total-byte-weight"]?.displayValue || "2.5 MB").replace(" MB", ""),
          pageRequests: responseData.lighthouseResult?.audits["network-requests"]?.details?.items?.length || 50,
          pageSpeed: (responseData.lighthouseResult?.audits["interactive"]?.displayValue || "5.2s").replace("s", ""),
          performanceScore: (responseData.lighthouseResult?.categories?.performance?.score || 0) * 25,
        };

        console.log("Processed performanceData:", performanceData);  // Debug log
        setData(performanceData);  // Update the context with the fetched data
        setLoading(false);  // Stop loading
      })
      .catch((err) => {
        console.error("Error fetching PageSpeed data:", err);
        setError(err);  // Set error if there's an issue with the fetch
        setLoading(false);  // Stop loading even if there's an error
      });
  }, []);  // Empty array means this runs once when the component mounts

  return (
    <PageSpeedContext.Provider value={{ data, loading, error }}>
      {children}
    </PageSpeedContext.Provider>
  );
};

PageSpeedProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageSpeedProvider;


// 03 DEC

