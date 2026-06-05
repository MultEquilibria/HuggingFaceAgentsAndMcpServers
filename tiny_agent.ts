
import { Agent } from "@huggingface/tiny-agents"
import readline from "node:readline/promises"
import { stdin as input, stdout as output } from "node:process"

/*
    Create a Hugging Face agent instance.

    Model:
        Qwen2.5 72B Instruct

    Provider:
        Novita AI inference provider

    MCP Server:
        Connects to a local Gradio application exposing an MCP endpoint.

    The agent can call MCP tools exposed by that server.
*/

const agent = new Agent({
    provider: process.env.PROVIDER ?? "novita",
    model: process.env.MODEL_ID ?? "Qwen/Qwen2.5-72B-Instruct",
    apiKey: process.env.HF_TOKEN,
    servers: [{
        command: "npx",
        args: [
            "mcp-remote",
            "http://127.0.0.1:7868/gradio_api/mcp/sse",
        ],
    },],
})

const rl = readline.createInterface({ input, output });
async function main() {
    console.log("MCP has started. Type 'exit' to quit.");

    while (true) {
        const message = await rl.question("> ");

        if (["exit", "quit"].includes(message.trim().toLowerCase())) {
            break;
        }

        for await (const chunk of agent.run(message)) {
            if (typeof chunk == "string") {
                process.stdout.write(chunk);
            } else {
                process.stdout.write(JSON.stringify(chunk, null, 2));
            }
        }
        process.stdout.write("\n");
    }
    rl.close();
}
main().catch((error) => {
    console.error("Error", error);
    rl.close();
    process.exit(1);
})
