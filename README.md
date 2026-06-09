# Hugging Face Agents and MCP Servers

A collection of experiments, examples, and reference implementations built around:

* Hugging Face Agents
* Tiny Agents
* Model Context Protocol (MCP)
* Gradio-based MCP servers
* GitHub Actions workflows
* Continue.dev integrations

The repository serves as a playground for exploring agent architectures, MCP integrations, local and remote tools, and AI-assisted workflows.

## Repository Structure

### `sentiment_analysis_mcp_server.py`

A simple Gradio-based MCP server with a web UI.

Features:

* Sentiment analysis of user-provided text
* MCP-compatible tool interface
* Gradio frontend for interactive testing

---

### `tiny_agent.py`

A Hugging Face Agent implemented in Python.

Demonstrates:

* Agent creation using the Hugging Face Agents SDK
* Integration with MCP servers
* Tool calling through MCP

---

### `tiny_agent.ts`

A TypeScript implementation of a Hugging Face Agent.

Demonstrates:

* Agent implementation in TypeScript
* MCP integration from the JavaScript ecosystem

---

### `test.py`

An example agent that connects to tools through an explicitly configured MCP client.

Useful for understanding:

* Direct MCP client usage
* Manual tool registration
* Agent-to-tool communication

---

### `tiny_agent_cli_configuration/`

Configuration-only Tiny Agent implementation.

Contains:

* Agent configuration files
* Model selection
* MCP server definitions

The agent can be instantiated and executed directly through the Tiny Agents CLI without writing additional Python code.

---

### `.continue/`

Configuration files for the Continue extension for VS Code.

Includes:

* Model configurations
* MCP server configurations
* Local development setup

---

### `.github/workflows/`

GitHub Actions CI workflows.

Provides:

* Automated repository checks
* Dependency installation
* Basic validation and testing

---

## Technologies Used

* Python
* TypeScript
* Hugging Face Agents
* Tiny Agents
* MCP (Model Context Protocol)
* Gradio
* aiohttp
* GitHub Actions
* Continue.dev

## Purpose

This repository documents my learning journey and experiments with agentic AI systems, MCP integrations, tool calling, and modern AI engineering workflows.

The goal is to build practical experience with real-world agent architectures rather than isolated examples.
