
// Using regular img tag temporarily to fix image loading issues

interface Profile {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
}

interface AboutProps {
  t: {
    title: string;
    profiles: Profile[];
  };
}

export const About = ({t}: AboutProps) => {
  const LinkedInIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-blue-600 hover:text-blue-700 transition-colors"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );

  return (
    <section id="about" className="py-20 px-4 md:px-6 bg-yoluko-cream">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yoluko-navy mb-6">
            {t.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {t.profiles.map((profile, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover-scale p-8 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Profile Photo */}
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src={profile.image} 
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Profile Content */}
              <div className="text-center space-y-4">
                {/* Name with LinkedIn Icon */}
                <div className="flex items-center justify-center gap-3">
                  <h3 className="text-2xl sm:text-3xl font-bold text-yoluko-navy">
                    {profile.name}
                  </h3>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors group"
                    aria-label={`View ${profile.name}'s LinkedIn profile`}
                  >
                    <LinkedInIcon />
                  </a>
                </div>

                {/* Role */}
                <p className="text-xl font-bold text-yoluko-teal">
                  {profile.role}
                </p>

                {/* Bio */}
                <p className="text-yoluko-slate leading-relaxed text-lg">
                  {profile.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
