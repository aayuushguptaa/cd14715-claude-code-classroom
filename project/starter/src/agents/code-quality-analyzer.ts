import type { AgentDefinition } from '@anthropic-ai/claude-agent-sdk';
import { CODE_QUALITY_PROMPT } from '../prompts/index.js';

/**
 * Subagent: security, performance, maintainability and best-practice review.
 * Allowed to load Claude Skills and call the GitHub and ESLint MCP servers.
 */
export const codeQualityAnalyzer: AgentDefinition = {
  description:
    'Reviews one changed file for security vulnerabilities, performance problems, ' +
    'maintainability issues and best-practice violations. Use for every source file in a PR.',
  prompt: CODE_QUALITY_PROMPT,
  tools: ['Read', 'Grep', 'Glob', 'Skill', 'mcp__github', 'mcp__eslint'],
  model: 'inherit'
};
