import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const secondsAgo = Math.floor((now.getTime() - createdAt.getTime()) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  let counter;

  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    counter = Math.floor(secondsAgo / secondsInUnit);

    if (counter > 0) {
      if (counter === 1) {
        return `${counter} ${unit} ago`;
      } else {
        return `${counter} ${unit}s ago`;
      }
    }
  }

  return "Just now";
};

export const formatNumber = (number: number): string => {
  if (Math.abs(number) >= 1e6) {
    return (number / 1e6).toFixed(2) + "M";
  } else if (Math.abs(number) >= 1e3) {
    return (number / 1e3).toFixed(2) + "K";
  } else {
    return number.toString();
  }
};

export const getJoinedDate = (date: Date): string => {
  // Array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get month and year from the Date object
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  // Format the joined date as a string ("Month Year")
  const joinedDate = `${month} ${year}`;

  return joinedDate;
};
