const formatResult = (rawText) => {
  let text_array = rawText.split("**");
  text_array = text_array.filter((item) => {
    if (item.trim() !== "") {
      return true;
    }
  });

  return text_array.reduce((accumulator, currentValue, index) => {
    if (index === 0) {
      return accumulator + currentValue + "\n";
    } else {
      if (index % 2 === 0) {
        return accumulator + currentValue + "\n";
      } else {
        return accumulator + "\n" + currentValue;
      }
    }
  }, "");
};

export { formatResult };
