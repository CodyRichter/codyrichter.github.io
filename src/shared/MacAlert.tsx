"use client";

import { Modal } from "@mantine/core";
import classes from "./MacAlert.module.css";

interface MacAlertProps {
  opened: boolean;
  onClose: () => void;
  title?: string;
  body?: string;
  zIndex?: number;
}

const WarningIcon = () => (
  <svg
    className={classes.icon}
    viewBox="0 0 64 64"
    aria-hidden
    focusable="false"
  >
    <defs>
      <linearGradient id="mac-alert-tri" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#ffd45a" />
        <stop offset="1" stopColor="#e0a21a" />
      </linearGradient>
    </defs>
    <path
      d="M28.2 7.5a4.5 4.5 0 0 1 7.6 0l24 41.5A4.5 4.5 0 0 1 55.9 56H8.1A4.5 4.5 0 0 1 4.2 49z"
      fill="url(#mac-alert-tri)"
      stroke="#fff"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <rect x="29.5" y="22" width="5" height="17" rx="2.5" fill="#fff" />
    <circle cx="32" cy="46" r="3" fill="#fff" />
  </svg>
);

export default function MacAlert({
  opened,
  onClose,
  title,
  body,
  zIndex = 500,
}: MacAlertProps) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      withCloseButton={false}
      // Locking scroll hides the scrollbar, which shifts the page sideways
      // and moves the terminal buttons out from under the cursor.
      lockScroll={false}
      zIndex={zIndex}
      size={260}
      padding={0}
      radius={26}
      transitionProps={{ transition: "pop", duration: 150 }}
      classNames={{
        overlay: classes.overlay,
        content: classes.content,
        body: classes.body,
      }}
    >
      <WarningIcon />
      <div className={classes.title}>{title}</div>
      <div className={classes.message}>{body}</div>
      <button
        type="button"
        className={classes.ok}
        onClick={onClose}
        data-autofocus
      >
        OK
      </button>
    </Modal>
  );
}
