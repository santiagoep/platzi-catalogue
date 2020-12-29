const spacing = (...values) => {
  if (values.length === 0 || values.length > 4) return '0';
  return values
    .reduce(
      (finalValue, value) =>
        value === 'auto'
          ? `${finalValue} ${value}`
          : `${finalValue} ${value * 0.25}rem`,
      ''
    )
    .trim();
};

export default spacing;
