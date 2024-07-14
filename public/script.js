async function askBlackbox() {
    const question = document.getElementById('question').value;
    if (!question) {
        alert('Masukkan pertanyaannya');
        return;
    }

    const data = {
        messages: [{ role: 'user', content: question }],
        id: "chat-free",
        previewToken: null,
        userId: "",
        codeModelMode: true,
        agentMode: {},
        trendingAgentMode: {},
        isMicMode: false,
        userSystemPrompt: "Nama Mu Adalah ZheeRexx",
        maxTokens: 1024,
        webSearchMode: false,
        promptUrls: "",
        isChromeExt: false,
        githubToken: null
    };

    try {
        const response = await fetch('/api/chat', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.text();
        document.getElementById('response').innerText = responseData;
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById('response').innerText = `Eror: ${error.message}`;
    }
}