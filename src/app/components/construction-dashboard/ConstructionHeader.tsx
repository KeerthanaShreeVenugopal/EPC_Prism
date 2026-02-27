import { Building2, MapPin, Calendar } from "lucide-react";
import { Card } from "../ui/card";
import { useNavigate } from "react-router-dom";

export default function ConstructionHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login", { replace: true });
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div className="space-y-6">
      <Card className="relative overflow-hidden border-0 rounded-3xl shadow-2xl bg-white dark:bg-slate-900">

        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1767122225720-1d11b6a7f79f?auto=format&fit=crop&w=1600&q=80"
            alt="Construction site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r 
            from-white/90 via-white/70 to-white/40
            dark:from-slate-900/95 dark:via-slate-900/85 dark:to-slate-900/70"
          />
        </div>

        {/* Content */}
        <div className="relative p-8 md:p-12">

          {/* TOP ROW */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">

            {/* Left */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-amber-500 rounded-2xl shadow-lg">
                  <Building2 className="w-8 h-8 text-white" />
                </div>

                <div className="px-4 py-1.5 bg-green-500/20 dark:bg-green-500/10 border border-green-500/30 rounded-full">
                  <span className="text-sm text-green-400 font-medium">
                    ● Under Construction
                  </span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3">
                Skyline Tower Complex
              </h1>

              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl">
                Premium residential & commercial mixed-use development featuring
                sustainable architecture and modern amenities.
              </p>
            </div>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl shadow-lg transition-all"
            >
              Logout
            </button>
          </div>

          {/* TITLE */}
          <h1 className="text-4xl text-red-500 font-bold">TEST HEADER</h1>

          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
            Premium residential & commercial mixed-use development featuring
            sustainable architecture and modern amenities.
          </p>

          <button
            onClick={() => document.documentElement.classList.toggle("dark")}
            className="px-4 py-2 bg-slate-200 dark:bg-slate-700 dark:text-white rounded-lg"
          >
            Toggle Theme
          </button>
        </div>
      </Card>

      {/* INFO ROW (OUTSIDE CARD) */}
      <div className="flex flex-wrap gap-8 text-slate-700 dark:text-slate-300">
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-amber-500" />
          <span>Downtown District, 42nd & Madison</span>
        </div>

        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-amber-500" />
          <span>Est. Completion: Q4 2026</span>
        </div>
      </div>
    </div>
  );
}