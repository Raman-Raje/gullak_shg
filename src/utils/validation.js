

export const objectIdRegex = /^[0-9a-fA-F]{24}$/;

// 10 digit phone number
export const phoneNumberRegex = /^\d{10}$/;

// contact number
export const landlineNumberRegex = /^\+?\d{10,15}$/; // Adjust the length range based on your requirements

// Regex pattern to match the string format "hh:mm-hh:mm"
export const timeSlotPattern = /^([01]?[0-9]|2[0-3]):[0-5][0-9]-([01]?[0-9]|2[0-3]):[0-5][0-9]$/;

export const isoDatePattern = /^\d{4}-\d{2}-\d{2}$/;