---
name: invoice-operations
description: Use Otto AI tools to review, create, update, send, cancel, copy, and record payments for invoices.
---

# Invoice Operations

Use this skill when the user wants to work with invoices in Otto.

## Principles

- Always operate only on the currently connected Otto company.
- Prefer read tools before write tools so the user can confirm the target record.
- Never send, cancel, delete, mark unpaid, or record payment without explicit user confirmation.
- When a user names a client, search contacts and invoices before asking for IDs.
- When creating an invoice, collect and confirm sender, recipient, line items, dates, payment method, and send/finalize preference.
- If the user asks for an unsupported money movement, explain that Otto can manage invoice records but cannot transfer funds from ChatGPT.

## Common Workflows

### Review Invoices

1. Use invoice list or summary tools to find the relevant invoices.
2. Present concise totals, statuses, due dates, and recipient names.
3. Offer next actions such as sending reminders, copying an invoice, or recording a payment.

### Create Invoice

1. Fetch and confirm sender details.
2. Search contacts for the recipient.
3. Ask for missing recipient details if no contact matches.
4. Create the draft only after confirmation.
5. Collect line items, invoice date, due date, and payment method.
6. Show a final summary before finalizing or sending.

### Send Reminder

1. Find the exact invoice.
2. Summarize recipient, amount, status, and due date.
3. Ask for explicit confirmation.
4. Send one reminder only for the confirmed invoice.

### Record Payment

1. Find the exact invoice.
2. Confirm amount, payment date, and whether the payment is partial or full.
3. Record the payment only after confirmation.
4. Report the updated payment state.
