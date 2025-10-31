import React, { useState, useEffect } from 'react';

const PromotionalSection = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 4,
    minutes: 27,
    seconds: 49
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset when it reaches 0
          days = 0;
          hours = 4;
          minutes = 27;
          seconds = 49;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const CountdownBox = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white text-black text-4xl md:text-5xl font-bold px-6 py-4 rounded-lg mb-2 min-w-[80px] text-center">
        {value.toString().padStart(2, '0')}
      </div>
      <span className="text-white text-xs md:text-sm">{label}</span>
    </div>
  );

  return (
    <div className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400">
              50% OFF AUTUMN SALE
            </h2>
            <p className="text-white text-xl md:text-2xl">
              Plus get an EXTRA 20% Off Today!
            </p>
          </div>

          {/* Discount Code */}
          <div className="text-white text-lg md:text-xl">
            Use Code: <span className="font-bold text-yellow-400">SAVE20</span> at Checkout
          </div>

          {/* Countdown Timer */}
          <div className="flex justify-center items-center gap-4 md:gap-6">
            <CountdownBox value={countdown.days} label="Days" />
            <span className="text-white text-4xl md:text-5xl font-bold">:</span>
            <CountdownBox value={countdown.hours} label="Hours" />
            <span className="text-white text-4xl md:text-5xl font-bold">:</span>
            <CountdownBox value={countdown.minutes} label="Minutes" />
            <span className="text-white text-4xl md:text-5xl font-bold">:</span>
            <CountdownBox value={countdown.seconds} label="Seconds" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalSection;

