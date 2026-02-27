import { Card } from "../ui/card";
import { Mail, Phone, Building2 } from "lucide-react";

export default function ProjectTeam() {
  const team = [
    {
      name: "Marcus Chen",
      role: "Project Manager",
      company: "BuildTech Construction",
      email: "m.chen@buildtech.com",
      phone: "+1 (555) 123-4567",
      image:
        "https://images.unsplash.com/photo-1765378025255-5c2ff04563f4",
    },
    {
      name: "Sarah Williams",
      role: "Lead Architect",
      company: "Skyline Architects",
      email: "s.williams@skylinearch.com",
      phone: "+1 (555) 234-5678",
      image:
        "https://images.unsplash.com/photo-1630981108113-3f78a75c3ad9",
    },
  ];

  return (
    <Card className="p-6 bg-slate-900 border-slate-800 rounded-2xl">
      <div className="mb-6">
        <h2 className="text-xl mb-1 text-white">Project Team</h2>
        <p className="text-sm text-slate-400">
          Key contacts for this development
        </p>
      </div>

      <div className="space-y-4">
        {team.map((member, index) => (
          <div
            key={index}
            className="p-4 bg-slate-800 rounded-xl border border-slate-700 hover:bg-slate-750 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-16 h-16 rounded-full object-cover border border-slate-700"
              />

              <div className="flex-1">
                <h3 className="text-white mb-0.5">{member.name}</h3>
                <p className="text-sm text-slate-400 mb-1">
                  {member.role}
                </p>

                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <Building2 className="w-3 h-3" />
                  <span>{member.company}</span>
                </div>

                <div className="flex flex-wrap gap-4 text-sm">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{member.email}</span>
                  </a>

                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{member.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}