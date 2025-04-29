import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateInput) {
  const date = new Date(dateInput);
  if (isNaN(date)) {
    throw new Error('Invalid date input');
  }
  return date.toLocaleString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function formatTime(time) {
  if (!time) return '';
  const [hours, minutes] = time.split(':');
  return new Date(0, 0, 0, parseInt(hours), parseInt(minutes)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

