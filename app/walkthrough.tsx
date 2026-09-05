'use client';
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
const stages = [
  {
    id: 'observe',
    label: '01 Observe',
    title: 'Find the next frontier.',
    detail:
      'pbot reads screenshots with OCR, checks the visible state, and discovers incomplete Step-Up Battles.',
    event: 'Screen recognized',
    log: [
      'Capture the device screen',
      'Read visible battle progress',
      'Save discovered frontiers',
    ],
    badge: 'Ready to plan',
    icon: '◎',
  },
  {
    id: 'act',
    label: '02 Act',
    title: 'Play with what you own.',
    detail:
      'Verified owned decks come first. Guarded taps and swipes navigate into auto battles, with visible checks along the way.',
    event: 'Owned deck verified',
    log: [
      'Choose a verified owned counter',
      'Confirm the battle screen',
      'Run the guarded auto-battle loop',
    ],
    badge: 'Battle in progress',
    icon: '↗',
  },
  {
    id: 'remember',
    label: '03 Remember',
    title: 'A restart is a checkpoint.',
    detail:
      'Battle outcomes and evidence are recorded in SQLite. If an unfamiliar state appears, pbot stops and asks for attention.',
    event: 'Progress committed',
    log: [
      'Record the battle outcome',
      'Persist the recovery checkpoint',
      'Continue, or stop for attention',
    ],
    badge: 'Checkpoint saved',
    icon: '↳',
  },
];
export function Walkthrough() {
  return (
    <Tabs defaultValue="observe" className="walkthrough">
      <TabsList className="walk-tabs" aria-label="Automation stages">
        {stages.map((s) => (
          <TabsTrigger key={s.id} value={s.id}>
            {s.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {stages.map((s) => (
        <TabsContent value={s.id} key={s.id} className="walk-panel">
          <div className="walk-copy">
            <span className="walk-icon" aria-hidden="true">
              {s.icon}
            </span>
            <h3>{s.title}</h3>
            <p>{s.detail}</p>
            <a
              className="text-link"
              href="https://github.com/dion-labs/pbot/blob/main/docs/AUTONOMOUS_RUN.md"
            >
              Inside the autonomous loop ↗
            </a>
          </div>
          <div className="console">
            <div className="console-header">
              <span>
                <i /> pbot / local runner
              </span>
              <span>ILLUSTRATIVE WALKTHROUGH</span>
            </div>
            <div className="console-event">
              <span className="status-dot" />
              {s.event}
            </div>
            {s.log.map((line, i) => (
              <div className="log-line" key={line}>
                <span>0{i + 1}</span>
                <span>{line}</span>
                <b>✓</b>
              </div>
            ))}
            <div className="console-bottom">
              <span>SQLite · local storage</span>
              <strong>{s.badge}</strong>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
const command =
  'git clone https://github.com/dion-labs/pbot.git\ncd pbot\nuv sync --frozen\nnpm ci\ncp .env.example .env.local\nnpm run dev';
export function Setup() {
  const [copied, setCopied] = useState('Copy commands');
  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied('Copied');
    } catch {
      setCopied('Select and copy below');
    }
  }
  return (
    <div className="setup-grid">
      <div>
        <p className="section-intro">
          Built and verified on an Apple Silicon Mac with a USB-connected
          Samsung Android phone. Other setups may need adaptation.
        </p>
        <ul className="requirements">
          <li>
            <span>01</span> Node.js 22.13+ and Python 3.11+ with uv
          </li>
          <li>
            <span>02</span> Xcode Command Line Tools for Apple Vision OCR
          </li>
          <li>
            <span>03</span> Android Platform Tools and USB debugging
          </li>
        </ul>
        <a
          className="text-link"
          href="https://github.com/dion-labs/pbot/blob/main/docs/AGENT_PORTING.md"
        >
          Adapt pbot with a coding agent ↗
        </a>
      </div>
      <div>
        <div className="terminal">
          <div className="terminal-top">
            <span>TERMINAL / macOS</span>
            <button onClick={copy} type="button" aria-live="polite">
              {copied}
            </button>
          </div>
          <pre>
            <code>{command}</code>
          </pre>
        </div>
        <p className="setup-note">
          Then open the local dashboard, scan your account and recipe cards,
          review the safety status, and run pbot.{' '}
          <a href="https://github.com/dion-labs/pbot#first-run">
            Full first-run guide ↗
          </a>
        </p>
      </div>
    </div>
  );
}
