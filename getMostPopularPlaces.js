function getMostPopularPlaces(...places) {
  const frequency = {};
  places.forEach((place) => {
    frequency[place] = (frequency[place] || 0) + 1;
  });

  const sortedPlaces = Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .map((entry) => entry[0]);

  return sortedPlaces[0] + " " + sortedPlaces[1];
}

console.log(
  getMostPopularPlaces(
    "Analamahitsy,Analamahitsy,  Itaosy, Behoririka ,  Itaosy , Itaosy "
  )
);
