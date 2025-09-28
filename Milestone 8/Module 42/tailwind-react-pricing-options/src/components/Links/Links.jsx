import React from 'react';
const links = [
  {
    "id": 1,
    "name": "OpenAI",
    "url": "https://www.openai.com"
  },
  {
    "id": 2,
    "name": "GitHub",
    "url": "https://github.com"
  },
  {
    "id": 3,
    "name": "MDN Web Docs",
    "url": "https://developer.mozilla.org"
  }
]

const Links = () => {
    return (
        <div className="flex space-x-4">
            {links.map(link => (
                <a key={link.id} href={link.url} className="text-blue-500 hover:underline">
                    {link.name}
                </a>
            ))}
            <a href="#" className="text-blue-500 hover:underline">Link 3</a>
        </div>
    );
};

export default Links;