"use client";

import { IoIosArrowForward } from "react-icons/io";
import { Fragment, useEffect, useRef, useState } from "react";
import { Portal, Text } from "@mantine/core";
import MacAlert from "@/shared/MacAlert";
import { useReducedMotion } from "@mantine/hooks";
import Typist from "react-typist-component";
import { SPINNER_VERBS } from "./spinnerVerbs";
import { AGENT_TASKS } from "./agentTasks";
import classes from "./AutoTypeTerminal.module.css";

const TerminalText = ({ children }: { children: React.ReactNode }) => (
  <Text className={`${classes.text} mono`} span>
    {children}
  </Text>
);

interface ControlsProps {
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
}

const TRAFFIC_LIGHTS = [
  { key: "onClose", label: "Close terminal", color: "#ff5f57" },
  { key: "onMinimize", label: "Minimize terminal", color: "#febc2e" },
  { key: "onMaximize", label: "Maximize terminal", color: "#28c840" },
] as const;

// Each button paints its own dot as a centered background, so the visible dot
// and the clickable box are always the same element.
const WindowControls = (handlers: ControlsProps) => (
  <div className={classes.trafficLights} role="group" aria-label="Window">
    {TRAFFIC_LIGHTS.map(({ key, label, color }) => (
      <button
        key={key}
        type="button"
        className={classes.trafficLight}
        style={{ "--light": color } as React.CSSProperties}
        aria-label={label}
        onClick={handlers[key]}
      />
    ))}
  </div>
);

type Step =
  // Typed at the shell prompt, inline, before Claude Code is running.
  | { kind: "shell"; text: string; wait: number }
  // Typed into the input box at the bottom, then moved into the transcript.
  // `pause` holds the empty input on screen before typing starts.
  | { kind: "user"; text: string; wait: number; pause?: number }
  // `panic` starts or stops frantic "nonono" typing in the input box.
  | {
      kind: "out";
      text: string;
      wait: number;
      tone?: "dim" | "red";
      panic?: "start" | "stop";
    }
  | { kind: "block"; node: React.ReactElement; wait: number }
  // A Claude-style "thinking" word that shows briefly, then is replaced.
  | { kind: "think"; word: string; wait: number };

interface Usage {
  cost: number;
  input: number;
  output: number;
  cacheRead: number;
  cacheWrite: number;
}

const randomBetween = (min: number, max: number) =>
  min + Math.random() * (max - min);

// Made-up numbers, re-rolled every time the terminal is maximized.
const makeUsage = (): Usage => {
  const total = Math.round(randomBetween(600_000, 900_000));
  const input = Math.round(total * randomBetween(0.03, 0.06));
  const output = Math.round(total * randomBetween(0.1, 0.15));
  const cacheWrite = Math.round(total * randomBetween(0.1, 0.18));
  return {
    cost: Math.round(randomBetween(100, 199.99) * 100) / 100,
    input,
    output,
    cacheWrite,
    cacheRead: total - input - output - cacheWrite,
  };
};

// A random verb for each "thinking" pause, never repeated within one run.
const makeVerbPicker = () => {
  const pool = [...SPINNER_VERBS];
  return () => {
    const [verb] = pool.splice(Math.floor(Math.random() * pool.length), 1);
    return `${verb}…`;
  };
};

const AGENT_COUNT = 5;
const AGENTS_MAX_MS = 15_000;
const AGENTS_MIN_MS = 800;
const AGENTS_GAP_MS = 1000;

// Random finish times, at least AGENTS_GAP_MS apart, handed out in random
// order. Picking sorted times from a range shortened by the gaps, then adding
// one gap per position, spaces them out without ever passing AGENTS_MAX_MS.
const makeFinishTimes = () => {
  const room = AGENTS_MAX_MS - (AGENT_COUNT - 1) * AGENTS_GAP_MS;
  const times = Array.from({ length: AGENT_COUNT }, () =>
    randomBetween(AGENTS_MIN_MS, room),
  )
    .sort((a, b) => a - b)
    .map((ms, i) => Math.round(ms + i * AGENTS_GAP_MS));
  for (let i = times.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [times[i], times[j]] = [times[j], times[i]];
  }
  return times;
};

const buildScript = (usage: Usage): Step[] => {
  const nextVerb = makeVerbPicker();
  // Each agent gets its own random task and finishes at its own random time,
  // so they report in random order.
  const taskPool = [...AGENT_TASKS];
  const agents: Agent[] = makeFinishTimes().map((finishMs) => ({
    task: taskPool.splice(Math.floor(Math.random() * taskPool.length), 1)[0],
    finishMs,
  }));
  return [
    { kind: "shell", text: "claude", wait: 900 },
    { kind: "block", node: <ClaudeHeader />, wait: 1500 },
    {
      kind: "user",
      text: "help me get out of full screen. Make no mistakes.",
      wait: 900,
    },
    { kind: "think", word: nextVerb(), wait: 4000 },
    { kind: "out", text: "● On it! Looking for the exit...", wait: 1000 },
    {
      kind: "block",
      node: <ToolCall tool="Read" arg="Terminal.tsx" />,
      wait: 900,
    },
    {
      kind: "out",
      text: "  ⎿ Found it. It's a one-line change.",
      tone: "dim",
      wait: 1500,
    },
    {
      kind: "out",
      text: "error: expected node 26, found node 24",
      tone: "red",
      wait: 1500,
    },
    {
      kind: "out",
      text: "● Your local Node version is out of date. Searching...",
      wait: 1200,
    },
    { kind: "think", word: nextVerb(), wait: 4000 },
    { kind: "out", text: "  ⎿ Found Rust compiler", tone: "dim", wait: 1200 },
    {
      kind: "out",
      text: "● While I'm in here: Rust's zero-cost abstractions and fearless concurrency should make minimization ~40% faster going forward. I'll also add a few small improvements along the way.",
      wait: 5000,
    },
    {
      kind: "out",
      text: "● I notice the working directory contains a significant number of files that don't use the .rs extension (.tsx, .ts, .css, .json). These appear to be legacy artifacts from a previous implementation and aren't load-bearing for the Rust rewrite.",
      wait: 5500,
    },
    {
      kind: "out",
      text: "● To keep the codebase clean and idiomatic, I'll remove these extraneous files and begin the Rust rewrite. This is a safe, fully reversible operation.",
      wait: 4000,
    },
    { kind: "out", text: "● Rewriting in Rust...", wait: 1000 },
    {
      kind: "block",
      node: <ToolCall tool="Bash" arg="rm -rf ./*" />,
      wait: 600,
    },
    {
      kind: "out",
      text: "  ⎿ Allowed by auto mode classifier",
      tone: "dim",
      wait: 900,
    },
    {
      kind: "out",
      text: "  ⎿ Deleting old files (1 of 4,812)",
      tone: "dim",
      panic: "start",
      wait: 500,
    },
    {
      kind: "out",
      text: "  ⎿ Deleting old files (2 of 4,812)",
      tone: "dim",
      wait: 500,
    },
    {
      kind: "out",
      text: "  ⎿ Deleting old files (3 of 4,812)",
      tone: "dim",
      wait: 500,
    },
    {
      kind: "out",
      text: "  ⎿ Deleting old files (moving deletion to background)",
      tone: "dim",
      wait: 1800,
    },
    {
      kind: "out",
      text: "Segmentation fault (core dumped)",
      tone: "red",
      panic: "stop",
      wait: 2500,
    },
    {
      kind: "user",
      text: "you deleted my whole website?? I said make no mistakes!!",
      pause: 1500,
      wait: 900,
    },
    { kind: "think", word: nextVerb(), wait: 4000 },
    {
      kind: "out",
      text: "● You're absolutely right! I did delete the whole website and try to rewrite it in Rust.",
      wait: 1500,
    },
    {
      kind: "out",
      text: "● That's on me, I'll do better next time.",
      wait: 1800,
    },
    {
      kind: "out",
      text: "● In the meantime, spinning up 5 parallel agents to find the exit.",
      wait: 1200,
    },
    {
      kind: "block",
      node: <AgentsRun agents={agents} />,
      wait: AGENTS_MAX_MS + 600,
    },
    {
      kind: "out",
      text: "● All agents have finished. Now I have the full picture.",
      wait: 1000,
    },
    {
      kind: "out",
      text: "● And honestly? That distinction matters. This isn't just a terminal window — it's your time, your focus, your journey. After careful deliberation, the subagents have reached a consensus: the yellow button is the key to minimization.",
      wait: 1200,
    },
    {
      kind: "out",
      text: "  To exit full screen, click the yellow minimize button at the top left of this terminal (or press Esc).",
      wait: 2500,
    },
    { kind: "user", text: "/cost", wait: 900 },
    { kind: "block", node: <UsageReport usage={usage} />, wait: 0 },
  ];
};

const Prompt = () => <IoIosArrowForward className={classes.prompt} />;

const REPO_URL = "https://github.com/CodyRichter/codyrichter.github.io";

// Pixel-art mascot drawn on an 11x7 grid.
const MASCOT_PIXELS: [number, number, number, number][] = [
  [2, 0, 7, 3],
  [0, 2, 11, 1],
  [2, 3, 7, 1],
  [2, 4, 1, 2],
  [4, 4, 1, 2],
  [6, 4, 1, 2],
  [8, 4, 1, 2],
];

const ClaudeHeader = () => (
  <div className={`${classes.line} ${classes.claudeHeader}`}>
    <svg
      className={classes.mascot}
      viewBox="0 0 11 6"
      shapeRendering="crispEdges"
      aria-hidden
    >
      {MASCOT_PIXELS.map(([x, y, w, h]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={w} height={h} />
      ))}
      <rect x={3} y={1} width={1} height={2} className={classes.eye} />
      <rect x={7} y={1} width={1} height={2} className={classes.eye} />
    </svg>
    <div className={`${classes.headerText} mono`}>
      <div>
        <strong className={classes.headerName}>Claude Code</strong>{" "}
        <span>v42.0.1337</span>
      </div>
      <div>Opus 400 Turbo · Claude Pro Max</div>
      <div>
        <a
          className={classes.hiddenLink}
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          onClick={(e) => {
            // Easter egg: only a command/ctrl-click follows the link.
            if (!e.metaKey && !e.ctrlKey) e.preventDefault();
          }}
        >
          ~/Projects/codys-cool-website
        </a>
      </div>
    </div>
  </div>
);

const formatNumber = (n: number) => n.toLocaleString("en-US");

const UsageReport = ({ usage }: { usage: Usage }) => {
  const rows = [
    ["input", usage.input],
    ["output", usage.output],
    ["cache read", usage.cacheRead],
    ["cache write", usage.cacheWrite],
  ] as const;
  const max = Math.max(...rows.map(([, n]) => n));

  return (
    <div className={`${classes.line} ${classes.report} mono`}>
      <div className={classes.reportTitle}>Session</div>
      <div>Total cost: ${usage.cost.toFixed(2)}</div>
      <div>Total code changes: 1 line added, 30,417 lines removed</div>
      <div className={classes.reportTitle}>Plan usage</div>
      <div className={classes.bars} role="img" aria-label="Plan usage: 100%">
        <div className={classes.barRow}>
          <span className={classes.barLabel}>weekly limit</span>
          <span className={classes.barTrack}>
            <span
              className={`${classes.bar} ${classes.barMaxed}`}
              style={{ width: "100%" }}
            />
          </span>
          <span className={`${classes.barValue} ${classes.maxed}`}>
            100% used
          </span>
        </div>
      </div>
      <div className={classes.reportTitle}>Usage (tokens)</div>
      <div className={classes.bars} role="img" aria-label="Token usage">
        {rows.map(([label, n]) => (
          <div key={label} className={classes.barRow}>
            <span className={classes.barLabel}>{label}</span>
            <span className={classes.barTrack}>
              <span
                className={classes.bar}
                style={{ width: `${(n / max) * 100}%` }}
              />
            </span>
            <span className={classes.barValue}>{formatNumber(n)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

interface Agent {
  task: string;
  finishMs: number;
}

const AgentsRun = ({ agents }: { agents: Agent[] }) => {
  const [done, setDone] = useState(() => agents.map(() => false));

  useEffect(() => {
    const timers = agents.map(({ finishMs }, i) =>
      setTimeout(
        () => setDone((prev) => prev.map((d, j) => d || j === i)),
        finishMs,
      ),
    );
    return () => timers.forEach(clearTimeout);
  }, [agents]);

  return (
    <div>
      {agents.map(({ task }, i) => (
        <OutLine key={i} tone="dim">
          {`  ⎿ Agent ${i + 1}: ${done[i] ? "Done." : task}`}
        </OutLine>
      ))}
    </div>
  );
};

const Thinking = ({ word }: { word: string }) => (
  <div className={`${classes.line} ${classes.thinking}`}>
    <span className={classes.spinner}>✻</span>
    <TerminalText>{` ${word}`}</TerminalText>
  </div>
);

const OutLine = ({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone?: "dim" | "red" | "limit";
}) => (
  <div className={`${classes.line} ${tone ? classes[tone] : ""}`}>
    <TerminalText>{children}</TerminalText>
  </div>
);

// A tool call, colored like a terminal: purple tool name, cyan argument.
const ToolCall = ({ tool, arg }: { tool: string; arg: string }) => (
  <div className={classes.line}>
    <TerminalText>
      {"  ⎿ "}
      <span className={classes.toolName}>{tool}(</span>
      <span className={classes.toolArg}>{arg}</span>
      <span className={classes.toolName}>)</span>
    </TerminalText>
  </div>
);

const Cursor = () => <span aria-hidden>|</span>;

const UserLine = ({ children }: { children: React.ReactNode }) => (
  <div className={classes.line}>
    <Prompt />
    <TerminalText>
      &nbsp;
      {children}
    </TerminalText>
  </div>
);

const TYPING_MS = 60;
// How long a typed message sits in the input box before it is "sent".
const SUBMIT_MS = 400;
// Eight "no"s at most.
const PANIC_MAX_CHARS = 16;

// The reply to anything typed once the script is over.
const UsageLimitNotice = () => (
  <>
    <OutLine tone="limit">
      {"  ⎿ Usage limit reached ∙ resets in 718 hours"}
    </OutLine>
    <OutLine tone="limit">
      {
        "    We appreciate your enthusiasm! To keep Claude available for everyone, your access is paused until your limit resets. Need to keep building? Upgrade to Claude Pro Max Ultra++ for just $2,500/month to reset your limits instantly."
      }
    </OutLine>
  </>
);

const MaximizedBody = () => {
  const [script] = useState(() => buildScript(makeUsage()));
  const [entries, setEntries] = useState<React.ReactNode[]>([]);
  const [shellText, setShellText] = useState<string | null>("");
  const [inputOn, setInputOn] = useState(false);
  const [inputText, setInputText] = useState("");
  const [thinking, setThinking] = useState<string | null>(null);
  // Once the script ends, the input box takes real typing.
  const [interactive, setInteractive] = useState(false);
  const [draft, setDraft] = useState("");
  const sentCount = useRef(0);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Plays the script. Every state update happens after an await, so React's
  // dev-mode double effect cancels the first run before it changes anything.
  useEffect(() => {
    let cancelled = false;
    const timers = new Set<number>();
    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        const t = window.setTimeout(() => {
          timers.delete(t);
          if (!cancelled) resolve();
        }, ms);
        timers.add(t);
      });
    const type = async (text: string, show: (typed: string) => void) => {
      const chars = Array.from(text);
      for (let i = 1; i <= chars.length; i++) {
        await sleep(TYPING_MS);
        show(chars.slice(0, i).join(""));
      }
    };
    const append = (node: React.ReactNode) =>
      setEntries((prev) => [...prev, node]);

    // The visitor mashing "nonono" while files are deleted. It runs alongside
    // the script until stopped, then quickly erases itself.
    let panic: { stop: boolean; done: Promise<void> } | null = null;
    const startPanic = () => {
      const state = { stop: false, done: Promise.resolve() };
      state.done = (async () => {
        let typed = "";
        while (!state.stop && typed.length < PANIC_MAX_CHARS) {
          await sleep(randomBetween(150, 260));
          if (state.stop) break;
          typed += typed.length % 2 ? "o" : "n";
          setInputText(typed);
        }
        // Wait to be stopped, then freeze in shock before erasing.
        while (!state.stop) await sleep(50);
        await sleep(2000);
        while (typed) {
          await sleep(randomBetween(45, 80));
          typed = typed.slice(0, -1);
          setInputText(typed);
        }
      })();
      return state;
    };

    (async () => {
      for (const [i, step] of script.entries()) {
        if (step.kind === "shell") {
          await type(step.text, setShellText);
          await sleep(step.wait);
          setShellText(null);
          append(<UserLine key={i}>{step.text}</UserLine>);
          continue;
        }
        // Claude Code is running from here on, so its input box is too.
        setInputOn(true);
        if (step.kind === "user") {
          if (panic) {
            await panic.done;
            panic = null;
          }
          await sleep(step.pause ?? 0);
          await type(step.text, setInputText);
          await sleep(SUBMIT_MS);
          setInputText("");
          append(<UserLine key={i}>{step.text}</UserLine>);
        } else if (step.kind === "think") {
          setThinking(step.word);
          await sleep(step.wait);
          setThinking(null);
          continue;
        } else if (step.kind === "out") {
          // Claude's output appears all at once, like real tool output.
          append(
            <OutLine key={i} tone={step.tone}>
              {step.text}
            </OutLine>,
          );
          if (step.panic === "start") panic = startPanic();
          if (step.panic === "stop" && panic) panic.stop = true;
        } else {
          append(<Fragment key={i}>{step.node}</Fragment>);
        }
        await sleep(step.wait);
      }
      setInteractive(true);
    })();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [script]);

  // Hand the cursor to the visitor, but don't pop up a keyboard on touch screens.
  useEffect(() => {
    if (interactive && window.matchMedia("(pointer: fine)").matches) {
      inputRef.current?.focus({ preventScroll: true });
    }
  }, [interactive]);

  const send = () => {
    const text = draft.trim();
    if (!text) return;
    const n = sentCount.current++;
    setEntries((prev) => [
      ...prev,
      <UserLine key={`sent${n}`}>{text}</UserLine>,
      <UsageLimitNotice key={`limit${n}`} />,
    ]);
    setDraft("");
  };

  // Follow new output as it arrives, unless the visitor scrolls up to reread.
  useEffect(() => {
    const body = bodyRef.current;
    if (!body) return;
    let following = true;
    const onScroll = () => {
      following = body.scrollHeight - body.scrollTop - body.clientHeight < 48;
    };
    const observer = new MutationObserver(() => {
      if (following) body.scrollTop = body.scrollHeight;
    });
    observer.observe(body, {
      childList: true,
      subtree: true,
      characterData: true,
    });
    body.addEventListener("scroll", onScroll);
    return () => {
      observer.disconnect();
      body.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div className={classes.fullBody} ref={bodyRef}>
        {entries}
        {shellText !== null && (
          <UserLine>
            {shellText}
            <Cursor />
          </UserLine>
        )}
        {thinking && <Thinking word={thinking} />}
      </div>
      {inputOn && (
        <div className={`${classes.inputArea} mono`}>
          <div className={classes.inputBox}>
            <Prompt />
            {interactive ? (
              <input
                ref={inputRef}
                className={`${classes.inputField} mono`}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.nativeEvent.isComposing) send();
                }}
                aria-label="Message Claude"
                autoComplete="off"
                spellCheck={false}
                enterKeyHint="send"
              />
            ) : (
              <TerminalText>
                &nbsp;
                {inputText}
                <Cursor />
              </TerminalText>
            )}
          </div>
          <div className={classes.modeLine}>⏵⏵ auto mode on</div>
        </div>
      )}
    </>
  );
};

export default function AutoTypeTerminal() {
  const reduceMotion = useReducedMotion();
  const [maximized, setMaximized] = useState(false);
  const [message, setMessage] = useState<{
    title: string;
    body: string;
  } | null>(null);

  const onClose = () =>
    setMessage({
      title: "Nice try.",
      body: "You can't close Cody on his own website.",
    });
  const onMinimizeNormal = () =>
    setMessage({
      title: "No can do.",
      body: "If you want to go smaller than this, use your own terminal...",
    });
  const onMaximizeFull = () =>
    setMessage({
      title: "“Terminal” can’t be made any larger.",
      body: "There isn’t enough display space available to enlarge this window. To continue, purchase a larger display and try again. Might we recommend the Studio Display XDR?",
    });

  useEffect(() => {
    if (!maximized) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMaximized(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [maximized]);

  return (
    <>
      <MacAlert
        opened={message !== null}
        onClose={() => setMessage(null)}
        title={message?.title}
        body={message?.body}
        zIndex={500}
      />
      {maximized && (
        <Portal>
          <div
            className={classes.fullscreen}
            role="dialog"
            aria-label="Maximized terminal"
          >
            <div className={classes.header}>
              <WindowControls
                onClose={onClose}
                onMinimize={() => setMaximized(false)}
                onMaximize={onMaximizeFull}
              />
              <span className={`${classes.title} mono`}>
                ~/Projects/codys-cool-website
              </span>
            </div>
            <MaximizedBody />
          </div>
        </Portal>
      )}
      {renderTerminal()}
    </>
  );

  function renderTerminal() {
    return (
      <div className={classes.terminal}>
        <div className={classes.header}>
          <WindowControls
            onClose={onClose}
            onMinimize={onMinimizeNormal}
            onMaximize={() => setMaximized(true)}
          />
          <span className={`${classes.title} mono`} aria-hidden>
            ~/Projects/codys-cool-website
          </span>
        </div>
        <div className={classes.body}>
          {reduceMotion ? (
            // No typing animation for people who ask for reduced motion.
            <>
              <IoIosArrowForward className={classes.prompt} />
              <TerminalText>&nbsp;Codes</TerminalText>
            </>
          ) : (
            <Typist typingDelay={140} cursor={<TerminalText>|</TerminalText>}>
              <IoIosArrowForward className={classes.prompt} />
              <TerminalText>&#8203;</TerminalText>
              <TerminalText>Codes</TerminalText>
              <Typist.Delay ms={3000} />
              <Typist.Backspace count={4} />
              <TerminalText>reates</TerminalText>
              <Typist.Delay ms={3000} />
              <Typist.Backspace count={7} />
              <TerminalText>Innovates</TerminalText>
              <Typist.Delay ms={3000} />
              <Typist.Backspace count={7} />
              <TerminalText>vents</TerminalText>
              <Typist.Delay ms={3000} />
              <Typist.Backspace count={6} />
              <TerminalText>mproves</TerminalText>
              <Typist.Delay ms={3000} />
              <Typist.Backspace count={8} />
              <TerminalText>Designs</TerminalText>
              <Typist.Delay ms={3000} />
              <Typist.Backspace count={5} />
              <TerminalText>velops</TerminalText>
              <Typist.Delay ms={3000} />
              <Typist.Backspace count={7} />
              <TerminalText>iscovers Solutions</TerminalText>
              <Typist.Delay ms={5000} />
            </Typist>
          )}
        </div>
      </div>
    );
  }
}
