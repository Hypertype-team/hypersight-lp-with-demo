import { motion } from "framer-motion";

const IntegrationsSection = () => {
  const integrations = [
    { name: "Zendesk", logo: "/lovable-uploads/ac09c7d8-1ea4-4b5c-805e-1c06a08a158d.png" },
    { name: "Intercom", logo: "/lovable-uploads/0d49ea4a-140e-4f5c-9274-eb01ad8c50f2.png" },
    { name: "Freshdesk", logo: "/lovable-uploads/7e7127fb-d7da-47c0-828d-fc1724b0c7f3.png" },
    { name: "HubSpot", logo: "/lovable-uploads/82dfe857-3fff-4bc7-92d4-ae7f3829c15d.png" },
    { name: "Salesforce", logo: "/lovable-uploads/14e8106c-3784-42e4-a732-6674b1e928e7.png" },
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 items-center max-w-7xl mx-auto">
          {/* Integration visualization - Now above text on mobile/tablet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative order-1"
          >
            <div className="relative w-full max-w-[500px] aspect-square mx-auto flex items-center justify-center">
              {/* Center Hypersight logo */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute z-10"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#9b87f5]/10 backdrop-blur-sm flex items-center justify-center">
                  <img
                    src="/lovable-uploads/c8a54598-c4ba-4951-b583-b599b6ad2e7e.png"
                    alt="Hypersight"
                    className="w-12 h-12 md:w-16 md:h-16 object-contain"
                  />
                </div>
              </motion.div>

              {/* Integration logos in a circle */}
              {integrations.map((integration, index) => {
                const angle = (index * 360) / integrations.length;
                const radius = 140; // Slightly reduced radius
                const x = radius * Math.cos((angle - 90) * (Math.PI / 180));
                const y = radius * Math.sin((angle - 90) * (Math.PI / 180));

                return (
                  <motion.div
                    key={integration.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="absolute w-14 h-14 md:w-16 md:h-16"
                    style={{
                      left: `calc(50% + ${x}px - 32px)`,
                      top: `calc(50% + ${y}px - 32px)`,
                    }}
                  >
                    {/* Connection line */}
                    <svg
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] -z-10"
                      style={{
                        transform: `rotate(${angle}deg)`,
                      }}
                    >
                      <motion.line
                        x1="50%"
                        y1="50%"
                        x2="100%"
                        y2="50%"
                        stroke="url(#gradient)"
                        strokeWidth="1.5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.4 }}
                        transition={{ duration: 1, delay: 0.2 * index }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#9b87f5" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#9b87f5" stopOpacity="0.1" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* Logo container */}
                    <div className="w-14 h-14 md:w-16 md:h-16 p-3 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 group">
                      <img
                        src={integration.logo}
                        alt={integration.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Text content - Now below visualization on mobile/tablet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left space-y-8 order-2 max-w-2xl mx-auto lg:mx-0"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] bg-clip-text text-transparent">
              Connect Your Support Stack
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                Seamlessly integrate Hypersight with your existing support tools. Our platform works instantly with leading solutions like Zendesk, Intercom, Freshdesk, HubSpot, and Salesforce.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Don't see your tool? No problem. Our flexible API allows for custom integrations with any support platform you use.
              </p>
            </div>
            <ul className="space-y-4">
              {[
                "One-click integration setup",
                "Real-time data synchronization",
                "No coding required"
              ].map((feature, index) => (
                <motion.li 
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="w-2 h-2 rounded-full bg-[#9b87f5]" />
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;