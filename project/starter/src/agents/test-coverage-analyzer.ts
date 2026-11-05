import type { AgentDefinition } from '@anthropic-ai/claude-agent-sdk';
import { TEST_COVERAGE_PROMPT } from '../prompts/index.js';

/**
 * Subagent: finds untested code paths and proposes concrete tests.
 */
export const testCoverageAnalyzer: AgentDefinition = {
  description:
    'Analyses how well one changed file is covered by tests, finds untested paths ' +
    'and edge cases and suggests concrete tests. Use for every source file in a PR.',
  prompt: TEST_COVERAGE_PROMPT,
  tools: ['Read', 'Grep', 'Glob', 'Skill', 'mcp__github'],
  model: 'inherit'
};
