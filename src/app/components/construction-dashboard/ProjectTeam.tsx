import { Card } from "../ui/card";
import { Mail, Phone, Building2 } from "lucide-react";
//import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router-dom";

export default function ProjectTeam() {
  const team = [
    {
      name: "Marcus Chen",
      role: "Project Manager",
      company: "BuildTech Construction",
      email: "m.chen@buildtech.com",
      phone: "+1 (555) 123-4567",
      image: "https://images.unsplash.com/photo-1765378025255-5c2ff04563f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBibHVlcHJpbnQlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcxOTk3NzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Sarah Williams",
      role: "Lead Architect",
      company: "Skyline Architects",
      email: "s.williams@skylinearch.com",
      phone: "+1 (555) 234-5678",
      image: "https://images.unsplash.com/photo-1630981108113-3f78a75c3ad9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwcmlzZSUyMGJ1aWxkaW5nJTIwY29uc3RydWN0aW9uJTIwY3JhbmV8ZW58MXx8fHwxNzcxOTk3NzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <Card className="p-6 border-slate-200 rounded-2xl">
      <div className="mb-6">
        <h2 className="text-xl mb-1 text-slate-900">Project Team</h2>
        <p className="text-sm text-slate-500">Key contacts for this development</p>
      </div>
      <div className="space-y-4">
        {team.map((member, index) => (
          <div
            key={index}
            className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
          >
            <div className="flex items-start gap-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="text-slate-900 mb-0.5">{member.name}</h3>
                <p className="text-sm text-slate-600 mb-1">{member.role}</p>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <Building2 className="w-3 h-3" />
                  <span>{member.company}</span>
                </div>
                <div className="flex flex-wrap gap-3 text-sm">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{member.email}</span>
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center gap-1.5 text-slate-600 hover:text-slate-700"
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
