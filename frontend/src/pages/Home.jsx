import Card from "../components/Card.jsx";
import CameraCard from "../components/CameraCard.jsx";

function Home() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card title="Hora" subtitle="2025-08-13">
          <div className="text-5xl font-bold">19:30</div>
        </Card>
        <Card title="Tiempo en marcha" subtitle="System / Proceso">
          <div className="text-2xl font-semibold">10d 3m</div>
        </Card>
        <Card title="Estado" subtitle="1.0.0-beta.60">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-500/20 text-rose-400">
              ↑
            </span>
            <span className="text-lg font-semibold">Actual</span>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <CameraCard name="Vision Camera 1" />
        <CameraCard name="Vision Camera 2" />
        <CameraCard name="Vision Camera 3" />
      </div>
    </div>
  );
}

export default Home;
