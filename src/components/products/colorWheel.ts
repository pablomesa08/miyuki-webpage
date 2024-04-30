export const getPath = (colorIndex: number, colorSetLength: number) => {
  const xCenter = 50;
  const yCenter = 50;
  const radius = 40;
  const angle = (colorIndex / colorSetLength) * 2 * Math.PI;
  const nextAngle = ((colorIndex + 1) / colorSetLength) * 2 * Math.PI;

  const xStart = xCenter + radius * Math.sin(angle);
  const yStart = yCenter - radius * Math.cos(angle);
  const xEnd = xCenter + radius * Math.sin(nextAngle);
  const yEnd = yCenter - radius * Math.cos(nextAngle);

  // If the sector spans more than half the circle, the large-arc-flag should be 1, otherwise 0
  const largeArcFlag = nextAngle - angle > Math.PI ? 1 : 0;

  return `M ${xCenter},${yCenter} L ${xStart},${yStart} A ${radius},${radius} 0 ${largeArcFlag},1 ${xEnd},${yEnd} Z`;
};
