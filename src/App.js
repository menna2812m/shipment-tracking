import "./App.css";
import Header from "./components/Header/Header";
import AppTrackingSearch from "./components/AppTrackingSearch/AppTrackingSearch";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import TrackingDetails from "./components/TrackingDetails/TrackingDetails";
import axios from "axios"; // or use fetch if you prefer
import React, { useState, useEffect } from "react";

function App() {
  const [trackingData, setTrackingData] = useState(null);
  const [error, setError] = useState(null);
  const [trackingNumber, setTrackingNumber] = useState(""); // You can get this from AppTrackingSearch

  // Fetch data when the trackingNumber changes or the component mounts
  useEffect(() => {
    if (trackingNumber) {
      fetchTrackingData(trackingNumber);
    }
  }, [trackingNumber]);

  const fetchTrackingData = async (trackingNumber) => {
    try {
      const response = await axios.get(
        `https://tracking.bosta.co/shipments/track/${trackingNumber}`,
        {
          headers: {
            "x-requested-by": "Bosta",
          },
        }
      );
      
      setTrackingData(response.data); // Assuming the response contains the tracking data
      setError(null); // Clear any previous errors
    } catch (err) {
      setError("Failed to fetch shipment data. Please try again.");
      setTrackingData(null); // Clear previous data
    }
  };
  return (
    <div className="App">
      <section className="header-wrapper">
        <Header />
        <AppTrackingSearch setTrackingNumber={setTrackingNumber} />
      </section>
      {error && <p style={{ color: "red" }}>{error}</p>}
      
      {trackingData ? (
        <div className="order">
          <OrderSummary trackingData={trackingData} />
          <TrackingDetails trackingData={trackingData.TransitEvents} />
        </div>
      ) : (
        <p>Enter a tracking number to see the details.</p>
      )}
    </div>
  );
}

export default App;
