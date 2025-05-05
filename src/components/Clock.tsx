
import React, { useState, useEffect } from 'react';
import { Calendar, Clock as ClockIcon } from 'lucide-react';

const Clock = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata', // Indian Standard Time
    });
  };

  return (
    <div className="flex items-center text-light-gray text-sm">
      <div className="flex items-center mr-3">
        <Calendar className="h-4 w-4 mr-1 text-neon-purple" />
        <span>{formatDate(dateTime)}</span>
      </div>
      <div className="flex items-center">
        <ClockIcon className="h-4 w-4 mr-1 text-neon-purple" />
        <span>{formatTime(dateTime)}</span>
      </div>
    </div>
  );
};

export default Clock;
