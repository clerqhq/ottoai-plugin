# Otto AI Plugin Extensions

Initial public submissions are skills-first with a remote MCP server.

This repository does not yet declare interactive MCP App UI resources. Future plugin extension work should be implemented from the MCP server with tool `_meta` and `ui://` resources so hosts can render native surfaces.

## Initial Extension Targets

1. Sidebar: Otto dashboard launcher
2. Composer action: Create invoice draft
3. Result component: Invoice preview
4. Result component: Monthly review summary
5. File/document extension: Receipt or statement review

## Implementation Notes

- Add real extension declarations only when the MCP server serves the matching UI resource.
- Register interactive tools with MCP App server helpers.
- Use stable `ui://otto/...` resource URIs.
- Keep destructive actions behind explicit confirmation.
