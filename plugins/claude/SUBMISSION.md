# Claude Submission Notes

Submit this folder as the Claude plugin bundle.

## Plugin Bundle

- Repository: `clerqhq/ottoai-plugin`
- Source path: `plugins/claude`
- Prepared plugin path: `plugins/claude`
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
npm run build:claude
claude plugin validate ./plugins/claude
```

## MCP Connector

The Otto MCP connector should also be submitted/tracked separately.

- Connector name: Otto AI
- MCP server URL: `https://mcp.joinotto.com/mcp`
- Auth: OAuth
- Website: `https://joinotto.com`
- Support: `hello@joinotto.com`
- Privacy policy: `https://joinotto.com/privacy-policy`
- Terms: `https://joinotto.com/terms`

If the connector has already been submitted, include that review/submission ID when submitting or following up on this plugin bundle.

## Required Before Submission

- Confirm `https://mcp.joinotto.com/mcp` is publicly reachable.
- Confirm OAuth metadata discovery works.
- Confirm Claude can authorize and call tools with a reviewer demo account.
- Confirm support, privacy, and terms URLs are live.
- Provide screenshots or walkthrough materials requested by Claude.
- Keep interactive MCP App UI claims out of the submission until real UI resources are implemented.
