"use client";

import clsx from "clsx";

type DialogProps = {
  isVisible?: boolean;
  title: string;
  content: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
  disabled: boolean;
};

export function Dialog({
  isVisible = false,
  title,
  content,
  onConfirm,
  onCancel,
  disabled = false,
}: DialogProps) {
  if (!isVisible) return null;
  return (
    <div
      className={clsx(
        "fixed z-50 top-0 bottom-0 left-0 right-0 bg-white/50 backdrop-blur-xs",
        "flex items-center justify-center"
      )}
    >
      <div
        className={clsx(
          "bg-slate-600 p-6 rounded-lg max-w-2xl mx-6",
          "flex flex-col gap-6",
          "shadow-lg shadow-white/30",
          "text-center"
        )}
        role="dialog"
        aria-modal={true}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <h3 id="dialog-title" className="text-2xl font-extrabold">
          {title}
        </h3>
        <div id="dialog-description">{content}</div>
        <div className="flex items-center justify-around">
          <button
            className={clsx(
              "bg-slate-200 hover:bg-slate-300 transition text-slate-950",
              "flex items-center justify-center rounded-lg py-2 px-4 cursor-pointer",
              'disabled:bg-slate-500'
            )}
            onClick={onCancel}
            autoFocus
            disabled={disabled}
          >
            Cancelar
          </button>
          <button
            className={clsx(
              "bg-blue-500 hover:bg-blue-600 transition text-blue-50",
              "flex items-center justify-center rounded-lg py-2 px-4 cursor-pointer",
              'disabled:bg-slate-500'
            )}
            onClick={onConfirm}
            disabled={disabled}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
