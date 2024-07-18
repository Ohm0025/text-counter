import prompt_gemini from "../constant/prompt";

async function aiRun(model, instruction, request) {
  const prompt = prompt_gemini(request, instruction);
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(prompt);

  return text;
}

export { aiRun };
