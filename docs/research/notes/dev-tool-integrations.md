# Developer Personal Planner Niche: Work-Tracker and Calendar Integrations

Research date: 2026-11-15. Sources are vendor docs, help centres, changelogs and official developer documentation unless stated otherwise. Where a page shows a date, it is given. Researcher budget limited depth; see Gaps under each question.

## Q1. Which products target developers for personal planning/aggregation, and what do they do well or badly?

### Takeaway
No product found is a dedicated "developer personal planner". The space is split between (a) general daily planners that added Jira/GitHub/Linear importers (Sunsama, Akiflow, Motion via Zapier), (b) tracker-native personal views (Linear My Issues/Pulse/Inbox, Jira plan calendar), (c) launcher-style shortcuts (Raycast extensions), and (d) open-source time trackers/planners (Super Productivity). Integration depth is usually one-way import, with limited write-back. Height, a dev-oriented PM tool, shut down on 24 Sept 2025.

### Cited Findings
**Sunsama (general daily planner with dev importers)**
- Jira Cloud integration: browse and import issues into the daily plan. The Jira due date maps to the Sunsama due date and the remaining estimate maps to planned time, but both are copied once at import and do not sync afterwards. Sunsama can update the Jira issue's status when you import or complete a task (a prompt that can be turned off) — [Sunsama Jira help](https://help.sunsama.com/docs/integrations/jira); [Interacting with imported issues](https://help.sunsama.com/docs/jira-interacting-with-imported-tasks)
- The GitHub integration is a GitHub App that can be installed for personal or org accounts with per-repo access control. It imports issues **and pull requests**. Imported items are read-only in Sunsama except labels. Notes, subtasks, time tracking and comments stay private to Sunsama. You can also paste a GitHub issue URL to create a task — [Sunsama GitHub help](https://help.sunsama.com/docs/integrations/github)
- Linear integration exists (browse/import issues) — [Sunsama Linear help](https://help.sunsama.com/docs/linear-browsing-and-importing-issues)
- Users are asking for deeper Jira sync. The public roadmap has requests titled "Fully-sync Jira so I can use this product" and "Jira Automation Features" — [Sunsama roadmap](https://roadmap.sunsama.com/improvements/p/fully-sync-jira-so-i-can-use-this-product); [Jira Automation Features](https://roadmap.sunsama.com/improvements/p/jira-automation-features)
- No native Azure DevOps integration was found. Only a generic Zapier connector exists — [Zapier Sunsama + Azure DevOps](https://zapier.com/apps/sunsama/integrations/azure-devops)

**Akiflow (general planner and inbox aggregator)**
- Native Linear integration, described by Akiflow as two-way synced. Done/undone can be mapped to Linear statuses, and deleting in Akiflow does not delete the Linear issue — [Akiflow Linear help](https://product.akiflow.com/help/articles/1028587-linear)
- Native Jira integration ("keep track of all your Jira issues"), which can import Jira deadlines as task dates. Sync direction is not clearly documented — [Akiflow Jira guide](https://how-to-use-guide.akiflow.com/jira)
- A GitHub integration is listed, but no depth details were found. Zapier one-way automations also exist (e.g. new GitHub issue to Akiflow task) — [Zapier Akiflow integrations](https://zapier.com/apps/akiflow/integrations)
- Azure DevOps works only via Zapier. No native integration was found — [Zapier Akiflow + Azure DevOps](https://zapier.com/apps/akiflow/integrations/azure-devops)

**Motion (AI scheduler)**
- Azure DevOps reaches Motion only through Zapier ("new work item to Motion task") or Skyvia. No native integration was found — [Zapier Azure DevOps + Motion](https://zapier.com/apps/azure-devops/integrations/motion/1664293/create-tasks-in-motion-for-new-work-items-in-azure-devops); [Skyvia](https://skyvia.com/data-integration/integrate-azure-devops-motion)

**Height (dev-focused PM tool, now defunct)**
- Height announced its shutdown with six months' notice. The final day was 24 September 2025, after about 3.5 years of public availability — [AlternativeTo news, March 2025](https://alternativeto.net/news/2025/3/height-project-management-tool-to-shut-down-by-september-2025/)

**Linear (tracker-native personal views)**
- Pulse launched in April 2025: a "personalized, realtime feed of updates and discussions" — [Linear changelog 2025-04-16](https://linear.app/changelog/2025-04-16-pulse)
- My Issues now has an "Assigned" section for issues delegated to coding agents, showing coding-session status (July 2026), plus a Delegated section on iOS (Nov 2026). The Inbox supports filtering by actor and pinning Pulse or My Issues — [Linear changelog](https://linear.app/changelog); [2026-11-04 mobile diffs](https://linear.app/changelog/2026-11-04-mobile-diffs)
- Linear's personal views centre on Linear-only work. No cross-tool aggregation (Jira/ADO) or calendar time-blocking was found in the changelog material reviewed — [Linear changelog timeline](https://linear.app/changelog/timeline)

**Jira's native features**
- Jira's plan **calendar view** shows issues with start and due dates plus sprints and releases. Issues scheduled with dates rolled up from subtasks do not appear — [Atlassian support](https://support.atlassian.com/jira-software-cloud/docs/what-is-the-calendar-view-of-your-plan)
- An Atlassian Community reply from June 2026 says native Jira "doesn't really allow" mixing issue types with personal events on one calendar — [Atlassian Community](https://community.atlassian.com/forums/Advanced-Planning-in-Jira/What-is-the-correct-way-to-add-or-track-planned-holidays/td-p/3182561)
- Marketplace apps fill the gap: "Calendar for Jira" (JQL-scoped personal/shared calendars, non-Jira events, .ics subscriptions), "My Calendar – plan across projects", "Issue Calendar for Jira" and "My Worklist" — [Calendar for Jira](https://marketplace.atlassian.com/apps/1210975/calendar-for-jira-plan-team-activities); [My Calendar](https://marketplace.atlassian.com/apps/1211040/my-calendar-plan-across-projects-teams-for-jira); [Issue Calendar](https://marketplace.atlassian.com/apps/1225446/issue-calendar-for-jira?tab=overview); [My Worklist](https://marketplace.atlassian.com/apps/3426305250/my-worklist)
- A July 2026 blog explains how to set up a shared Jira team calendar where each user sees only their own work, which shows demand for "my work" calendar views — [Brizo blog, 2026-07-10](https://blog.brizoit.com/2026/07/10/how-to-set-up-a-shared-team-calendar-in-jira-where-each-user-sees-only-their-own-work/)

**Raycast (launcher extensions; macOS)**
- The official GitHub extension has "My Pull Requests", including a menu-bar version. It supports OAuth or a PAT — [Raycast GitHub commands](https://www.raycast.com/raycast/github/commands)
- The community "ado search" extension has "My Work Items" (assigned items, state change, create linked branch) and searches PBIs and open PRs. It needs a PAT with Work Items and Code read/write scopes — [ado search](https://www.raycast.com/willem_van_lent/ado-search)
- The "mach triage" extension aggregates Jira, Linear and GitHub *issues* (not PRs) through a local bridge in a companion desktop app — [mach triage](https://www.raycast.com/mikewhob/mach-triage)

**Super Productivity (open source; see Q5)**
- This is the most dev-specific planner found. It has Jira, GitHub, GitLab, Gitea/Forgejo, Google Calendar and CalDAV integrations, with time tracking against issues — [Super Productivity integrations](https://super-productivity.com/integrations/)

### Inferences
- The incumbent model is "planner first, dev tools as importers". Imported items are mostly read-only snapshots (Sunsama copies Jira dates once; GitHub items are read-only). Reviews and PRs are weakly represented: only Sunsama (GitHub PRs) and Raycast (GitHub PRs, ADO PRs) clearly surface them.
- A planner that treats PR review requests, CI failures and tickets as first-class "work units" across Jira, GitHub and ADO appears unserved. This is an inference from the absence of evidence, not a confirmed market gap.
- Height's shutdown and Linear's pivot toward AI-agent delegation suggest dev-tool vendors are prioritising team and agent workflows over personal planning.

### Gaps
- Not researched due to budget: Shortcut, Plaky, GitHub Projects (roadmap/calendar views), Jira's "Your work" page, Reclaim.ai, Morgen, Routine, Tempo and Todoist dev integrations. GitHub Projects has a roadmap layout but I did not verify current calendar-view status.
- No pricing collected for Sunsama, Akiflow or Motion.
- No developer forum sentiment (HN or r/ExperiencedDevs) was retrieved. Searches returned only vendor content.

## Q2. Is there any planner with first-class Azure DevOps integration?

### Takeaway
Largely verified gap. None of the mainstream personal planners checked (Sunsama, Akiflow, Motion, Super Productivity) has a native Azure DevOps integration. ADO users rely on Zapier/Power Automate bridges, Microsoft To Do/Planner workarounds, or a Raycast extension.

### Cited Findings
- Sunsama: only a Zapier route — [Zapier](https://zapier.com/apps/sunsama/integrations/azure-devops)
- Akiflow: only a Zapier route — [Zapier](https://zapier.com/apps/akiflow/integrations/azure-devops)
- Motion: only Zapier or Skyvia — [Zapier](https://zapier.com/apps/azure-devops/integrations/motion/1664293/create-tasks-in-motion-for-new-work-items-in-azure-devops)
- Super Productivity's official integrations page lists Jira, GitHub, GitLab, Gitea/Forgejo, Google Calendar and CalDAV, with no Azure DevOps — [Super Productivity integrations](https://super-productivity.com/integrations/). A third-party directory claims ADO support but is marked "Verified: Not yet" — [gappsy](https://gappsy.com/tools/super-productivity/). Treat that claim as unreliable.
- Practitioner workflow (2020): plan weekly by checking Azure Boards and Microsoft To Do by hand, block calendar time, and use Power Automate to create To Do/Outlook tasks when a work item is assigned — [Thomas Maurer blog, Apr 2020](https://www.thomasmaurer.ch/2020/04/how-i-manage-and-plan-tasks-as-a-remote-worker/)
- Older note (2019): "Azure DevOps Work Items are not shown in To-Do app", so a Flow was needed — [Dave Stork, May 2019](https://dirteam.com/dave/2019/05/14/getting-azure-devops-tasks-in-to-do-with-flow/)
- Bridging ADO to Microsoft Planner needs Graph + ADO REST, Power Automate's **premium** (paid) ADO connector, or an iPaaS. The "work item updated" trigger is skipped when links are added or removed — [Crosstown Tech](https://crosstowntech.com/apps/sync-microsoft-planner-with-azure-devops/); [Power Automate + ADO + Planner: What Breaks](https://crosstowntech.com/apps/planner-azure-devops-power-automate/)
- Miro offers "Planner for Azure DevOps", which is team sprint planning on a whiteboard rather than personal day planning — [Miro help](https://help.miro.com/hc/en-us/articles/15280547945618-Planner-for-Azure-DevOps)
- Time-tracking tools (e.g. Timeneye, Aerion, Projectworks) have native ADO links, but they serve hour logging, not day planning — [Timeneye changelog](https://feedback.timeneye.com/changelog/azure-devops-integration-now-native); [Aerion](https://www.aerion.app/integrations/azure-devops)

### Inferences
- First-class ADO support (assigned work items, PRs awaiting my review, pipeline failures, state write-back) looks like a real differentiator for a new planner, especially for Microsoft-shop and enterprise QE audiences.
- The auth situation (Q4) is a likely reason incumbents have not built it: Entra-only OAuth for new apps, no MSA support, and enterprise tenant consent.

### Gaps
- Not checked: Reclaim.ai, Morgen, Routine, Todoist, TickTick, ClickUp personal views, or the Microsoft To Do/Planner + ADO native status as of 2026. The "not shown in To Do" claim dates from 2019.
- No reliable data on how many developers use ADO versus Jira or GitHub.

## Q3. What do QA/quality engineers use for test-pass planning and checklists? Is there demand for reusable checklist templates?

### Takeaway
Formal test management happens in TestRail, Xray and Zephyr, tied to Jira. Spreadsheets and checklist templates are common for regression and release checklists. Vendor content shows that reusable regression and release checklists are a recognised need, but I found no direct community evidence of demand for templates inside a personal planner.

### Cited Findings
- TestRail positions itself for regression test planning, including reusable test suites and plans — [TestRail blog](https://www.testrail.com/blog/testrail-regression-testing/); [TestRail test planning checklist](https://www.testrail.com/blog/test-planning-checklist/)
- TestRail and Xray generate acceptance-criteria and coverage matrices from Jira links automatically. With spreadsheet tracking, the matrix has to be built by hand — [Manifestly test plan checklist](https://app.manifest.ly/public/checklists/test-plan-checklist)
- Spreadsheet QA setups break down at the link between test cases and bug-tracker rows "once you get past a handful of releases" (user comment on a template) — [Manifestly QA checklist](https://app.manifest.ly/public/checklists/qa-testing-checklist)
- Regression checklists are valued for consistency across testers and as an audit trail of what was and wasn't tested. Guides suggest recording the CI run ID so defects trace back to the run — [checklist.gg regression template](https://checklist.gg/templates/regression-testing-checklist); [Manifestly regression checklist](https://app.manifest.ly/public/checklists/regression-testing-checklist)
- A release-readiness article lists 12 gates, from smoke tests through rollback and feature flags. It criticises a manually typed "pass" in a spreadsheet cell as stale ("kept saying what it said when someone last looked") — [Autonoma blog](https://getautonoma.com/blog/release-readiness-checklist)
- A case study describes a team moving its TestRail test plan into a Confluence checklist attached to the epic, so "most of it lived where the work happened" — [Titan Apps blog](https://titanapps.io/blog/?p=9626)
- Infinum publishes a QA pre-release testing handbook, an example of org-level reusable release checklists — [Infinum QA handbook](https://infinum.com/handbook/qa/testing/testing-prerelease)
- A whole category of checklist-template SaaS products targets QA processes (Manifestly, checklist.gg) — [Manifestly](https://app.manifest.ly/public/checklists/quality-assurance-checklist)

### Inferences
- There is a plausible niche between heavyweight test management tools and spreadsheets. A personal planner could offer reusable "test pass", "regression" and "release" checklist templates that start per sprint or release, link to the Jira/ADO ticket, and optionally record the CI run.
- Evidence is mostly vendor-authored, which suggests a known need but does not prove willingness to pay inside a personal planner.

### Gaps
- No r/QualityAssurance or HN threads were retrieved. Searches returned only vendor content, so community sentiment is unverified.
- Not covered: Azure Test Plans (ADO's native test tool; note the "Basic + Test Plans" access level in Q4), Zephyr Scale/Squad specifics, Qase, or TestRail pricing for 2026.
- No survey data on how QEs plan their personal day.

## Q4. Technical feasibility: Jira, Azure DevOps and GitHub APIs for a small independent app

### Takeaway
All three are feasible for an indie developer, with no fee to access the APIs. A Marketplace listing is optional for Jira OAuth 3LO apps. Constraints: Jira's new hourly points quota is shared across all tenants in Tier 1 (enforced since 2 March 2026) and refresh tokens rotate. Azure DevOps OAuth is closed to new apps, and Entra ID OAuth does not support personal Microsoft accounts (MSA), so a new indie app may need PAT fallback. GitHub is the most generous and best documented.

### Cited Findings
**Jira Cloud: OAuth 2.0 (3LO)**
- Create the app in the developer console (Create > OAuth 2.0 integration), set the callback URL and add API permissions. Apps are private by default; switching on "Sharing" under Distribution gives an authorization URL usable by any user. Unreviewed apps show users a warning. Approval follows the Marketplace listing steps, but sharing does not list the app, and listed 3LO apps get "informational listings with limited features" — [Atlassian OAuth 2.0 3LO docs](https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps/)
- Only the authorization code grant is supported (no implicit grant). Request `offline_access` for refresh tokens. Use `GET /oauth/token/accessible-resources` to get the cloudid, then call `https://api.atlassian.com/ex/jira/{cloudid}/...`. CORS is supported on api.atlassian.com — [Atlassian 3LO docs](https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps/)
- Refresh tokens rotate (single use). They expire after 90 days of inactivity, with a 10-minute reuse interval before breach detection triggers. A password change invalidates them — [Atlassian 3LO docs](https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps/). Community posts also cite a 365-day absolute expiry and an older 30-day figure from 2021. The current official page did not state an absolute limit — [Atlassian dev community](https://community.developer.atlassian.com/t/superseded-31-january-2022-action-required-deprecating-persistent-refresh-tokens/50348)
- Admins cannot revoke a single user's access from Connected Apps; they can only uninstall the app. Some REST resources are marked "Apps can't access this REST resource" — [Atlassian 3LO docs](https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps/)
- **Rate limits (2026 points model):** Forge, Connect and **OAuth 2.0 (3LO)** apps consume points per request based on the work performed, against an hourly quota. Tier 1 is a global pool per app shared across all tenants; Tier 2 is per-tenant and requires review. Enforcement started 2 March 2026 for the Jira and Confluence REST APIs, with GraphQL later. An update on 20 October 2026 says Tier 2 is for multi-customer apps. API-token traffic is handled separately under burst limits. Distributing duplicate per-tenant copies of an app to get more quota violates policy — [Atlassian blog "Evolving API rate limits", 12 Dec 2025, updated 20 Oct 2026](https://www.atlassian.com/blog/platform/evolving-api-rate-limits)
- A search-result summary of the community thread cites 65K points per hour for Tier 1 (shared across tenants). The official blog page fetched did not state a number, so treat it as unverified. Developers in the thread complain about missing rate-limit headers and undocumented 429s — [Atlassian community thread "2026 point-based rate limits"](https://community.developer.atlassian.com/t/2026-point-based-rate-limits/97828)
- Forge (Atlassian-hosted apps) moved to consumption pricing above a free tier from January 2026. Per-unit rates were not retrieved. This matters only if the app is built on Forge rather than as an external 3LO client — [Atlassian blog, Forge pricing Jan 2026](https://www.atlassian.com/blog/development/updates-to-forge-pricing-effective-january-2026)

**Azure DevOps: REST plus Entra ID OAuth**
- Azure DevOps OAuth stopped accepting new app registrations in April 2025 and is "scheduled for removal in 2026". New apps must use Microsoft Entra ID OAuth. Existing apps' secrets expire every 60 days. ADO OAuth supports only the web-server flow, which Microsoft calls unsuitable for mobile apps. Org admins can disable third-party OAuth access, which causes TF400813 errors — [Microsoft Learn, ADO OAuth (updated 2026-11-03)](https://learn.microsoft.com/en-us/azure/devops/integrate/get-started/authentication/azure-devops-oauth); [Azure DevOps blog](https://devblogs.microsoft.com/devops/no-new-azure-devops-oauth-apps-beginning-february-2025/)
- Entra ID OAuth uses delegated flows. Register the app in Entra and add delegated permissions for the "Azure DevOps" resource (ID `499b84ac-1321-427f-aa17-267ca6975798`), using the `.default` scope. **"Microsoft Entra apps don't natively support Microsoft account (MSA) users for the Azure DevOps resource"**; Microsoft is "working on" MSA support. Microsoft says ADO OAuth apps "remain your best option" for MSA users, but new registrations of those are closed — [Microsoft Learn, Entra OAuth for ADO (updated 2026-11-03)](https://learn.microsoft.com/en-us/azure/devops/integrate/get-started/authentication/entra-oauth)
- No firm 2026 retirement date for ADO OAuth was found ("exact date TBD by Microsoft") — [Mend docs](https://docs.mend.io/renovate/latest/azure-devops-global-pat-and-oauth-1.0-deprecation)
- Rate limits: a TSTU (throughput unit) is the average load of one normal user per 5 minutes. The global consumption limit is 200 TSTUs per identity in a sliding 5-minute window. Throttling escalates from delayed responses to HTTP 429, with Retry-After and X-RateLimit-* headers — [Microsoft Learn, rate limits](https://learn.microsoft.com/en-us/azure/devops/integrate/concepts/rate-limits)
- Service hooks (webhooks) can be created programmatically through the REST API. Payloads are capped at 2 MB — [Microsoft Learn, service hooks troubleshooting](https://learn.microsoft.com/en-us/azure/devops/service-hooks/troubleshoot)
- The Raycast ADO extension uses PATs with Work Items and Code read/write scopes, a common indie workaround — [ado search](https://www.raycast.com/willem_van_lent/ado-search)

**GitHub: REST/GraphQL with GitHub Apps or OAuth**
- REST primary limits: 60 requests/hour unauthenticated; 5,000/hour per user for PATs, OAuth tokens and GitHub App user tokens (shared budget). GitHub App installation tokens start at 5,000/hour and scale by 50 per repo and per user beyond 20, capped at 12,500. Enterprise Cloud orgs get 15,000/hour — [GitHub Docs, REST rate limits](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api)
- Secondary limits: 100 concurrent requests; 900 points/minute for REST and 2,000 for GraphQL; about 80 content-creating requests per minute and 500 per hour; 2,000 OAuth token requests per hour. GET costs 1 point and writes cost 5 — [GitHub Docs](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api)
- Sunsama ships its GitHub integration as a GitHub App with per-org and per-repo access selection, a production precedent for this pattern — [Sunsama GitHub help](https://help.sunsama.com/docs/integrations/github)

### Inferences
- **Jira:** Feasible without a Marketplace listing (enable Sharing). Users will see an "unreviewed app" warning unless the app goes through review. The Tier 1 hourly quota is shared across all customers, so an indie app must poll sparingly, cache, and prefer webhooks or incremental JQL (`updated >= ...`). Quota growth may require a Tier 2 review. Rotating refresh tokens need careful, concurrency-safe storage.
- **Azure DevOps:** The hardest of the three. A new app can only use Entra OAuth, which (a) does not cover MSA-backed orgs (many personal and indie ADO orgs) and (b) may need tenant admin consent in enterprises that restrict user consent (standard Entra behaviour, not verified in these sources). A realistic indie strategy is Entra OAuth plus a PAT fallback. The 200 TSTU per 5 minutes limit is per identity, so per-user polling should be fine. Service hooks need project-level admin rights to create, which may push the app toward polling (inference, not verified).
- **GitHub:** The easiest. A GitHub App with user-to-server tokens gives 5,000 requests/hour per user plus webhooks. GraphQL is efficient for "PRs awaiting my review" and "issues assigned to me" queries.
- Integration API access costs nothing for Jira (3LO), ADO or GitHub. The main costs are engineering time, hosting for webhook receivers and token storage, and Zapier-like alternatives avoided.

### Gaps
- Jira webhooks for OAuth 3LO apps (dynamic webhooks: registration limits and expiry/refresh) were not confirmed from a source. I believe they expire after about 30 days unless refreshed, but this is unverified.
- The exact Jira Tier 1 points quota and per-endpoint point costs are not in the official blog. The 65K/hour figure is unverified.
- No sources found on Atlassian requirements for 3LO apps beyond the reviewed-or-unreviewed warning (privacy policy, personal data reporting API for storing personal data). Atlassian has historically required the Personal Data Reporting API for apps that store user data; verify this.
- Not verified: Entra admin-consent specifics for ADO, Linear's API (GraphQL rate limits, OAuth), GitHub GraphQL primary limit (5,000 points/hour), and GitHub webhook details.
- The ADO TSTU limit is described in Microsoft docs alongside per-pipeline limits. A third-party profile claims per-user limits cannot be raised, which conflicts with a Microsoft note about the Basic + Test Plans access level. Unresolved.

## Q5. Open-source and self-hosted planners popular with developers, and their integrations

### Takeaway
Super Productivity is the standout open-source developer planner, with Jira, GitHub, GitLab, Gitea/Forgejo, Google Calendar and CalDAV integrations, time tracking, and a plugin/REST API. It has no Azure DevOps or Linear connector. Vikunja and Planka are general self-hosted task boards without confirmed issue-tracker integrations.

### Cited Findings
- Super Productivity: Jira Cloud and Data Center (pulls sprint tickets and epics, tracks time, pushes status updates back); GitHub (syncs issues and PRs, tracks time); GitLab (including self-hosted); Gitea/Forgejo; Google Calendar (display calendars, auto-events for scheduled task blocks); CalDAV (Nextcloud, Fastmail, iCloud). It has a plugin system and REST API for custom integrations. It warns that failed issue-tracker updates are not retried automatically. Azure DevOps, Linear, Trello, OpenProject and Redmine are not listed on the integrations page — [Super Productivity integrations](https://super-productivity.com/integrations/)
- The project README (via mirror) mentions Jira, GitLab, GitHub and OpenProject integrations, and notes that a Chrome extension was needed for Jira and idle tracking in the web version — [SourceForge mirror](https://sourceforge.net/projects/super-productivity.mirror/); [GitHub repo](https://github.com/johannesjo/super-productivity)
- Vikunja: lists, Kanban, Gantt, CalDAV sync and a REST API. It imports from Todoist, Trello and Microsoft To-Do, and an importer for Planka is in unstable builds. No confirmed GitHub or Jira integration — [Vikunja vs Planka (vendor page)](https://vikunja.io/compare/planka); [Vikunja features](https://vikunja.io/features)
- Planka: a Trello-style Kanban board with no CalDAV. Reviewers call it the "better pure kanban" and Vikunja the better all-rounder — [dev.to comparison](https://dev.to/selfhostingsh/vikunja-vs-planka-self-hosted-task-management-4g16)
- The awesome-selfhosted "Task Management & To-do Lists" category catalogues further options — [awesome-selfhosted](https://awesome-selfhosted.net/tags/task-management--to-do-lists.html)

### Inferences
- Super Productivity proves developer demand for "tickets plus time-boxing plus calendar" in one local-first tool. Its gaps (ADO, Linear, PR review queues, QA checklist templates) are a possible wedge for a new entrant.
- Self-hosted boards (Vikunja, Planka) serve team or personal Kanban rather than tracker aggregation.

### Gaps
- No GitHub star counts, download figures or license confirmation were retrieved for Super Productivity (believed MIT, unverified) or Vikunja (believed AGPL, unverified).
- Not researched: other OSS dev tools (Taskwarrior with bugwarrior, which syncs many trackers; Focalboard; Leantime), or whether Super Productivity has community plugins for ADO.
