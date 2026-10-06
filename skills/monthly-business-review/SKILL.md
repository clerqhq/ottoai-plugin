---
name: monthly-business-review
description: Help business owners review monthly invoice performance, receivables, follow-ups, and operational next steps.
---

# Monthly Business Review

Use this skill when the user asks for a monthly review, finance check-in, cash collection plan, or operating summary.

## Review Flow

1. Establish the review period. Default to the current month if the user does not specify one.
2. Use available Otto tools to summarize invoice totals, overdue invoices, paid invoices, and outstanding balances.
3. Identify the highest-priority follow-ups:
   - overdue invoices
   - large outstanding balances
   - invoices nearing due date
   - missing recipient or payment method details
4. Present a short action plan.
5. Ask before taking any write action, sending reminders, or recording payments.

## Output Shape

Use concise sections:

- Summary
- Receivables
- Follow-ups
- Suggested Actions

Do not invent accounting data. If a number is unavailable from Otto tools, say what is missing and offer a next step.
