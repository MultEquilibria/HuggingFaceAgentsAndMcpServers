import asyncio
import os
from dotenv import load_dotenv

from huggingface_hub import Agent

# Load environment variables from .env file.

load_dotenv()


# Create a Hugging Face agent instance.
#
# Model:
#   Qwen2.5 72B Instruct
#
# Provider:
#   Novita AI inference provider
#
# MCP Server:
#   Connects to a local Gradio application exposing an MCP endpoint.
#
# The agent can call MCP tools exposed by that server.

agent = Agent(
    model = "Qwen/Qwen2.5-72B-Instruct", 
    provider = "novita",
    servers = [{
        "command": "npx",
        "args": [
            # MCP bridge utility
            "mcp-remote",
            
            # Local Gradio MCP endpoint
            "http://127.0.0.1:7868/gradio_api/mcp/sse"
        ]    
    }]    
)

async def main():
    """
    Simple interactive chat loop.

    Flow:
        User input
            ↓
        Agent.run()
            ↓
        LLM response stream
            ↓
        Print chunks as they arrive
    """
    
    while True:
        
        # Read user message from terminal.
        msg = input("> ")
        
        # Stream response from the agent.
        async for chunk in agent.run(msg):
            # A chunk may contain multiple choices.
            for choice in chunk.choices:
                # Print only newly generated text.
                if choice.delta.content:
                    print(f"{choice.delta.content}")
    
if __name__ == "__main__":
    # Start the asyncio event loop.
    asyncio.run(main())