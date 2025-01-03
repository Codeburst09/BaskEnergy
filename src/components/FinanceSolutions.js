import React from "react";
import FinanceSection from "./FinanceSection";
import './FinanceSolution.css';
import financeimg1 from '../assets/capex-image.png'
import financeimg2 from '../assets/supply-chain-image.png'
import financeimg3 from '../assets/working-capital-image.png'
import financeimg4 from '../assets/import-export-image.png'
import financeimg5 from '../assets/bill-discounting-image.png'
import Banner from './reusables/Banner';
import solarImage from '../assets/solar-finance.png'
const solutions = [
  {
    id: 1,
    title: "Deferred CAPEX",
    description: "We offer financing solutions that allow you to defer capital expenses. With flexible repayment terms and competitive interest rates, our Deferred CAPEX solution is designed to reduce upfront costs while ensuring long-term sustainability for your business.",
    image: financeimg1,
    points: [
      "Flexible payment terms tailored to your cash flow.",
      "Deferred expenses allow you to focus on immediate operational needs.",
      "Competitive interest rates to support your financial planning."
    ]
  },
  {
    id: 2,
    title: "Supply Chain Finance",
    description: "Streamline your entire supply chain with our simplified payment solutions. Supply Chain Finance ensures that your suppliers are paid promptly, while you benefit from extended payment terms to maintain cash flow and operational efficiency.",
    image: financeimg2,
    points: [
      "Extended payment terms for better cash flow management.",
      "Prompt supplier payments to keep your operations running smoothly.",
      "Customizable finance options to suit your business needs."
    ]
  },
  {
    id: 3,
    title: "Working Capital Finance",
    description: "Our Working Capital Finance solution is designed to help you cover short-term operational expenses, ensuring your business runs smoothly. It gives you access to quick liquidity to meet your day-to-day financial needs.",
    image: financeimg3,
    points: [
      "Access to short-term capital with flexible repayment options.",
      "Ensures business continuity by meeting daily operational needs.",
      "Competitive interest rates designed for minimal financial strain."
    ]
  },
  {
    id: 4,
    title: "Import/Export Finance",
    description: "Simplify your international trade with our Import/Export Finance solutions. We provide financing that helps you manage the complexities of cross-border transactions, enabling smoother business operations globally.",
    image: financeimg4,
    points: [
      "Boost liquidity with export funding before shipment payment.",
      "Import finance solutions to cover upfront costs.",
      "Facilitated transactions with competitive foreign exchange rates."
    ]
  },
  {
    id: 5,
    title: "Bill Discounting",
    description: "Improve your cash flow by availing our Bill Discounting solution. We help you convert your outstanding invoices into cash, reducing the waiting period for payments and enabling faster business growth.",
    image: financeimg5,
    points: [
      "Immediate cash from outstanding invoices.",
      "Enhanced liquidity for faster business growth.",
      "Reduced dependency on long credit periods from clients."
    ]
  }
];

const FinanceSolutions = () => {
  return (
    <div className="finance-solutions">
        <Banner
        backgroundImage={solarImage}
        title="Comprehensive Finance Solutions by Bask Energy"
        description="Bask Energy offers a wide range of financial solutions tailored for businesses in the renewable energy sector, focusing on enhancing cash flow, facilitating project execution, and optimizing capital expenditure."
        buttonText="KNOW MORE"
      />
      {solutions.map((solution) => (
        <FinanceSection key={solution.id} solution={solution} />
      ))}
    </div>
  );
};

export default FinanceSolutions;
