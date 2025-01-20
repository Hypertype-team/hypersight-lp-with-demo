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
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Integration visualization */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-full max-w-[500px] aspect-square mx-auto flex items-center justify-center">
              {/* Center Hypersight logo */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute z-10"
              >
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-[#9b87f5]/10 backdrop-blur-sm flex items-center justify-center">
                  <img
                    src="/lovable-uploads/c8a54598-c4ba-4951-b583-b599b6ad2e7e.png"
                    alt="Hypersight"
                    className="w-16 h-16 md:w-20 md:h-20 object-contain"
                  />
                </div>
              </motion.div>

              {/* Integration logos in a circle */}
              {integrations.map((integration, index) => {
                const angle = (index * 360) / integrations.length;
                const radius = 160;
                const x = radius * Math.cos((angle - 90) * (Math.PI / 180));
                const y = radius * Math.sin((angle - 90) * (Math.PI / 180));

                return (
                  <motion.div
                    key={integration.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="absolute w-16 h-16 md:w-20 md:h-20"
                    style={{
                      left: `calc(50% + ${x}px - 40px)`,
                      top: `calc(50% + ${y}px - 40px)`,
                    }}
                  >
                    {/* Connection line */}
                    <svg
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] -z-10"
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
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.6 }}
                        transition={{ duration: 1, delay: 0.2 * index }}
                        className="animate-pulse"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#9b87f5" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#9b87f5" stopOpacity="0.2" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* Logo container */}
                    <div className="w-16 h-16 md:w-20 md:h-20 p-3 md:p-4 rounded-xl bg-[#9b87f5]/10 backdrop-blur-sm border border-[#9b87f5]/20 hover:border-[#9b87f5]/50 transition-colors group">
                      <img
                        src={integration.logo}
                        alt={integration.name}
                        className="w-full h-full object-contain filter brightness-0 invert group-hover:scale-110 transition-transform"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left space-y-6 order-1 lg:order-2 px-4 lg:px-0"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] bg-clip-text text-transparent text-center lg:text-left">
              Connect Your Support Stack
            </h2>
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-white/70 leading-relaxed text-center lg:text-left">
                Seamlessly integrate Hypersight with your existing support tools. Our platform works instantly with leading solutions like Zendesk, Intercom, Freshdesk, HubSpot, and Salesforce.
              </p>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed text-center lg:text-left">
                Don't see your tool? No problem. Our flexible API allows for custom integrations with any support platform you use.
              </p>
            </div>
            <ul className="space-y-6 text-white/70 max-w-md mx-auto lg:mx-0">
              <motion.li 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-4 bg-[#1A1F2C] p-4 rounded-lg border border-[#9b87f5]/20"
              >
                <div className="w-3 h-3 rounded-full bg-[#9b87f5] animate-pulse" />
                <span className="text-lg">One-click integration setup</span>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center space-x-4 bg-[#1A1F2C] p-4 rounded-lg border border-[#9b87f5]/20"
              >
                <div className="w-3 h-3 rounded-full bg-[#9b87f5] animate-pulse" />
                <span className="text-lg">Real-time data synchronization</span>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center space-x-4 bg-[#1A1F2C] p-4 rounded-lg border border-[#9b87f5]/20"
              >
                <div className="w-3 h-3 rounded-full bg-[#9b87f5] animate-pulse" />
                <span className="text-lg">No coding required</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;