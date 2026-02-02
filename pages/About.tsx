import React, { memo } from 'react';
import { teamData, aboutContent } from '../data/content';
import { TeamMember } from '../types';

// Team member card component
const TeamMemberCard = memo<{ member: TeamMember }>(({ member }) => {
  const initials = member.name.split(' ').map(n => n[0]).join('');

  return (
    <article className="text-center w-full sm:w-80">
      <div className="relative mx-auto mb-6">
        {member.image ? (
          <img
            src={member.image}
            alt={`${member.name}, ${member.role}`}
            className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-primary shadow-sm"
            loading="lazy"
          />
        ) : (
          <div
            className="w-40 h-40 mx-auto bg-white rounded-full flex items-center justify-center text-gray-300 font-serif text-3xl border-4 border-primary shadow-sm"
            aria-label={`${member.name} initials: ${initials}`}
          >
            {initials}
          </div>
        )}
      </div>

      <h3 className="text-xl leading-6 font-bold text-charcoal font-serif tracking-tight mb-2">
        {member.name}
      </h3>
      <p className="text-primary text-sm font-bold uppercase tracking-widest font-sans mb-3">
        {member.role}
      </p>
      {member.description && (
        <p className="text-gray-500 text-sm font-sans leading-relaxed">
          {member.description}
        </p>
      )}
    </article>
  );
});

TeamMemberCard.displayName = 'TeamMemberCard';

export const About: React.FC = memo(() => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-charcoal tracking-tight">About Us</h1>
        </div>
      </div>

      {/* Narrative Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" aria-labelledby="mission-heading">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 id="mission-heading" className="text-base text-primary font-bold tracking-widest uppercase font-sans mb-3">Our Mission</h2>
            <p className="text-2xl font-serif font-bold text-charcoal leading-tight">
              {aboutContent.mission}
            </p>
          </div>
          <div className="prose prose-lg text-gray-600 font-sans">
            <p>{aboutContent.story}</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-offwhite border-t border-gray-200" aria-labelledby="leadership-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-10">
            <h2 id="leadership-heading" className="text-3xl font-serif font-bold text-charcoal tracking-tight">Leadership</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-12" role="list" aria-label="Team members">
            {teamData.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
});

About.displayName = 'About';
