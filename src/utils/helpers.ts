export const generateCaptcha = (length = 6) => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
};

export const getRandomTransform = () => {
  const rotate = (Math.random() * 10 - 5).toFixed(2); // Rotate between -5 and 5 degrees
  const translateX = (Math.random() * 10 - 5).toFixed(2); // Translate between -5 and 5 pixels
  const translateY = (Math.random() * 10 - 5).toFixed(2); // Translate between -5 and 5 pixels
  return `rotate(${rotate}) translate(${translateX}, ${translateY})`;
};
