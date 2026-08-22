---
title: "Autolith：带实时运行时的 Common Lisp 编程智能体（可自我修改的 agent）"
type: article
tags: [coding-agents, open-source, lisp, tool]
source_url: https://www.lambda-symbolics.com/autolith
ingested: 2026-08-21
sha256: c4fe6c2815c8f948672b54a8d1986305d8a7facfcd2f29a575721187d74efc46
summary: "Autolith 是跑在终端里的编程智能体：直接操作仓库，内置 SBCL Lisp 运行时可供其检视、测试与自我修改（函数/宏/类热替换并记录为私有镜像提交），支持可移植会话、记忆、议程与崩溃恢复；明确警告非安全沙箱。"
---

# Autolith：带实时运行时的 Common Lisp 编程智能体（可自我修改的 agent）

> 原文：https://www.lambda-symbolics.com/autolith（ingested 2026-08-21）

Autolith: a Common Lisp programming agent · Lambda Symbolics OÜ
Skip to content
Autolith: a programming agent with a live runtime
Autolith runs in a terminal and works directly in your repository.
It can read and edit files, search the workspace, run commands and
tests, keep project context, and use Common Lisp without leaving the
conversation.
Repository work. Filesystem, shell, and search tools with visible results.
Continuity. Portable conversations, memories, agendas, checkpoints, and recovery.
Live Lisp. An SBCL runtime it can inspect, test, and extend.
Read the source
See a session
Install Autolith
For developers who want an agent they can inspect, extend, and recover.
Autolith · Resident agent
click to copy, or, better yet, install via Nix
Install Autolith
Autolith targets Linux x86-64. The binary release carries its own
SBCL, Lisp dependencies, and native helpers; it checks for newer
tagged releases and asks before updating. Nix is the recommended
route when you want the complete build pinned from the start.
Yes, piping a URL into a shell is evil. Read the installer before
running it. Nix is the better installation path.
Autolith executes model-generated code with your user privileges.
Its process boundaries protect reliability, not against hostile
code. Use it as a development agent, not as a security sandbox.
Start Autolith · Binary, Nix, or source
After the binary installer
$ autolith --auth
$ autolith
Recommended · Nix
$ nix run github:luciusmagn/autolith -- --auth
$ nix run github:luciusmagn/autolith
Build from the repository
$ git clone https://github.com/luciusmagn/autolith
$ cd autolith
$ ./script/bootstrap
$ ./script/check
$ ./bin/autolith --auth
$ ./bin/autolith
Read the source and documentation
See a captured session
A session starts with a concrete request
This is a captured read-only session from autolith --immutable .
The prompt asks for one repository listing; the tool output is shortened
only by Autolith's normal terminal limit.
The transcript reveals itself in order: request, tool call, bounded
result, then the assistant's answer. It is the terminal's actual
formatting, not a simulated chat window.
Captured session · immutable mode
❯ you
Inspect this repository without changing files. Use one tool to list the
top-level files, then summarize what you found in one sentence.
◇ reasoning summary
│ Listing top-level files
▸ fs.list
/root/common-lisp/frob
READ ∙ running fs.list · 00:00
✓ fs.list cpu 0.001s · real 0.002s
│ /root/common-lisp/frob
│ d .git/
│ d .github/
│ d .qlot/
│ d bin/
│ d dist/
│ d docs/
│ d native/
│ d nix/
│ d recovery/
│ d script/
│ d src/
│ … +13 more lines
● autolith
The repository is a Common Lisp project with source, tests, recovery tooling,
documentation, build configuration, native assets, and GitHub/Nix/Quicklisp
support.
The agent and its tools run in one process
Autolith is a terminal programming agent, not a wrapper around another
agent process. Its Common Lisp image contains the provider
client, terminal interface, tool registry, conversation state,
persistent memories, workspace agenda, and the code that decides what
happens next.
It talks directly to the ChatGPT Codex subscription service. The Codex
CLI is neither launched nor bundled. Filesystem, shell, search,
memory, and Lisp operations remain explicit tools with visible results.
Fast search, optional immutable mode
Workspace search runs in-process through
fff , a fast Rust
search library. Autolith keeps the index warm instead of starting a
new search process for every query.
If you want inspection without active-image changes, start it with
--immutable . The mode retains read-only inspection and
recovery information while withholding evaluation, mutation,
persistence, checkpoint, and rollback tools.
Update the running agent without restarting it
Autolith can inspect and replace complete functions, methods,
classes, macros, conditions, and global settings in its running
image. An exploratory change takes effect immediately and is
recorded in an append-only mutation journal. It can be exercised,
discarded, or retained as a private image commit.
A useful change can then become a private image commit. The commit
contains a manifest and a complete executable Lisp replay script,
retained in a separate private Git history. It changes the active
agent without quietly patching the tracked source repository.
A representative mutation transaction
→ self.source APPLICATION-TOOL-CALL-ENTRY
← complete tracked DEFMETHOD
→ self.redefine
( defmethod application-tool-call-entry ...)
← compiled and installed in the active image
→ self.diff
← one reconstructible live mutation
→ self.commit "Improve tool-call presentation"
← private image commit commit-id
complete reconstruct.lisp retained in private Git
Different kinds of state stay separate
Source, conversations, useful facts, live mutations, exact heaps, and
disposable experiments have different lifetimes. Autolith keeps them
separate instead of pretending that one database or one saved core is
everything.
Persistent surfaces · Reconstruction evidence
Conversations
Append-only portable S-expressions with exact resume commands and crash-tail repair.
Memories
Workspace or global facts, preferences, and decisions with bounded prompt recall.
Agendas
Short workspace tasks and notes, available in full on every request.
Private image commits
Complete replay scripts for durable user-specific definitions and settings, retained in private Git.
Generations
A saved active core, exact tracked source commit, reconstruction script, manifest, and journal position.
Worker images
Immutable experimental SBCL cores with parentage and durable notes, never selected as the active agent.
Recovery
A separately built pristine image that can inspect a crash and select a known-working generation without loading the damaged core.
