import React from "react";
import "./OrderSummary.scss";
import ProgressTracker from "../ProgressTracker/ProgressTracker";
import { formatDate } from "../../utils/dateUtils";

const OrderSummary = ({ trackingData }) => {

  const arrivingDate = formatDate(trackingData.ScheduleDate);
  
  return (
    <section className="order-summary">
      <div className="order-summary-card">
        <div className="order-summary-card--header">
          <p>Order #{trackingData.TrackingNumber}</p>
          <h2>
            Arriving by <strong>{arrivingDate}</strong>
          </h2>
          <p>Your order is expected to arrive within 2-3 working days</p>
        </div>
        <div className="order-summary-card--body">
          <ProgressTracker currentStatus={trackingData.CurrentStatus} />
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
