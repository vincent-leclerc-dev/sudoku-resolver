export function randomColor() {
  // lime palette
  const colors = [
    '#f7fee7',
    '#ecfccb',
    '#d9f99d',
    '#bef264',
    '#a3e635',
    '#84cc16',
    '#65a30d',
    '#4d7c0f',
    '#3f6212',
    '#365314',
    '#1a2e05',
  ];

  return colors[Math.floor(Math.random() * colors.length)];
}
