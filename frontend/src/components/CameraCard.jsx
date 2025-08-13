function CameraCard({ name, imageUrl }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121826]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-xs text-slate-300">
        <span className="font-medium">{name}</span>
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
      </div>
      <div className="aspect-video bg-black">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-slate-500">
            Sin señal
          </div>
        )}
      </div>
      <div className="flex items-center justify-end gap-3 px-3 py-2 text-slate-400">
        <button className="text-xs hover:text-white">II</button>
        <button className="text-xs hover:text-white">▢</button>
        <button className="text-xs hover:text-white">⤓</button>
      </div>
    </div>
  );
}

export default CameraCard;
