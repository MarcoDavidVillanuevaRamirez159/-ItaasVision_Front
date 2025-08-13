function Topbar() {
  const toggleFullScreen = () => {
    const doc = document;
    const el = doc.documentElement;
    if (!doc.fullscreenElement && el.requestFullscreen) {
      el.requestFullscreen();
    } else if (doc.exitFullscreen) {
      doc.exitFullscreen();
    }
  };

  return (
    <div className="flex h-16 items-center justify-between border-b border-white/5 bg-[#0b0f1a] px-4 md:px-6">
      <h1 className="text-lg font-semibold text-white md:text-xl">Dashboard</h1>
      <div className="flex items-center gap-3">
        <button
          onClick={toggleFullScreen}
          className="rounded-md border border-white/10 px-3 py-1.5 text-xs text-slate-300 hover:bg-white/5 hover:text-white"
          title="Pantalla completa"
        >
          Pantalla completa
        </button>
        <div className="hidden text-sm text-slate-300 md:block">
          Bienvenido de nuevo,{" "}
          <span className="font-medium text-white">test</span>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
