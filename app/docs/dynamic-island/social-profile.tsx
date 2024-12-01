import { Github, Twitter, Linkedin, Globe } from "lucide-react";

interface SocialProfileProps {
  name: string;
  title: string;
  imageUrl: string;
  links: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

export const SocialProfileCollapsed = ({
  name,
  imageUrl,
}: Pick<SocialProfileProps, "name" | "imageUrl">) => (
  <div className="flex items-center justify-between p-2 h-full">
    <div className="flex items-center gap-3">
      <img
        src={imageUrl}
        alt={name}
        className="w-8 h-8 rounded-full object-cover"
      />
      <span className="text-sm font-medium">{name}</span>
    </div>
  </div>
);

export const SocialProfileExpanded = ({
  name,
  title,
  imageUrl,
  links,
}: SocialProfileProps) => (
  <div className="p-4 h-full ">
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-16 m-0 h-16 rounded-full object-cover border-2 border-gray-700"
        />
        <div>
          <h3 className="font-medium text-white text-lg m-0">{name}</h3>
          <p className="text-sm text-gray-400">{title}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 text-white gap-3 mt-2">
        {links.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex text-white items-center gap-2 p-2 rounded-md hover:bg-white/10 transition-colors"
          >
            <Github size={18} />
            <span className="text-sm">GitHub</span>
          </a>
        )}
        {links.twitter && (
          <a
            href={links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex text-white items-center gap-2 p-2 rounded-md hover:bg-white/10 transition-colors"
          >
            <Twitter size={18} />
            <span className="text-sm">Twitter</span>
          </a>
        )}
        {links.linkedin && (
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex text-white items-center gap-2 p-2 rounded-md hover:bg-white/10 transition-colors"
          >
            <Linkedin size={18} />
            <span className="text-sm">LinkedIn</span>
          </a>
        )}
        {links.website && (
          <a
            href={links.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex text-white items-center gap-2 p-2 rounded-md hover:bg-white/10 transition-colors"
          >
            <Globe size={18} />
            <span className="text-sm">Website</span>
          </a>
        )}
      </div>
    </div>
  </div>
);
