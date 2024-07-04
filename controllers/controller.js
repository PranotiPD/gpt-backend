const { main } = require('../service/service');

const getAnswer = async (req, res) => {
    try {
        const prompt = req.body.data;
        console.log("bodyyyyyyyyy", req.body);
        console.log("Prompt is here", prompt)
        if (!prompt) {
            return res.status(400).json({ status: "failed", message: "Invalid data" });
        }
    //    const prompt = `Tell me name of 10 shark species`

        const chatCompletion = await main(prompt);

        if (chatCompletion === "") {
            return res.status(400).json({ status: "failed", message: "No data found" });
        }
        console.log('chatCompletionController', chatCompletion);
        const cleanedAnswer = chatCompletion.replace(/[^\w\s.,!"'-]/g, '');
        console.log('Cleaned answer', cleanedAnswer)
        return res.status(200).json({ status: "success", data: cleanedAnswer });
    } catch (err) {
        console.log('err.message', err.message);

        return res.status(500).json({ status: "failed", message: err.message });
    }
};

module.exports = {getAnswer}