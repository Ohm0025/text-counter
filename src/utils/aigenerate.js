async function aiRun(model, instruction, request) {
  const prompt = `evalute the following essay with IELTS writing task 2 criteria by giving the estimate band score then break down along each criterias and how to improve the essay. ${request} and the instruction is "${instruction}"`;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(prompt);

  return text;
}

export { aiRun };
