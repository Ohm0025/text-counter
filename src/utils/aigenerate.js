async function aiRun(model, question, rawText) {
  const prompt = `evalute the following essay with IELTS writing task 2 criteria by giving the estimate band score then break down along each criterias and how to improve the essay. ${rawText} and the instruction is "${question}"`;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
}

export { aiRun };
