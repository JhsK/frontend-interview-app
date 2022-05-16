export const shuffle = (array) => {
  // eslint-disable-next-line no-plusplus
  for (let i = array.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * (i + 1));

    const tmp = array[i];
    array[i] = array[randomPosition];
    array[randomPosition] = tmp;
  }

  return array;
};
