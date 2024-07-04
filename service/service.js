const Groq = require('groq-sdk');
require('dotenv').config();

const groq = new Groq({
    apiKey : process.env.GROQ_API_KEY
})

async function main(prompt) {
    const chatCompletion = await getGroqChatCompletion(prompt);
    console.log('chatCompletionService', chatCompletion.choices[0]?.message?.content);
    return chatCompletion.choices[0]?.message?.content || '';
}

async function getGroqChatCompletion(prompt) {
    return groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: `
                    ${prompt}
                `
            }
        ],
        model: "llama3-8b-8192"
    });
}

main()

module.exports = {
    main,
    getGroqChatCompletion
};