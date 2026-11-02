import type { FC } from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';

export interface ToastProps {
  message: string;
  type?: 'success' | 'info';
  onClose: () => void;
}

export const Toast: FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-slate-900/95 border border-cyan-500/30 text-white rounded-xl shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-300">
      {type === 'success' ? (
        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
      ) : (
        <Info className="w-5 h-5 text-cyan-400 shrink-0" />
      )}
      <span className="text-sm font-medium text-slate-200">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-slate-400 hover:text-white p-1 rounded-md transition-colors"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
