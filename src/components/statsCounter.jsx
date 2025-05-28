import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
// import './StatsCounter.css';

const stats = [
  {
    icon: 'https://trazan-file-kzbd.vercel.app/assets/images/icons/funfact-icon-1.svg',
    label: 'Projects Completed',
    end: 684,
    suffix: '',
  },
  {
    icon: 'https://trazan-file-kzbd.vercel.app/assets/images/icons/funfact-icon-2.svg',
    label: 'Talented Staffs',
    end: 14,
    suffix: 'K',
  },
  {
    icon: 'https://trazan-file-kzbd.vercel.app/assets/images/icons/funfact-icon-4.svg',
    label: 'Tonnes Supplied',
    end: 2,
    suffix: 'M',
  },
  {
    icon: 'https://trazan-file-kzbd.vercel.app/assets/images/icons/funfact-icon-3.svg',
    label: 'New Partners',
    end: 22,
    suffix: 'K',
  },
];

const StatsCounter = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [countKey, setCountKey] = useState(0);

  useEffect(() => {
    if (inView) {
      setCountKey(prev => prev + 1);
    }
  }, [inView]);

  return (
    <div className="stats-section" ref={ref}>
      {stats.map((stat, index) => (
        <div className="stat-box" key={index}>
          <div className="stat-icon">
            <img src={stat.icon} alt={stat.label} />
          </div>
          <div className="stat-info">
            <h1>
              <CountUp
                key={`${countKey}-${index}`}
                start={1}
                end={stat.end}
                duration={2}
                suffix={stat.suffix}
              />
              <span className='pluse'>+</span>
            </h1>
            <p>{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCounter;
