import { Link } from 'react-router-dom';

const footerLinks = [
  {
    title: 'Platform',
    links: [
      { label: 'Voting Guide', to: '/guide' },
      { label: 'Candidate Insights', to: '/insights' },
      { label: 'AI Advisor', to: '/advisor' },
      { label: 'Resources', to: '/resources' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Vote.org', href: 'https://www.vote.org/' },
      { label: 'USA.gov', href: 'https://www.usa.gov/' },
      { label: 'Ballotpedia', href: 'https://ballotpedia.org/' },
      { label: 'EAC', href: 'https://www.eac.gov/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Contact', href: 'mailto:contact@votewise.org' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300">
      <div className="container-page py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src="/VoteWise_Logo.svg" alt="VoteWise" className="h-8 w-auto brightness-0 invert" />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering voters with the information they need to make informed decisions. Democracy works best when everyone participates.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.to ? (
                      <Link
                        to={link.to}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} VoteWise. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Built for democracy. Made with care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
