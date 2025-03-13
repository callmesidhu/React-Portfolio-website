import React from "react";

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "C", src: "https://profilinator.rishav.dev/skills-assets/c-original.svg", link: "https://www.cprogramming.com/" },
      { name: "C++", src: "https://profilinator.rishav.dev/skills-assets/cplusplus-original.svg", link: "https://www.cplusplus.com/" },
      { name: "Java", src: "https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg", link: "https://www.java.com/" },
      { name: "JavaScript", src: "https://profilinator.rishav.dev/skills-assets/javascript-original.svg", link: "https://www.javascript.com/" },
      { name: "TypeScript", src: "https://profilinator.rishav.dev/skills-assets/typescript-original.svg", link: "https://www.typescriptlang.org/" },
      { name: "Dart", src: "https://profilinator.rishav.dev/skills-assets/dartlang-icon.svg", link: "https://dart.dev/" },
      { name: "Python", src: "https://profilinator.rishav.dev/skills-assets/python-original.svg", link: "https://www.python.org/" },
      { name: "PHP", src: "https://profilinator.rishav.dev/skills-assets/php-original.svg", link: "https://www.php.net/" },
    ],
  },
  {
    "category": "Frameworks",
    "items": [
      { "name": "React", "src": "https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg", "link": "https://reactjs.org/" },
      { "name": "Vue.js", "src": "https://profilinator.rishav.dev/skills-assets/vuejs-original-wordmark.svg", "link": "https://vuejs.org/" },
      { "name": "Tailwind CSS", "src": "https://profilinator.rishav.dev/skills-assets/tailwindcss.svg", "link": "https://www.tailwindcss.com/" },
      { "name": "Bootstrap", "src": "https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg", "link": "https://getbootstrap.com/docs/3.4/javascript/" },
      { "name": "HTML5", "src": "https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg", "link": "https://en.wikipedia.org/wiki/HTML5" },
      { "name": "CSS3", "src": "https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg", "link": "https://www.w3schools.com/css/" },
      { "name": "Node.js", "src": "https://firebasestorage.googleapis.com/v0/b/reactnative-mobile-chat-app.appspot.com/o/Github%20icons%2Fnodejs.png?alt=media&token=5f202ed7-5546-48ec-8578-339d4e78553f", "link": "https://nodejs.org/" },
      { "name": "NextJS", "src": "https://profilinator.rishav.dev/skills-assets/nextjs.png", "link": "https://nextjs.org/" },
      { "name": "MongoDB", "src": "https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg", "link": "https://www.mongodb.com/" },
      { "name": "MySQL", "src": "https://firebasestorage.googleapis.com/v0/b/reactnative-mobile-chat-app.appspot.com/o/Github%20icons%2FMysql.png?alt=media&token=9f68a2d2-d138-484e-b127-26351aedb973", "link": "https://www.mysql.com/" },
      { "name": "PostgreSQL", "src": "https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg", "link": "https://www.postgresql.org/" },
      { "name": "Express.js", "src": "https://firebasestorage.googleapis.com/v0/b/reactnative-mobile-chat-app.appspot.com/o/Github%20icons%2Fex.png?alt=media&token=a697fad5-0606-4e80-a759-219aa180a76c", "link": "https://expressjs.com/" },
      { "name": "Flutter", "src": "https://profilinator.rishav.dev/skills-assets/flutterio-icon.svg", "link": "https://flutter.dev/" },
      { "name": "Flask", "src": "https://firebasestorage.googleapis.com/v0/b/reactnative-mobile-chat-app.appspot.com/o/Github%20icons%2Fflask.png?alt=media&token=994d6ec2-71b4-43ab-8129-d9887577efdc", "link": "https://flask.palletsprojects.com/" },
      { "name": "Django", "src": "https://firebasestorage.googleapis.com/v0/b/reactnative-mobile-chat-app.appspot.com/o/Github%20icons%2Fdjango.png?alt=media&token=9e328608-86eb-49ce-ac1b-f23bd5ed4d26", "link": "https://www.djangoproject.com/" },
      { "name": "Laravel", "src": "https://firebasestorage.googleapis.com/v0/b/reactnative-mobile-chat-app.appspot.com/o/Github%20icons%2Flaravel.png?alt=media&token=cbd2a396-64dd-4cb2-a78d-5835663ef5d7", "link": "https://laravel.com/" }
    ]
  },
  {
    "category": "Technologies",
    "items": [
      { "name": "Firebase", "src": "https://profilinator.rishav.dev/skills-assets/firebase.png", "link": "https://firebase.google.com/" },
      { "name": "Docker", "src": "https://profilinator.rishav.dev/skills-assets/docker-original-wordmark.svg", "link": "https://www.docker.com/" },
      { "name": "Linux", "src": "https://profilinator.rishav.dev/skills-assets/linux-original.svg", "link": "https://www.linux.org/" },
      { "name": "Arduino", "src": "https://profilinator.rishav.dev/skills-assets/arduino.png", "link": "https://www.arduino.cc/" },
      { "name": "Figma", "src": "https://profilinator.rishav.dev/skills-assets/figma-icon.svg", "link": "https://www.figma.com/" },
      { "name": "Raspberry Pi", "src": "https://firebasestorage.googleapis.com/v0/b/reactnative-mobile-chat-app.appspot.com/o/Github%20icons%2Fresberry.png?alt=media&token=e2f65801-209f-4e7a-8287-e087ff628199", "link": "https://www.raspberrypi.org/" },
      { "name": "Power BI", "src": "https://firebasestorage.googleapis.com/v0/b/reactnative-mobile-chat-app.appspot.com/o/Github%20icons%2Fpowerbi.png?alt=media&token=935e59d6-3913-4f9a-b688-5cea1342a923", "link": "https://powerbi.microsoft.com/en-us/" },
      { "name": "Android", "src": "https://profilinator.rishav.dev/skills-assets/android-original-wordmark.svg", "link": "https://www.android.com/intl/en_in/" },
      
    ]
  },
];

const GitHubStats = () => {
  return (
    <div className="flex flex-col items-center space-y-4 mt-12">
      <h2 className="text-4xl font-bold text-center">Github Stats</h2>
      <a href="https://github.com/callmesidhu" target="_blank" rel="noopener noreferrer">
        <img src="https://nirzak-streak-stats.vercel.app/?user=callmesidhu&theme=radical&card_width=500" alt="GitHub Streak" className="w-full" />
      </a>
      <div className="flex flex-wrap justify-center gap-4">
        <img src="http://github-profile-summary-cards.vercel.app/api/cards/stats?username=callmesidhu&theme=radical&hide_border=true" alt="GitHub Stats" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=callmesidhu&theme=radical&hide_border=true&layout=compact" alt="Top Languages" />
      </div>
      <div className="lg:flex-row flex-col flex gap-4">
        <img src="http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=callmesidhu&theme=radical&hide_border=true" />
        <img src="http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=callmesidhu&theme=radical&hide_border=true" />
      </div>
      </div>
  );
};

const Skills = () => {
  return (
    <div id="skills" className="flex flex-col items-center space-y-8 my-12 md:mx-28 mx-auto">
      <h2 className="text-4xl font-bold text-center">Skills & Technologies</h2>
      {skills.map((skillCategory) => (
        <div key={skillCategory.category} className="w-full text-center">
          <h3 className="text-2xl font-semibold mb-4">{skillCategory.category}</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {skillCategory.items.map((skill) => (
              <a key={skill.name} href={skill.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                <img src={skill.src} alt={skill.name} className="w-20 h-20" />
                <span className="mt-2 text-sm">{skill.name}</span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Profile = () => {
  return (
    <div className="container mx-auto p-8">
      <Skills />
      <GitHubStats />
    </div>
  );
};

export default Profile;
