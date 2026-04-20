import React from 'react';
import { Volume2, VolumeX, Mic, MicOff } from 'lucide-react';

export type AvatarState = 'off' | 'connecting' | 'connected';

interface FloatingTeleControlsProps {
  avatarState: AvatarState;
  isSoundOn: boolean;
  isMicMuted: boolean;
  onConnect: () => void;
  onDisconnect: () => void;
  onSoundToggle: () => void;
  onMicToggle: () => void;
}

export const FloatingTeleControls: React.FC<FloatingTeleControlsProps> = ({
  avatarState,
  isSoundOn,
  isMicMuted,
  onConnect,
  onDisconnect,
  onSoundToggle,
  onMicToggle,
}) => {
  const isConnected = avatarState === 'connected';
  const isConnecting = avatarState === 'connecting';

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3">
      {/* Sound Toggle (Only visible when connected) */}
      {isConnected && (
        <button
          onClick={onSoundToggle}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-onyx border border-mist/20 backdrop-blur-md text-mist hover:bg-mist/10 transition-all hover:scale-105"
          aria-label={isSoundOn ? "Mute Tele" : "Unmute Tele"}
        >
          {isSoundOn ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
        </button>
      )}

      {/* Main Connect / Disconnect Button */}
      {!isConnected ? (
        <button
          onClick={onConnect}
          disabled={isConnecting}
          className={`px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C5A880] to-[#b3956d] text-white font-bold tracking-wide shadow-[0_0_20px_rgba(197,168,128,0.4)] hover:shadow-[0_0_25px_rgba(197,168,128,0.6)] hover:scale-105 transition-all outline-none disabled:opacity-70 disabled:hover:scale-100 flex items-center whitespace-nowrap ${isConnecting ? 'animate-pulse' : ''}`}
        >
          {isConnecting ? "Connecting..." : "Talk to Ruben"}
        </button>
      ) : (
        <button
          onClick={onDisconnect}
          className="px-8 py-3.5 rounded-full bg-gradient-to-r from-red-600 to-red-800 text-white font-bold tracking-wide shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_25px_rgba(220,38,38,0.6)] hover:scale-105 outline-none transition-all flex items-center whitespace-nowrap"
        >
          Disconnect
        </button>
      )}

      {/* Mic Toggle (Only visible when connected) */}
      {isConnected && (
        <button
          onClick={onMicToggle}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-onyx border border-mist/20 backdrop-blur-md text-mist hover:bg-mist/10 transition-all hover:scale-105"
          aria-label={isMicMuted ? "Unmute Mic" : "Mute Mic"}
        >
          {isMicMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
        </button>
      )}
    </div>
  );
};

export default FloatingTeleControls;
