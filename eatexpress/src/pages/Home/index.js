import React, { useState } from "react";
import Header from "../../components/Header";
import TabOptions from "../../components/TabOptions";
import Footer from "../../components/Footer";
import Delivery from "../../components/Delivery";
import DiningOut from "../../components/DiningOut";
import Nightlife from "../../components/Nightlife";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;
    case "Dining Out":
      return <DiningOut />;
    case "Nightlife":
      return <Nightlife />;
    default:
      return <Delivery />;
  }
};

export default HomePage;