"use client";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

/*
  Modal
  - Controlled via props
  - Accessible overlay
*/
export default function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 bg-black/40 flex items-center justify-center"
    >
      <div className="bg-white rounded-lg p-6 min-w-[300px]">
        {children}
        <button
          onClick={onClose}
          className="mt-4 text-sm text-indigo-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}
