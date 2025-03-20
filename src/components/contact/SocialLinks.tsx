import { socialLinks } from "@/data/socialLinks";

const SocialLinks = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-4 rounded-lg transition-all duration-300 flex flex-col items-center gap-3 ${link.color} ${link.hoverColor}`}
        >
          <link.icon className="h-6 w-6" />
          <span className="text-sm font-medium">{link.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
