"use client";

import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { Modal, Portal, Text } from "@mantine/core";
import { useReducedMotion } from "@mantine/hooks";
import Typist from "react-typist-component";
import { SPINNER_VERBS } from "./spinnerVerbs";
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

const WindowControls = ({ onClose, onMinimize, onMaximize }: ControlsProps) => (
  <div className={classes.controls}>
    <button
      type="button"
      className={`${classes.dot} ${classes.close}`}
      aria-label="Close terminal"
      onClick={onClose}
    />
    <button
      type="button"
      className={`${classes.dot} ${classes.minimize}`}
      aria-label="Minimize terminal"
      onClick={onMinimize}
    />
    <button
      type="button"
      className={`${classes.dot} ${classes.maximize}`}
      aria-label="Maximize terminal"
      onClick={onMaximize}
    />
  </div>
);

type Step =
  | { kind: "user"; text: string; wait: number }
  | { kind: "out"; text: string; wait: number; tone?: "dim" | "red" }
  // A childless element shown as one unit (see the note on ClaudeHeader).
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

const buildScript = (usage: Usage): Step[] => {
  const nextVerb = makeVerbPicker();
  return [
    { kind: "user", text: "claude", wait: 900 },
    { kind: "block", node: <ClaudeHeader />, wait: 1500 },
    { kind: "user", text: "help me get out of full screen", wait: 900 },
    { kind: "think", word: nextVerb(), wait: 4000 },
    { kind: "out", text: "● On it! Looking for the exit...", wait: 1000 },
    { kind: "out", text: "  ⎿ Read(Terminal.tsx)", tone: "dim", wait: 900 },
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
    { kind: "out", text: "● Perfect. Rewriting in Rust...", wait: 1000 },
    {
      kind: "out",
      text: "  ⎿ Deleting old files (1 of 4,812)",
      tone: "dim",
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
      wait: 2500,
    },
    { kind: "user", text: "you deleted my whole website??", wait: 900 },
    { kind: "think", word: nextVerb(), wait: 4000 },
    {
      kind: "out",
      text: "● You're absolutely right! I did delete the whole website and try to rewrite it in Rust.",
      wait: 1500,
    },
    {
      kind: "out",
      text: "  That's on me, I'll do better next time.",
      wait: 1800,
    },
    {
      kind: "out",
      text: "● In the meantime, spinning up 5 parallel agents to find the exit.",
      wait: 1200,
    },
    {
      kind: "out",
      text: "  ⎿ Agent 1: looking for the exit",
      tone: "dim",
      wait: 400,
    },
    {
      kind: "out",
      text: "  ⎿ Agent 2: looking for the exit",
      tone: "dim",
      wait: 400,
    },
    {
      kind: "out",
      text: "  ⎿ Agent 3: looking for the exit",
      tone: "dim",
      wait: 400,
    },
    {
      kind: "out",
      text: "  ⎿ Agent 4: looking for the exit",
      tone: "dim",
      wait: 400,
    },
    {
      kind: "out",
      text: "  ⎿ Agent 5: looking for the exit",
      tone: "dim",
      wait: 1000,
    },
    { kind: "think", word: nextVerb(), wait: 5000 },
    { kind: "out", text: "● All 5 agents agree.", wait: 1200 },
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

// Takes no children on purpose: react-typist-component treats a childless
// element as one unit, so it appears and can be removed as a whole.
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

// Takes no children on purpose (see ClaudeHeader).
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

// Takes no children on purpose: react-typist-component treats a childless
// element as one unit, so a single Backspace removes the whole indicator.
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
  tone?: "dim" | "red";
}) => (
  <div className={`${classes.line} ${tone ? classes[tone] : ""}`}>
    <TerminalText>{children}</TerminalText>
  </div>
);

// While typing, react-typist-component passes `children` as an array (partial
// text plus the cursor), so it must not be interpolated into a template string.
const UserLine = ({ children }: { children: React.ReactNode }) => (
  <div className={classes.line}>
    <Prompt />
    <TerminalText>
      &nbsp;
      {children}
    </TerminalText>
  </div>
);

const MaximizedBody = () => {
  const [script] = useState(() => buildScript(makeUsage()));
  const bodyRef = useRef<HTMLDivElement>(null);

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
    <div className={classes.fullBody} ref={bodyRef}>
      <Typist typingDelay={60} cursor={<TerminalText>|</TerminalText>}>
        {script.flatMap((step, i) => {
          if (step.kind === "user") {
            return [
              <UserLine key={i}>{step.text}</UserLine>,
              <Typist.Delay key={`d${i}`} ms={step.wait} />,
            ];
          }
          if (step.kind === "block") {
            return [
              <Typist.Paste key={i}>{step.node}</Typist.Paste>,
              <Typist.Delay key={`d${i}`} ms={step.wait} />,
            ];
          }
          if (step.kind === "out") {
            // Claude's output appears all at once, like real tool output.
            return [
              <Typist.Paste key={i}>
                <OutLine tone={step.tone}>{step.text}</OutLine>
              </Typist.Paste>,
              <Typist.Delay key={`d${i}`} ms={step.wait} />,
            ];
          }
          return [
            <Typist.Paste key={i}>
              <Thinking word={step.word} />
            </Typist.Paste>,
            <Typist.Delay key={`d${i}`} ms={step.wait} />,
            <Typist.Backspace key={`b${i}`} count={1} />,
          ];
        })}
      </Typist>
    </div>
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
      <Modal
        opened={message !== null}
        onClose={() => setMessage(null)}
        title={message?.title}
        centered
        zIndex={500}
        size="sm"
      >
        {message?.body}
      </Modal>
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
                onMaximize={() => setMaximized(false)}
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
