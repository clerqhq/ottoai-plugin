# Otto AI For Claude

Otto AI connects Claude to Otto business workflows through the Otto remote MCP connector.

## Overview

Use Otto AI in Claude to review invoices, create draft invoices, prepare monthly business reviews, organize tax and bookkeeping readiness checklists, and work with contacts and payment methods from the connected Otto company.

The plugin bundle provides Claude-facing workflow skills. The MCP connector provides the authenticated tool connection to Otto.

## Connector

- MCP server: `https://mcp.joinotto.com/mcp`
- Website: `https://joinotto.com`
- Support: `hello@joinotto.com`
- Privacy policy: `https://joinotto.com/privacy-policy`
- Terms: `https://joinotto.com/terms`

## Setup

### Claude Browser And Desktop

1. Open Claude connectors.
2. Connect Otto AI.
3. Authorize your Otto account.
4. Ask Claude to use Otto for invoices, business review, or tax readiness.

### Claude Code

```bash
claude mcp add --transport http otto https://mcp.joinotto.com/mcp
```

Then open a Claude Code session and run:

```bash
/mcp
```

Complete the Otto authorization flow when prompted.

## Included Skills

- `invoice-operations`: Review, create, update, send, cancel, copy, and record payments for invoices.
- `monthly-business-review`: Review invoice totals, receivables, follow-ups, and monthly next steps.
- `tax-document-readiness`: Prepare invoice, payment, contact, and document checklists for bookkeeping or tax review.

## Review Notes

- The MCP server requires Otto OAuth.
- Mutating and external-send tools require explicit user confirmation in their tool descriptions.
- Destructive/open-world/read-only annotations are declared in the Otto MCP tool definitions.
- Reviewer accounts should contain sample invoices, contacts, and payment methods.

## Suggested Test Prompts

- "Use Otto to show my overdue invoices."
- "Prepare my monthly business review for this month."
- "Create a draft invoice for Acme Corp for $500 due next Friday."
- "Send a reminder for the latest overdue invoice for Acme Corp."
- "Help me prepare my tax document readiness checklist for this year."
