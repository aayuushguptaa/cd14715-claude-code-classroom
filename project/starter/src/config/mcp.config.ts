import type { McpServerConfig } from '@anthropic-ai/claude-agent-sdk';

/**
 * Model Context Protocol servers available to the orchestrator and subagents.
 *
 * - github: read pull requests and file contents
 * - eslint: lint JavaScript/TypeScript files for supporting evidence
 *
 * Built by a function (not a constant) so environment variables are read at
 * call time, after dotenv has loaded .env.
 */
export function buildMcpServersConfig(
  env: NodeJS.ProcessEnv = process.env
): Record<string, McpServerConfig> {
  return {
    github: {
      type: 'stdio',
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-github'],
      env: {
        // The GitHub MCP server expects this variable name.
        GITHUB_PERSONAL_ACCESS_TOKEN: env.GITHUB_TOKEN ?? ''
      }
    },
    eslint: {
      type: 'stdio',
      command: 'npx',
      args: ['-y', '@eslint/mcp@latest'],
      env: {}
    }
  };
}

/** Tool-name patterns that grant the agents access to the servers above. */
export const MCP_ALLOWED_TOOLS = ['mcp__github', 'mcp__eslint'];
