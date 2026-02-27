import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function EngineerDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login", { replace: true });
  };

  const fullText = "Engineer Dashboard";
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 80);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-[#f5f7fb] dark:bg-gray-900 transition-colors duration-300">

        {/* ================= NAVBAR ================= */}
        <div className="flex justify-between items-center px-12 py-5 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition">

          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-lg">
              🏗
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                Engineer Dashboard
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Real-time Construction Monitoring
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-orange-100 text-orange-600 rounded-full hover:bg-orange-200 transition"
            >
              Logout
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 dark:text-white transition"
            >
              {darkMode ? "☀ Light" : "🌙 Dark"}
            </button>
          </div>

        </div>

        {/* ================= HERO SECTION ================= */}
        <div className="text-center py-20 px-6 max-w-6xl mx-auto">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white">
            Interactive{" "}
            <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <p className="mt-8 text-xl text-gray-600 dark:text-gray-400">
            Monitor construction stages, task execution, material usage,
            technical risks, and dependencies across EPC projects with
            structured performance tracking.
          </p>
        </div>

        {/* ================= DASHBOARD CONTENT ================= */}
        <div className="max-w-7xl mx-auto px-12 pb-24">

          {/* METRIC CARDS */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            <MetricCard title="Current Phase" value="Slab Casting" color="green" />
            <MetricCard title="Completion" value="62%" color="green" />
            <MetricCard title="Open Risks" value="3" color="red" />
            <MetricCard title="Pending QA Checks" value="2" color="yellow" />
          </div>

          {/* PHASE TRACKER */}
          <Section title="🏗 Phase Tracker">
            <div className="relative mt-10">
              <div className="absolute top-3 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
              <div className="absolute top-3 left-0 h-1 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full w-1/2"></div>

              <div className="relative flex justify-between">
                <Phase status="completed" name="Basement" />
                <Phase status="completed" name="Columns" />
                <Phase status="ongoing" name="Slabs" />
                <Phase status="pending" name="Roofing" />
                <Phase status="pending" name="Finishing" />
              </div>

            </div>
          </Section>

          {/* TASK STATUS */}
          <Section title="📋 Task Status">
            <SimpleTable
              headers={["Task", "Phase", "Status", "Deadline"]}
              rows={[
                ["Slab Reinforcement", "Slab", "Ongoing", "12 Mar"],
                ["Column Alignment", "Column", "Pending", "8 Mar"]
              ]}
            />
          </Section>

          {/* MATERIAL USAGE */}
          <Section title="🧱 Material Usage">
            <SimpleTable
              headers={["Material", "Planned", "Used", "Variance"]}
              rows={[
                ["Cement", "120T", "135T", "+15T"],
                ["Steel", "90T", "82T", "-8T"]
              ]}
            />
          </Section>

          {/* RISK ALERT */}
          <Section title="⚠ Technical Risk Alerts">
            <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
              <h3 className="font-semibold text-red-700 text-lg">Concrete Grade Mismatch</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Severity: High – Structural integrity risk
              </p>
            </div>
          </Section>

          {/* QA LOGS */}
          <Section title="📊 QA Inspection Logs">
            <div className="flex gap-16 text-lg">
              <p>Total: 24</p>
              <p className="text-green-600 font-semibold">Passed: 21</p>
              <p className="text-red-500 font-semibold">Failed: 3</p>
            </div>
          </Section>

          {/* DEPENDENCY MAP */}
          <Section title="🔄 Dependency Map">
            <SimpleTable
              headers={["Task", "Depends On", "Status"]}
              rows={[
                ["Slab Casting", "Column Completion", "Blocked"]
              ]}
            />
          </Section>

          {/* AI BUTTON */}
          <div className="text-center mt-16">
            <button
              onClick={() => navigate("/epc-chat")}
              className="px-12 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md hover:shadow-lg hover:scale-105 transition"
            >
              🤖 Ask EPC AI Assistant
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function MetricCard({ title, value, color = "gray" }) {

  const colorStyles = {
    green: "text-green-600",
    red: "text-red-600",
    yellow: "text-yellow-600",
    gray: "text-gray-800"
  };

  const textColor = colorStyles[color] || colorStyles.gray;

  return (
    <div className="group [perspective:1000px]">

      <div className="relative w-full h-40 transition-transform duration-300 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

        {/* FRONT */}
        <div className="absolute inset-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-6 flex flex-col justify-center [backface-visibility:hidden]">
          <p className="text-sm text-gray-500">{title}</p>
          <h2 className={`text-3xl font-bold mt-2 ${textColor}`}>{value}</h2>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-6 flex flex-col justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <p className="text-sm text-gray-500">{title}</p>
          <h2 className={`text-3xl font-bold mt-2 ${textColor}`}>{value}</h2>
        </div>

      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-12 shadow-sm mb-20 transition">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-10">
        {title}
      </h2>
      {children}
    </div>
  );
}

function SimpleTable({ headers, rows }) {

  const getStatusStyle = (value) => {
    if (value.toLowerCase() === "ongoing") return "text-green-600 font-semibold";
    if (value.toLowerCase() === "pending") return "text-yellow-600 font-semibold";
    if (value.toLowerCase() === "blocked") return "text-red-600 font-semibold";
    return "text-gray-700";
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
      <table className="w-full text-left bg-white dark:bg-gray-800">
        <thead className="bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm uppercase tracking-wider">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="px-6 py-4">{h}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-6 py-4 ${headers[j] === "Status"
                    ? getStatusStyle(cell)
                    : "text-gray-700 dark:text-gray-300"
                    }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Phase({ name, status }) {

  const dotColor =
    status === "completed"
      ? "bg-green-500"
      : status === "ongoing"
        ? "bg-yellow-500"
        : "bg-gray-300 dark:bg-gray-600";

  const textColor =
    status === "completed"
      ? "text-green-600 dark:text-green-400"
      : status === "ongoing"
        ? "text-yellow-600 dark:text-yellow-400"
        : "text-gray-500 dark:text-gray-400";

  return (
    <div className="flex flex-col items-center">
      <div className={`w-6 h-6 rounded-full ${dotColor}`}></div>
      <span className={`mt-4 text-sm font-medium ${textColor}`}>{name}</span>
    </div>
  );
}