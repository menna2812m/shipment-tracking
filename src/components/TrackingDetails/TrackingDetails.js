import React from "react";
import "./TrackingDetails.scss";
import { formatFullDate, formatTime } from "../../utils/dateUtils";

const TrackingDetails = ({ trackingData = [] }) => {
  const transformTransitEvents = (events) => {


    return events.reduce((acc, event) => {
      const date = formatFullDate(event.timestamp); // Example: "Wednesday, August 7, 2022"
      const time = formatTime(event.timestamp);

      if (!acc[date]) {
        acc[date] = [];
      }

      acc[date].push({
        state: event.state,
        time: time,
      });

      return acc;
    }, {});
  };

  // Ensure logs is an array before transforming
  const transformedEvents = trackingData.length
    ? transformTransitEvents(trackingData)
    : {};

  return (
    <section className="tracking-details">
      <h3>Tracking Details</h3>
      {Object.keys(transformedEvents).length ? (
        Object.keys(transformedEvents).map((date) => (
          <div key={date} className="log-group">
            <h4>{date}</h4>
            {transformedEvents[date].map((log, index) => (
              <div key={index} className="log">
                <p>{log.state}</p>
                <p className="time">{log.time}</p>
              </div>
            ))}
          </div>
        ))
      ) : (
        <p>No tracking details available.</p>
      )}
    </section>
  );
};

export default TrackingDetails;
