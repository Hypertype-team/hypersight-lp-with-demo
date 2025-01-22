import { motion } from "framer-motion";
import { Button } from "./ui/button";

const PricingCard = ({ title, frequency, features }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 w-full mx-auto mb-8 last:mb-0 md:mb-0 flex flex-col h-full"
  >
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary px-4 py-1 rounded-full text-white text-sm whitespace-nowrap">
      Early Bird Program
    </div>
    <div className="flex-grow">
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{frequency}</p>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-300 flex items-start gap-2">
            <svg
              className="w-5 h-5 text-primary flex-shrink-0 mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <Button
      className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white py-6"
      onClick={() => window.open('https://hypertype.fillout.com/talktosales?_gl=1*fyovem*_gcl_au*MTQxOTAzNDA1OC4xNzMxNTgzNTYz', '_blank')}
    >
      Get Started
    </Button>
  </motion.div>
);

const PricingSection = () => {
  const plans = [
    {
      title: "Essential Insights",
      frequency: "Reports every two weeks",
      features: [
        "Unlimited tickets during analysis period",
        "Bi-weekly comprehensive reports",
        "Custom support integration",
        "Priority support",
        "Custom features",
      ],
    },
    {
      title: "Pro Analytics",
      frequency: "Reports every week",
      features: [
        "Unlimited tickets during analysis period",
        "Weekly comprehensive reports",
        "Custom support integration",
        "Priority support",
        "Custom features",
      ],
    },
    {
      title: "Enterprise Intelligence",
      frequency: "Reports every day",
      features: [
        "Unlimited tickets during analysis period",
        "Daily comprehensive reports",
        "Custom support integration",
        "Priority support",
        "Custom features",
      ],
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Early Bird Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan based on your reporting needs. All plans include unlimited 
            ticket analysis during the reporting period.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            {plans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;