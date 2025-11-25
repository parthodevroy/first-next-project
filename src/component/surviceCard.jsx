"use client";
import { IconContext } from "react-icons";
import { FaShieldAlt } from "react-icons/fa";
import { FaBoxOpen, FaHeadset } from "react-icons/fa6";
import ServiceSection from "./Survicesection";


const SurviceCard = () => {
  return (
     <div className="space-y-6 max-w-6xl mx-auto">

      <ServiceSection
        icon={<FaBoxOpen />}
        title="Live Parcel Tracking"
        text="Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates."
      />

      <ServiceSection
        icon={<FaShieldAlt />}
        title="100% Safe Delivery"
        text="We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time."
      />

      <ServiceSection
        icon={<FaHeadset />}
        title="24/7 Call Center Support"
        text="Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us."
      />

    </div>
  );
};

export default SurviceCard;
