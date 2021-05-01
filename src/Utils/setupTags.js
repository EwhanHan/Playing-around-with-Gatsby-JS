const setupTags = recipes => {
  const allTags = {};

  // count each tag, if it doesn't exist, create it first in the allTags object
  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      if (allTags[tag] !== undefined) {
        allTags[tag] += 1;
      } else {
        allTags[tag] = 1;
      }
    });
  });

  // create an array of key, value pairs (tag name and the count, respectively)
  const tags = Object.entries(allTags);
  return tags;
};

export default setupTags;
