let prompt_gemini = (essay, instruction) => {
  let prompt = `According from the folling instruction, "${instruction}". And the essay is "${essay}". Grade my IELTS Task 2 writing.`;
  return prompt;
};

export default prompt_gemini;
