# Calendar-first / time-blocking daily planners: competitor profiles (as of 15 Nov 2026)

Scope: Sunsama, Akiflow, Morgen, Routine, Amie, Structured, Notion Calendar, Fantastical, plus newcomers (nocal, Ellie Planner, Fokus, and others). Research date 15 Nov 2026. Official pricing and product pages were fetched where possible. Many third-party "2026 reviews" are published by competitors (Morgen, Ellie, Saner.AI, Akiflow, Routine, nocal). These are flagged where used.

## Q1. How do tasks and calendar connect (drag to calendar, time-blocking, quick-add, unscheduling)?

### Takeaway
Drag-a-task-onto-a-calendar time-blocking is table stakes for Sunsama, Akiflow, Morgen and Routine (paid). Notion Calendar does it only for Notion database items. Structured uses a single-day visual timeline rather than a real calendar grid. Fantastical and the 2026 version of Amie are calendar-first apps with only a thin task layer: Fantastical has no time-blocking layer, and Amie's core is now AI meeting notes. The differentiators are now AI auto-planning (Sunsama Autoplan, Morgen AI Planner, Akiflow Aki) and recurring "frames" or "slots" that tasks flow into.

### Cited Findings
**Sunsama**
- Jira issues (and other integration items) can be dragged onto the task list, dragged onto the calendar in calendar view to timebox them, or added to today or another date via "Add to today" / the `S` key. A dedicated Jira panel opens with `Shift J` and supports JQL search, presets (My open issues, Current Sprint) and saved filters. — [Sunsama Help: Jira Integration](https://help.sunsama.com/docs/integrations/jira)
- Imports are manual; the Jira help page describes no automatic import. The same issue can be imported several times under different titles to track separate chunks of work. — [Sunsama Help: Jira Integration](https://help.sunsama.com/docs/integrations/jira)
- Autoplan (still labelled beta in late 2026) drafts the day. It can plan tasks into focus blocks and pick up "open loops" such as reviews and emails waiting on you. Runs became reversible (29 Sep 2026), and undo restores task priorities. By 26 Oct 2026 a plan was ready "in seconds instead of about half a minute". — [Sunsama changelog](https://roadmap.sunsama.com/changelog); [Releasebot Sunsama notes](https://releasebot.io/updates/sunsama)

**Akiflow**
- The official pricing page lists calendar planning, time blocking, availability sharing, quick capture, a daily planning ritual and a command bar / keyboard shortcuts. — [Akiflow Pricing](https://akiflow.com/pricing)
- "Time Slots" are recurring calendar blocks that tasks can be assigned to. A task can "Copy the Slot recurrence" so it always appears in that slot, and a changelog lists "Clone Time Slot Recurrence". Reviewers say slots still need manual adjustment. — [Akiflow guide: Time Slots](https://how-to-use-guide.akiflow.com/time-slots); [Akiflow changelog (Featurebase), 29 Apr 2025](https://akiflow.featurebase.app/en/changelog/rocket-aki-update-time-slots-projects-tags)

**Morgen**
- The AI Planner turns the to-do list into a time-blocked plan for 1 to 7 days at a time. It ranks tasks with the "Morgen Priority Factor" (priority, due date, estimate) against your capacity. It avoids conflicts, can pad estimates by 20%, splits large tasks into sessions and inserts breaks. Nothing is scheduled until you approve it. — [Morgen AI Planner page](https://www.morgen.so/ai-planner)
- Manual drag-and-drop of tasks onto calendars still works, with or without the AI Planner. If a new event conflicts with a scheduled task, you get a notification and a one-click reschedule. Unscheduled tasks at risk of running late are flagged. — [Morgen AI Planner page](https://www.morgen.so/ai-planner)
- "Frames" are recurring blocks for a type of work (deep work, quick wins, learning). Filters on tags, task source and project decide which tasks land in each Frame. — [Morgen AI Planner page](https://www.morgen.so/ai-planner)

**Routine**
- Time blocking and time boxing are paywalled: they are not in Free and start at the Personal plan ($5/mo, introduced in Routine 1.1 on 8 Jul 2026). Routine positions itself as a combined tasks, calendar, notes and databases workspace with a Universal Inbox. — [Routine Pricing](https://routine.co/pricing); [Routine 1.1 changelog, 8 Jul 2026](https://feedback.routine.co/changelog/task-integrations-multi-window-and-exporting)

**Amie**
- Amie still has todos and calendar. The Feb 2025 pricing change said "for todos + cal nothing really changes." AI scheduling of todos onto the calendar exists (a May 2025 fix addressed AI-scheduled todos overlapping). Since 2025, most changelog entries concern meeting recording, notes and MCP. — [Amie changelog](https://amie.so/changelog)

**Structured**
- The core is "a single visual timeline" of the day, mixing tasks and imported calendar events. — [Structured](https://structured.app)
- Tasks can also wait in an inbox until they are scheduled. Calendar import, recurring tasks, "Replan" (reshuffles missed tasks) and Structured AI require Pro. — [toolradar summary via search](https://toolradar.com/tools/structured); [Saner.AI review, 14 Sep 2026 (competitor)](https://www.saner.ai/blogs/structured-review)

**Notion Calendar**
- Shows Notion database items (project timelines, task due dates) next to Google Calendar events. Dragging an item edits the Notion database entry without leaving the calendar. Importing Google Calendar events into a Notion database is not yet possible. — [Notion Calendar product page](https://www.notion.com/product/calendar)
- Third parties disagree on sync. A June 2026 guide calls it two-way. Akiflow (a competitor) says Google Calendar edits don't always push back into the Notion database, and that Notion won't block time for tasks automatically. — [workmanagementhub (2026)](https://workmanagementhub.com/notion-calendar-setup-guide-2026/); [Akiflow blog](https://akiflow.com/blog/notion-calendar-integration-smarter-scheduling)

**Fantastical**
- Natural-language quick add is the core interaction. Typing "Lunch with John… Tuesday" creates an event, and a phrase starting "todo" or "remind me to" creates a task. — [Flexibits pricing/features](https://flexibits.com/pricing?product=fantastical)
- A 6 Apr 2026 article published by competitor Morgen says Fantastical has "no time-blocking or task planning layer" for turning a task list into a daily plan. — [Morgen: Fantastical pricing (6 Apr 2026)](https://www.morgen.so/blog-posts/fantastical-pricing)

**Newcomers**
- nocal (Mac, Windows, iOS, Android) combines calendar, Markdown weekly notes (with embedded task lists, tables and code blocks), todo lists and natural-language scheduling. It suggests "calendar ideas" such as locking focus blocks or adding a wind-down block. Developers are among its listed audiences. — [nocal](https://nocal.app)
- Ellie Planner offers Brain Dump, a backlog and Timebox, plus calendar integrations. — [Ellie Planner (self-published review page, Nov 2026)](https://ellieplanner.com/comparisons/morgen-calendar-review)

### Inferences
- The exact flow the new app plans (click a day to quick-add, drag into and out of the calendar) is already standard in Sunsama, Akiflow and Morgen. The differentiation has to come from elsewhere: deep nesting, templates, Azure DevOps, and developer-centric defaults.
- No fetched source clearly documents "unschedule back to list" (drag a block off the calendar back into the backlog) as a first-class gesture in any product. It is probably present in Sunsama and Akiflow, but this is unverified.

### Gaps
- No primary-source confirmation of unschedule-by-drag behaviour for any product.
- No official Structured help docs fetched; structured.app/pricing returned 404.
- No official Notion Calendar "What's New" content for 2025–2026 was retrieved.

## Q2. Integrations: Jira, Azure DevOps, GitHub, GitLab, Linear (one-way vs two-way)

### Takeaway
No product in this category has a native Azure DevOps integration; it was absent from every integration list checked. Jira, GitHub and Linear are native in Sunsama and Akiflow. Linear is native in Morgen and Amie. Routine added Jira, Linear and GitLab in July 2026. "Two-way" usually means writing back status or completion, not full field sync. Subtasks and notes created in the planner stay in the planner.

### Cited Findings
| Product | Jira | Azure DevOps | GitHub | GitLab | Linear |
|---|---|---|---|---|---|
| Sunsama | Native, Jira Cloud only | Not listed | Native | Not listed | Native |
| Akiflow | Native, 2-way status (since Feb 2023) | Not listed | Native | Not listed | Native, 2-way (third-party claim) |
| Morgen | Only via Zapier | Not listed | Only via Zapier | Not listed | Native, read-write ("basic") |
| Routine | Added Jul 2026 | Not listed | Unclear | Added Jul 2026 | Added Jul 2026 |
| Amie | Not mentioned | Not mentioned | Not mentioned | Not mentioned | Action-item sync (Nov 2025) |
| Structured | No | No | No | No | No |
| Notion Calendar | No direct link (Notion databases only) | No | No | No | No |
| Fantastical | Not mentioned | Not mentioned | Not mentioned | Not mentioned | Not mentioned |
| nocal | Not mentioned (MCP for Cursor/Claude/ChatGPT) | Not mentioned | Not mentioned | Not mentioned | Not mentioned |

Sources and details:
- **Sunsama:** The pricing page lists Jira, GitHub and Linear among its integrations. GitLab and Azure DevOps do not appear. Other listed integrations include Asana, ClickUp, Gmail, Google Calendar/Tasks, MS Planner, Teams and To-Do, Monday, Notion, Outlook, Slack, Todoist, Toggl, Trello and Zapier. — [Sunsama Pricing](https://www.sunsama.com/pricing)
- **Sunsama Jira detail:** due date and remaining estimate are copied from Jira once, at import, and never updated afterwards. From Sunsama you can change Jira status, assignee (self), priority, due date and start date, and post comments. Labels, components and descriptions are editable only in Jira. Notes, subtasks and time tracking added in Sunsama are not visible to Jira collaborators. A status prompt appears on import and completion and can be switched off. Only Jira Cloud is supported (no Server), and some Atlassian orgs block user-installed apps. Sunny (the AI) can read Jira issues, and Autoplan considers them. — [Sunsama Help: Jira](https://help.sunsama.com/docs/integrations/jira)
- **Sunsama open requests:** the public roadmap has requests to pull Jira checklists in as Sunsama subtasks and to "fully sync Jira". Both appear unshipped. — [Sunsama roadmap: Jira checklist as subtasks](https://roadmap.sunsama.com/improvements/p/linkpull-in-jira-checklist-as-sunsama-subtasks); [Sunsama roadmap: Fully-sync Jira](https://roadmap.sunsama.com/improvements/p/fully-sync-jira-so-i-can-use-this-product)
- **Akiflow:** the integrations page lists Jira, GitHub, Linear, Trello, Asana, ClickUp and Notion. It claims "2-way sync" in general terms but gives no per-integration direction. GitLab and Azure DevOps are not listed. — [Akiflow Integrations](https://akiflow.com/integrations)
- **Akiflow Jira detail:** "Jira Software Cloud 2-ways sync" was announced 2 Feb 2023. A completion-status setting chooses whether completing a task in Akiflow marks the Jira issue done (with a chosen target status), opens it in Jira, or does nothing. Import can be filtered by assignee and status. — [Akiflow changelog, 2 Feb 2023](https://akiflow.featurebase.app/en/changelog/boom-jira-software-cloud-2-ways-sync-integration); [Akiflow guide: Jira](https://how-to-use-guide.akiflow.com/jira)
- **Akiflow reliability:** an undated user complaint on Akiflow's feedback board says the Jira integration "has not been functioning for weeks". — [Akiflow Featurebase](https://akiflow.featurebase.app/p/jira-integration-has-not-been-functioning-for-weeks)
- **Akiflow Linear:** a third-party review says completing a Linear issue in Akiflow closes it in Linear. — [usecarly Akiflow review (2026)](https://www.usecarly.com/blog/akiflow-review/)
- **Morgen:** native task integrations are Notion, Todoist, Linear, ClickUp, Obsidian, Google Tasks, MS To-Do, Zoho and Fastmail. Jira, GitLab and Azure DevOps are not mentioned. GitHub appears only as a logo in a testimonial. — [Morgen Pricing](https://www.morgen.so/pricing); [Morgen AI Planner](https://www.morgen.so/ai-planner)
- **Morgen via Zapier:** Zapier templates exist for Jira and GitHub (new Jira or GitHub issue creates a Morgen task; Morgen task updates Jira). — [Zapier: Jira + Morgen](https://zapier.com/apps/jira-software-cloud/integrations/morgen/1807766/update-issues-in-jira-software-cloud-when-tasks-are-completed-or-updated-in-morgen); [Zapier: GitHub + Morgen](https://zapier.com/apps/github/integrations/morgen/1678602/create-tasks-in-morgen-for-new-issues-in-github)
- **Morgen quality:** Ellie (a competitor) calls Morgen's task integrations "read-write but basic". — [Ellie Planner Morgen review (Nov 2026)](https://ellieplanner.com/comparisons/morgen-calendar-review)
- **Routine:** Routine 1.1 (8 Jul 2026) added Apollo, Asana, Attio, ClickUp, GitLab, Jira, Linear, Pipedrive, Trello and WhatsApp. Sync direction is not stated. GitHub and Azure DevOps are not mentioned. — [Routine 1.1 changelog](https://feedback.routine.co/changelog/task-integrations-multi-window-and-exporting)
- **Routine conflicts:** the pricing page claims 192 integrations, capped at 3 (Free), 10 (Personal) and unlimited (Professional+). An older base.routine.co page marks GitHub and Jira as "Unavailable". A third-party profile lists GitHub. — [Routine Pricing](https://routine.co/pricing); [base.routine.co integrations](https://base.routine.co/integrations); [yespress Routine](https://yespress.io/products/routine.md)
- **Amie:** Linear action-item sync (with assignee and Triage options) shipped in Nov 2025, with fixes in Jan 2026. Other integrations: ClickUp (Jan 2026), Craft (Feb 2026), Apple Reminders 2-way (Feb 2026), Todoist webhook sync (Jul 2026), Slack, Notion, HubSpot, Pipedrive, Stripe, Outlook 2-way (Aug 2026) and Gmail via MCP. Jira and GitHub are not mentioned. — [Amie changelog](https://amie.so/changelog)
- **Structured:** integrations are limited to Apple Calendar, Google Calendar and Apple Reminders. — [Saner.AI Structured review, 14 Sep 2026 (competitor)](https://www.saner.ai/blogs/structured-review)
- **Fantastical:** task integrations are iCloud Reminders, Todoist and Google Tasks. Jira and GitHub are not mentioned. — [Flexibits pricing](https://flexibits.com/pricing?product=fantastical)
- **Notion Calendar:** it integrates only with Notion databases, and Google, Outlook and iCloud calendars. — [Notion Calendar](https://www.notion.com/product/calendar)
- **nocal:** has a built-in MCP server so Cursor, Claude and ChatGPT can read and write notes and calendar context. Jira, GitHub and Linear are not mentioned. — [nocal](https://nocal.app)
- **Fokus** (newcomer): an AI daily planner that pulls tasks from Jira, Asana, Todoist, Google Tasks and others. It was in closed beta in March 2026 with a public beta planned for April 2026; whether that shipped is unverified. — [chatgate.ai: Fokus](https://chatgate.ai/post/fokus)
- **MCP trend:** in 2026, MCP servers became the main "integration" story. Sunsama MCP left beta 28 Aug 2026. Akiflow includes a hosted MCP Connector. Amie launched an MCP server 14 Jul 2026. nocal has a built-in MCP. Fantastical has a Claude connector (Premium only). — [Sunsama changelog](https://roadmap.sunsama.com/changelog); [Akiflow Pricing](https://akiflow.com/pricing); [Amie changelog](https://amie.so/changelog); [nocal](https://nocal.app); [Morgen on Fantastical (Apr 2026)](https://www.morgen.so/blog-posts/fantastical-pricing)

### Inferences
- **Azure DevOps** appears to be a clear white-space for a developer-focused planner. None of the eight products, nor nocal or Ellie, lists it natively, so Azure DevOps shops must use Zapier or MCP workarounds.
- **GitLab** is similarly thin: only Routine, since July 2026.
- **"Two-way" is shallow** in practice: status, assignee and comment write-back at best. No product syncs planner subtasks back as Jira subtasks or checklists, or pulls Jira checklists in. Sunsama users explicitly request this. Bi-directional hierarchical sync (Jira epic > story > subtask mapped onto planner nesting) would be differentiated.
- **QA-specific tools** such as TestRail, Xray and Zephyr were not seen in any integration list (absence inferred; not searched exhaustively).

### Gaps
- Per-integration sync direction for Akiflow's GitHub and Linear was not confirmed from Akiflow primary docs.
- Routine's sync direction and GitHub status are unclear (conflicting sources).
- Whether Sunsama's GitHub integration writes back (for example, closing issues) was not verified.

## Q3. Templates, reusable task bundles and recurring routines

### Takeaway
None of these products offers a first-class drag-and-drop library of reusable task bundles. Recurring tasks are universal. Recurring time containers exist (Akiflow Time Slots, Morgen Frames). Sunsama users build "templates" by duplicating tasks kept in a Templates channel. Routine lists templates as "soon". The new app's template library would be a genuine differentiator.

### Cited Findings
- **Sunsama:** no dedicated template feature. The suggested workaround is to keep tasks in a "Templates" channel in the backlog and duplicate them with Cmd/Ctrl+D. — [Sunsama Help: Task management pro-tips](https://help.sunsama.com/docs/task-management)
- **Sunsama recurring:** recurring tasks and "Channels and Contexts" are separate features. A roadmap request asks for subtasks within a recurring task to repeat only on certain days, which implies that granularity is lacking. — [Sunsama help index](https://help.sunsama.com/docs/jira-interacting-with-imported-tasks); [Sunsama roadmap](https://roadmap.sunsama.com/improvements/p/customizable-subtasks-making-subtasks-within-a-task-repeat-only-on-certain-days)
- **Akiflow:** recurring tasks, and recurring Time Slots that tasks can inherit. A Capterra reviewer notes Akiflow lacks templates for events. No task or bundle templates were found. — [Akiflow guide: Recurrent tasks](https://how-to-use-guide.akiflow.com/tasks/articles/recurrent-tasks); [Akiflow guide: Time Slots](https://how-to-use-guide.akiflow.com/time-slots); [Capterra Akiflow reviews](https://www.capterra.com/p/232035/Akiflow/reviews/)
- **Morgen:** Frames are recurring work-type blocks with filter rules, which work as a schedule template rather than a task bundle. — [Morgen AI Planner](https://www.morgen.so/ai-planner)
- **Routine:** templates are listed as "soon" on the pricing page roadmap. Routine has custom databases (3, 10 or unlimited by plan). — [Routine Pricing](https://routine.co/pricing)
- **Structured:** recurring tasks (Pro) support routines such as a morning routine on the timeline. It is described as a "light routine builder" with no streaks or analytics, and no templates are mentioned. — [Saner.AI review (14 Sep 2026, competitor)](https://www.saner.ai/blogs/structured-review)
- **Notion Calendar:** relies on Notion databases, so Notion's own database templates are available indirectly. Not verified from a source in this research.
- **Fantastical and Amie:** no task templates mentioned. Fantastical has "calendar sets" that switch automatically by time or location. — [Flexibits pricing](https://flexibits.com/pricing?product=fantastical); [Amie changelog](https://amie.so/changelog)

### Inferences
- A drag-and-drop library of reusable bundles (release checklist, regression pass, PR review) has no direct equivalent in this category.
- The closest analogues are generic recurring tasks and Morgen Frames. Akiflow's lack of event templates and Sunsama's duplicate-a-task workaround show unmet demand.

### Gaps
- Notion Calendar's interplay with Notion database templates was not verified.
- Akiflow's 2026 changelog was not checked exhaustively for templates.

## Q4. Task nesting depth

### Takeaway
Nesting is shallow across the category, typically one level of subtasks at most. Sunsama subtasks are text-plus-checkbox items, not full tasks. Akiflow only added subtasks in June 2026. No product advertises arbitrarily deep nesting. This is a clear gap for the new app.

### Cited Findings
- **Sunsama:** a task can have subtasks that can be timed and completed. Users request that "subtasks should be full tasks" because they are currently just text and a checkbox. When importing from ClickUp, Sunsama recognises only up to 2 levels. Third-level ClickUp items get flattened into the subtasks list. — [Sunsama roadmap: Subtasks should be full tasks](https://roadmap.sunsama.com/improvements/p/subtasks-should-be-full-tasks); [Sunsama roadmap: Nested subtasks levels](https://roadmap.sunsama.com/improvements/p/clickup-and-todoist-nested-subtasks-levels)
- **Sunsama subtask creation:** type `>` in the add-task modal, or alt/option-drag a task onto another to merge it in as a subtask. Subtasks can be converted back to tasks. — [Sunsama Help: Creating tasks](https://help.sunsama.com/docs/creating-tasks)
- **Akiflow:** subtasks are listed on the pricing page. A review says they were added in the 25 Jun 2026 Summer Release, having been a long-standing complaint. A feature request notes subtasks open in a small pop-up that closes on click-away. Depth is not documented. — [Akiflow Pricing](https://akiflow.com/pricing); [usecarly Akiflow review (2026)](https://www.usecarly.com/blog/akiflow-review/); [Akiflow Featurebase](https://akiflow.featurebase.app)
- **Structured:** subtasks are in the free tier, apparently as a simple checklist under a timeline item. — [toolradar via search](https://toolradar.com/tools/structured)
- **Morgen, Routine, Amie, Fantastical, Notion Calendar:** no subtask or nesting information was found in the fetched sources. Morgen largely relies on tasks living in connected apps. Notion Calendar inherits whatever the Notion database holds (for example, sub-items), but the calendar view is flat (unverified). — [Ellie Morgen review (Nov 2026)](https://ellieplanner.com/comparisons/morgen-calendar-review)

### Inferences
- "Arbitrarily deep nesting" is not offered by any calendar-first planner reviewed. Deep hierarchies currently live in Jira, Notion, ClickUp or outliners, and get flattened on import into these planners (as Sunsama's ClickUp behaviour shows).

### Gaps
- Exact subtask depth for Akiflow, Structured, Routine and Morgen's native tasks is not documented in the sources found.

## Q5. AI features (prioritisation, auto-scheduling, planning assistants)

### Takeaway
By late 2026 every paid planner except Fantastical has some AI planning, and Fantastical itself offers a Claude connector. The trend is review-before-apply plans (Morgen, Sunsama Autoplan), conversational assistants (Sunsama Sunny, Akiflow Aki, Routine assistant) and MCP servers so external agents can drive the planner. Amie has pivoted to AI meeting notes.

### Cited Findings
**Sunsama**
- Sunny (AI assistant) and MCP left beta on 28 Aug 2026; voice mode is still experimental. Since then Sunny has gained change receipts with one-click undo (29 Sep) and search of connected accounts that turns findings into tasks (26 Oct). — [Sunsama weekly changelog 28 Aug 2026](https://roadmap.sunsama.com/changelog/weekly-product-changelog-august-28-2026); [Sunsama changelog](https://roadmap.sunsama.com/changelog)
- Autoplan is still in beta (see Q1). The Pro plan explicitly includes "AI + MCP + Zapier". — [Sunsama Pricing](https://www.sunsama.com/pricing)

**Akiflow**
- Aki, the "AI executive assistant", is included in Pro alongside a hosted MCP Connector. An optional AI Meeting Assistant add-on costs $19/mo (recordings, transcripts, summaries, action items). — [Akiflow Pricing](https://akiflow.com/pricing)
- A third party says Aki triages incoming tasks and suggests a daily schedule based on priorities and available time. — [The AI Agent Index](https://theaiagentindex.com/agents/akiflow)

**Morgen**
- The AI Planner works as described in Q1: priority-factor ranking, Frames and approval required. — [Morgen AI Planner](https://www.morgen.so/ai-planner)
- "Kai", a separate AI executive assistant (meetings, inbox, daily planning), is waitlist-only. — [Morgen AI Planner](https://www.morgen.so/ai-planner)

**Routine**
- An AI assistant and voice commands are in Free (250 AI credits). AI meeting notes, agents and automations require Professional (7,000 credits). "AI autofill" is marked "soon". — [Routine Pricing](https://routine.co/pricing)
- The July 2026 changelog still described agents and automations as beta. — [Routine 1.1 changelog](https://feedback.routine.co/changelog/task-integrations-multi-window-and-exporting)

**Amie**
- Amie is now a bot-less AI meeting note taker (macOS and Windows) with custom AI prompts (Jan 2026). It launched an MCP server on 14 Jul 2026 covering calendar, contacts, todos and notes, and expanded MCP tools in Aug 2026. — [Amie changelog](https://amie.so/changelog)

**Structured**
- Structured AI (Pro) turns typed or spoken input into scheduled blocks. Replan reshuffles missed tasks. Structured AI is not available on web, and Android lags on AI features. — [Saner.AI review (14 Sep 2026, competitor)](https://www.saner.ai/blogs/structured-review); [toolradar via search](https://toolradar.com/tools/structured)

**Notion Calendar**
- The product page shows no Notion Calendar-specific AI. — [Notion Calendar](https://www.notion.com/product/calendar)
- A mid-2026 review says it has no built-in AI. — [aisotools Notion Calendar review 2026](https://aisotools.com/blog/notion-calendar-review-2026)

**Fantastical**
- No AI is mentioned on the pricing page; the core is natural-language parsing. A Claude connector is available on Premium only (per a competitor's article). — [Flexibits pricing](https://flexibits.com/pricing?product=fantastical); [Morgen on Fantastical (6 Apr 2026)](https://www.morgen.so/blog-posts/fantastical-pricing)

**nocal**
- Offers AI "calendar ideas" (stack 1:1s, skip optional meetings, lock focus blocks) and MCP for agents. — [nocal](https://nocal.app)

### Inferences
- "Later AI prioritisation" will not be a differentiator by itself: Morgen and Sunsama already ship reviewable AI day-plans. A developer angle, such as prioritising by sprint, PR review queue or release dates pulled from Jira, ADO or GitHub, would be more distinctive.
- MCP support has become an expected feature for this audience in 2026.

### Gaps
- No independent benchmark of AI plan quality was found.
- Akiflow's own documentation of Aki's prioritisation logic was not fetched.

## Q6. Pricing and platforms

### Takeaway
The premium daily-planner tier clusters at $15–20/mo annual and $22–34/mo monthly (Sunsama, Akiflow, Morgen). Routine undercuts it at $5–10/mo with a free tier. Consumer-grade options (Structured, Fantastical) run roughly $3–7/mo with free tiers and lifetime options. Notion Calendar is free. Only Routine, Notion Calendar, Fantastical, Structured and Amie have any free tier.

### Cited Findings
| Product | Free tier | Monthly | Annual (per month) | Platforms |
|---|---|---|---|---|
| Sunsama Pro | No (14-day trial, no card) | $22 | $17 ($204/yr) | Web, macOS, Windows, Linux, iOS/iPadOS, Android |
| Akiflow Pro | No (7-day trial, card required) | $34 | $19 ($228/yr) | Desktop, mobile, web |
| Morgen Individual | No (14-day trial, no card) | $30 | $15 ($180/yr) | Windows, macOS, Linux, mobile, browser |
| Routine | Yes | $5 / $10 / $15 per seat | ~17% off (prices not listed) | Web, macOS, Windows, Linux, iOS, iPadOS, watchOS, Android |
| Amie | Unclear | Unclear | Unclear (Feb 2025: Personal $6) | macOS, Windows, iOS (Android unverified) |
| Structured Pro | Yes | $2.99–6.99 | ~$2.50 ($29.99/yr); lifetime $99.99 | iOS, iPadOS, macOS, watchOS, Android, web |
| Notion Calendar | Yes (free) | n/a | n/a | macOS, Windows, iPhone, iPad, Android |
| Fantastical Individual | Yes | $6.99 | $4.75 | Mac, iPhone, iPad, Watch, Vision Pro, Windows, Googlebook; no Android |

Details and sources:
- **Sunsama:** Pro is $17/mo billed yearly ($204/yr) or $22/mo monthly, and includes unlimited usage, unlimited integrations, AI, MCP and Zapier. Enterprise is custom (SSO/SAML, SCIM, audit logs). — [Sunsama Pricing (fetched 15 Nov 2026)](https://www.sunsama.com/pricing)
- **Sunsama price conflict:** a Morgen blog says Pro is $20 annual / $25 monthly in 2026. This contradicts the official page; treat the official page as authoritative. — [Morgen: Sunsama pricing](https://www.morgen.so/blog-posts/sunsama-pricing)
- **Akiflow:** Pro Monthly is $34/mo and Pro Yearly is $19/mo ($228/yr, "saves 44%"). The 7-day trial requires a card. There is no free tier. Students and researchers get 40% off yearly. Team pricing is via sales, and regional pricing may apply. — [Akiflow Pricing (fetched 15 Nov 2026)](https://akiflow.com/pricing)
- **Morgen:** Individuals pay $30 monthly or $15/mo yearly. Teams pay $25/seat monthly or $10/seat yearly, with a 2-seat minimum. The 14-day trial needs no card, with a 30-day full refund. Discounts: 15% for switchers from Motion, Reclaim, Fantastical or Sunsama; 25% for students and nonprofits. Browser access is listed for Individuals only. — [Morgen Pricing (fetched 15 Nov 2026)](https://www.morgen.so/pricing)
- **Routine:** Free; Personal $5/mo; Professional $10/mo; Business $15/seat/mo; Enterprise custom. Annual billing gives a ~17% discount, but annual prices are not shown. Apps: Web, macOS, Windows, Linux, iPhone, iPad, Apple Watch, Android phone and tablet. — [Routine Pricing](https://routine.co/pricing)
- **Amie:** the last official pricing in the changelog is from 12 Feb 2025: Personal (todo + cal) $6/$10 (yearly/monthly), Pro $15/$20, Business $21/$30. Current pricing is unverified and sources conflict: nocal says meeting notes start at $20/mo and there is no free plan; subger lists free Personal and Pro at $12.50. The meeting recorder runs on macOS and Windows. A 2025 source said Mac, iOS and web only, with no Android. — [Amie changelog](https://amie.so/changelog); [nocal: Amie alternatives](https://nocal.app/alternatives/amie); [subger](https://subger.com/en/service/amie)
- **Structured:** the free tier includes timeline, inbox, subtasks, notes, colours, widgets and sync. Pro prices conflict by region and source: $2.99/mo, $29.99/yr or $99.99 one-time per Saner.AI (Sep 2026); $6.99/mo, $29.99/yr or $99.99 lifetime per another 2026 review; UK £5.99/£17.99/£59.99 (22 Aug 2026). Platforms: iPhone, iPad, Mac, Apple Watch, Android and web, but web is the most limited and Android lags on AI. Developer: unorderly GmbH. — [Saner.AI review](https://www.saner.ai/blogs/structured-review); [toolradar Structured pricing](https://toolradar.com/tools/structured/pricing); [coolcuration (22 Aug 2026)](https://coolcuration.com/cool/apps-structured-daily-planner)
- **Notion Calendar:** "Get Notion Calendar free". Desktop on macOS and Windows; mobile on iPhone, iPad and Android. Syncs Google, Outlook and iCloud calendars. — [Notion Calendar](https://www.notion.com/product/calendar)
- **Fantastical:** the official page has Free, Individual, Family (up to 5) and Team (adds SSO and multi-host Openings) plans, but no amounts visible. Platforms: Mac, iPhone, iPad, Apple Watch, Vision Pro, Windows and "Googlebook". — [Flexibits pricing](https://flexibits.com/pricing?product=fantastical)
- **Fantastical amounts** (6 Apr 2026, competitor-published): Individual $6.99/mo or $4.75/mo annual; Family $10.49 / $7.50; Team $6.99 / $4.75 per user. No Android. — [Morgen: Fantastical pricing (6 Apr 2026)](https://www.morgen.so/blog-posts/fantastical-pricing)
- **Ellie Planner:** $9.99/mo or $99.99/yr, 7-day trial; web, Mac, Windows, iPhone, iPad. — [Ellie Planner page (Nov 2026)](https://ellieplanner.com/comparisons/morgen-calendar-review)

### Inferences
- A new developer-focused planner priced around $8–12/mo with a usable free tier would sit between Routine and the Sunsama/Akiflow/Morgen premium cluster.
- Linux desktop support (Sunsama, Morgen, Routine) matters for developers. Akiflow's Linux support was not confirmed.

### Gaps
- Current Amie pricing could not be verified from an official page.
- Fantastical amounts come from a competitor's April 2026 article; the official page hides prices.
- Akiflow platform specifics (Linux, web) are not stated on its pricing page.

## Q7. Target audience and design tone / brand positioning

### Takeaway
- **Sunsama:** "calm", anti-burnout daily planning ritual.
- **Akiflow:** keyboard-driven power-user speed.
- **Morgen:** polished, premium unified calendar for multi-account professionals.
- **Routine:** all-in-one workspace (tasks, notes, databases, AI).
- **Amie:** "joyful", beautiful design, now an AI meeting-notes tool.
- **Structured:** calm, colourful visual timeline for consumers and ADHD users.
- **Notion Calendar:** a Notion-ecosystem companion.
- **Fantastical:** a polished Apple-centric calendar with natural-language input.

None positions itself specifically for software developers or QA engineers.

### Cited Findings
- **Sunsama:** described as an "intentional daily planner focused on preventing burnout". — [search summary of comparison article](https://www.morgen.so/blog-posts/10-sunsama-alternatives-in-2025)
- **Akiflow:** features emphasise a command bar, keyboard shortcuts, quick capture, a daily planning ritual and analytics, which together amount to a power-user orientation. — [Akiflow Pricing](https://akiflow.com/pricing); [Akiflow Command Bar](https://akiflow.com/features/command-bar/)
- **Morgen:** "beautifully designed", polished, clean and premium. Its target is professionals, consultants and managers with several calendar accounts who want AI suggestions they control. It is described as less suited to deep task management. — [Ellie Planner Morgen review (Nov 2026, competitor)](https://ellieplanner.com/comparisons/morgen-calendar-review)
- **Routine:** positions as a full workspace with tasks, calendar, notes, custom databases, CRM-ish integrations (Apollo, Attio, Pipedrive) and team workspaces. — [Routine Pricing](https://routine.co/pricing); [Routine 1.1 changelog](https://feedback.routine.co/changelog/task-integrations-multi-window-and-exporting)
- **Amie:** now "an ai meeting note taker with full calendar integration", for solo users and teams. — [Amie changelog](https://amie.so/changelog)
- **Amie reviews:** ClickUp calls it a beautiful calendar; Ellie titles its review "The Beautiful Calendar That Wants to Replace Everything". — [ClickUp Amie review](https://clickup.com/blog/amie-calendar-review/); [Ellie Amie review](https://ellieplanner.com/comparisons/amie-calendar-review)
- **Structured:** upbeat consumer brand claiming 15M+ downloads, 500K+ pro users and 30+ languages. — [Structured](https://structured.app)
- **Structured design and audience:** described as calm, clean and distraction-free, with a colour-coded timeline and accessibility options (VoiceOver, dyslexic font). Especially useful for ADHD time blindness; aimed at students, freelancers and Apple-ecosystem solo users; no collaboration. — [Saner.AI review (Sep 2026)](https://www.saner.ai/blogs/structured-review)
- **Notion Calendar:** a companion to Notion workspaces, integrating Notion database items. — [Notion Calendar](https://www.notion.com/product/calendar)
- **Fantastical:** premium Apple-first calendar, with Cardhop contacts bundled. — [Flexibits pricing](https://flexibits.com/pricing?product=fantastical)
- **nocal:** "The AI calendar app that makes you the most productive you've ever been". It explicitly lists developers among its target users, and has Markdown notes with code blocks and MCP for Cursor. — [nocal](https://nocal.app)

### Inferences
- **"Gentle, elegant"** overlaps with Sunsama (calm), Amie (joyful and beautiful) and Structured (calm, colourful). Design alone will not differentiate.
- **The developer/QE niche is unoccupied.** nocal is the only product found that names developers as an audience, and it lacks Jira, GitHub and ADO integrations.

### Gaps
- Sunsama's own brand copy was not fetched, so its "calm" positioning is cited from a secondary source.
- No primary source was found for Amie's original "joyful" tagline.

## Q8. Status: active, acquired, shut down?

### Takeaway
All eight are active as of Nov 2026, with 2026 changelog activity or current pricing pages. The notable shift is Amie's pivot from a "todo + calendar" app to AI meeting notes. No acquisitions or shutdowns in 2025–2026 were found among these eight.

### Cited Findings
- **Sunsama:** active, with weekly changelogs through at least 26 Oct 2026. — [Sunsama changelog](https://roadmap.sunsama.com/changelog)
- **Akiflow:** active. Summer Release 25 Jun 2026 (subtasks, MCP); pricing page current. — [usecarly Akiflow review](https://www.usecarly.com/blog/akiflow-review/); [Akiflow Pricing](https://akiflow.com/pricing)
- **Morgen:** active. Pricing page current; Kai assistant on waitlist; review checked pricing 26 Oct 2026. — [Morgen Pricing](https://www.morgen.so/pricing); [Ellie Morgen review](https://ellieplanner.com/comparisons/morgen-calendar-review)
- **Routine:** active. Routine 1.1 released 8 Jul 2026 with a new Personal plan. — [Routine 1.1 changelog](https://feedback.routine.co/changelog/task-integrations-multi-window-and-exporting)
- **Amie:** active but pivoted. Latest changelog seen is #132, 3 Sep 2026. Positioning is now AI meeting notes. A competitor says it no longer lists a free plan. — [Amie changelog](https://amie.so/changelog); [nocal: Amie alternatives](https://nocal.app/alternatives/amie)
- **Structured:** active, with reviews dated Aug–Sep 2026 and a live site. — [Structured](https://structured.app); [Saner.AI review](https://www.saner.ai/blogs/structured-review)
- **Notion Calendar:** active and free. — [Notion Calendar](https://www.notion.com/product/calendar)
- **Fantastical:** active, with the platform list now including Windows and "Googlebook". — [Flexibits pricing](https://flexibits.com/pricing?product=fantastical)
- **Newcomers since 2025:**
  - nocal: available on Mac, Windows, iOS and Android; launch date unverified. — [nocal](https://nocal.app)
  - Fokus: Jira-aware AI planner, closed beta in March 2026. — [chatgate.ai](https://chatgate.ai/post/fokus)
  - FocusFlow Planner: mobile launch 30 Jun 2026; consumer life planner. — [Product Hunt](https://www.producthunt.com/products/focusflow-planner/launches)
  - Planner AI Pro (released 17 Jun 2026), AllTime, Daylume, Palā: consumer iOS AI planners. — [mwm.ai](https://mwm.ai/apps/planner-ai-pro-day-planner/6777973174); [App Store: AllTime](https://apps.apple.com/us/app/alltime/id6759578102)

### Inferences
- The category is healthy and crowded. Most 2025–26 newcomers are consumer AI planners, not developer tools. Fokus (Jira-aware) and nocal (developer-friendly, MCP) are the closest to the new app's niche.

### Gaps
- Notion Calendar's origin (it was formerly "Cron", acquired by Notion) is from background knowledge and not re-verified in this research.
- Whether Fokus reached public beta, and its integrations depth, are unverified.
- Reclaim, Motion, Tiimo and Ellie were not profiled in depth because they were out of scope.
