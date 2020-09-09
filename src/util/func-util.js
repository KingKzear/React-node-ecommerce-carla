export const Capitalizer = (word, replace=undefined) => {
  if(replace)
    return word.replace('_', replace).toUpperCase();
  else
    return word.toUpperCase();
}