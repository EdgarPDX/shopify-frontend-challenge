export const getPrompt = async(prompt) => {

let res = await fetch('https://api.openai.com/v1/engines/text-curie-001/completions', {
method: "POST",
headers: {
"Content-Type": "application/json",
Authorization: "Bearer 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"
},
body:JSON.stringify({
    prompt: `${prompt}`,
    temperature: 0.5,
    max_tokens: 120,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0
    })
})
let data = await res.json();
console.log(data)
return data;

};
