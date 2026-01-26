import { TeamMember } from '../types';

export const teamData: TeamMember[] = [
  {
    name: "Jimmy Zhang",
    role: "Co-Founder",
    description: "Specializing in supply chain optimization and technical negotiation.",
    // To add a photo: Place 'jimmy.jpg' in public/images/ and uncomment the line below:
    // image: '/images/jimmy.jpg',
  },
  {
    name: "Larry Wu",
    role: "Co-Founder",
    description: "Expertise in manufacturing engineering and quality assurance protocols.",
    // To add a photo: Place 'larry.jpg' in public/images/ and uncomment the line below:
    // image: '/images/larry.jpg',
  }
];

export const aboutContent = {
  mission: "To eliminate the technical friction between North American innovation and Asian manufacturing execution.",
  story: "Red Bridge Solutions was born from a shared frustration: seeing brilliant engineering designs fail due to manufacturing misinterpretations. As Waterloo Engineering graduates, we realized that the gap wasn't just linguistic—it was technical. We built a firm dedicated to preserving design intent through rigorous engineering oversight."
};