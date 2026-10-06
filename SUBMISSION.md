# Claude Submission Notes

Submit this folder as the Claude plugin bundle.

## Plugin Bundle

- Repository: Otto backend repository
- Source path: `packages/ai-plugin/src/distributions/claude`
- Prepared plugin path: `packages/ai-plugin/dist/claude`
- Bundle contents:
  - `plugin.json`
  - `README.md`
  - `.claude-plugin/plugin.json`
  - `.mcp.json`
  - `LICENSE`
  - `skills/`
  - `assets/`

Validate before submission:

```bash
pnpm --filter @ottoai/ai-plugin prepare:claude
claude plugin validate ./packages/ai-plugin/dist/claude
```

## MCP Connector

The Otto MCP connector should also be submitted/tracked separately.

- Connector name: Otto AI
- MCP server URL: `https://mcp.joinotto.com/mcp`
- Auth: OAuth
- Website: `https://joinotto.com`
- Support: `hello@joinotto.com`
- Privacy policy: `https://joinotto.com/privacy`
- Terms: `https://joinotto.com/terms`

If the connector has already been submitted, include that review/submission ID when submitting or following up on this plugin bundle.

## Required Before Submission

- Confirm `https://mcp.joinotto.com/mcp` is publicly reachable.
- Confirm OAuth metadata discovery works.
- Confirm Claude can authorize and call tools with a reviewer demo account.
- Confirm support, privacy, and terms URLs are live.
- Provide screenshots or walkthrough materials requested by Claude.
- Keep interactive MCP App UI claims out of the submission until real UI resources are implemented.
