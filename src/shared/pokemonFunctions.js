// eslint-disable-next-line import/prefer-default-export
export const getFormattedId = (id) => {
  const newId = `000${id}`;
  return newId.substr(newId.length - 3);
};
