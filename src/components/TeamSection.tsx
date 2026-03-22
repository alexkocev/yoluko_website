const team = [
  {
    name: "Alexandre Kocev",
    role: "Tech Lead & AI Architect",
    roleColor: "text-primary",
    bio: "I'm the builder. You bring a vision or a challenge, I turn it into a real, working solution. I handle the complex tech so you can focus on growing your business.",
    image: "/images/profile_alex_chill.jpg",
  },
  {
    name: "Yahya Lahlou",
    role: "Strategy & Ops Director",
    roleColor: "text-secondary",
    bio: "I find the hidden bottlenecks and revenue opportunities most businesses miss. Your strategic partner, focused on making sure every solution we build makes a real difference.",
    image: "/images/profile_yayha.jpeg",
  },
];

export const TeamSection = () => {
  return (
    <section className="py-24 px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl lg:text-5xl font-headline font-black mb-4">
            The Humans behind the{" "}
            <span className="text-primary">Bots</span>
          </h2>
          <p className="text-on-surface-variant">
            Expertise at the intersection of Engineering and Business Strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col md:flex-row gap-8 items-center md:items-start p-8 rounded-2xl bg-surface-container border border-outline-variant/10 group"
            >
              <div className="w-32 h-32 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 flex-shrink-0">
                <img
                  className="w-full h-full object-cover"
                  alt={`${member.name} - ${member.role}`}
                  src={member.image}
                />
              </div>
              <div>
                <h3 className="text-2xl font-headline font-bold mb-2">
                  {member.name}
                </h3>
                <p
                  className={`${member.roleColor} font-label font-bold uppercase text-xs tracking-widest mb-4`}
                >
                  {member.role}
                </p>
                <p className="text-on-surface-variant leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
