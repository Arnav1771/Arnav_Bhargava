import React, { useEffect, useRef } from 'react'
import './styles.css'

const CodeTheme = () => {
    const tstRef= useRef(false)
    useEffect(() => {
        let isMounted = true;
        let typeTimeout = null;
        let fadeIntervalId = null;

        const codeLines = [
            '🚀 class ArnavBhargava {',
            '  constructor() {',
            '    this.name = "Arnav Bhargava";',
            '    this.age = 22;',
            '    this.location = "India";',
            '    this.email = "arnavbhargava57@gmail.com";',
            '    this.passion = "AI/ML & Game Development";',
            '  }',
            '',
            '  🎓 education() {',
            '    return [',
            '      { "2025-2026": "Hiroshima University, Japan - Research Student (Informatics & Data Science)" },',
            '      { "2021-2025": "VIT Bhopal - B.Tech CSE (AI/ML Specialization) | CGPA: 7.91" }',
            '    ];',
            '  }',
            '',
            '  💼 workExperience() {',
            '    return [',
            '      { "2025": "Associate Software Engineer @ Aligned Automation" },',
            '      { "2023-2024": "Quality Engineer Intern @ Naviwise" }',
            '    ];',
            '  }',
            '',
            '  ⚡ skills() {',
            '    return {',
            '      "languages": ["Python", "JavaScript", "R", "SQL", "Java", "C++"],',
            '      "aiml": ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Stable Diffusion"],',
            '      "web": ["React", "Next.js", "Node.js", "HTML/CSS", "Tailwind CSS"],',
            '      "cloud": ["Google Cloud Platform", "AWS", "Docker", "Git/GitHub"]',
            '    };',
            '  }',
            '',
            '  🏆 achievements() {',
            '    return "12+ Certifications | 3+ Years Experience | International Research Student";',
            '  }',
            '}'
          ];
          
          const codeContainer = document.getElementById('code-container');
          const codeContainer2 = document.getElementById('code-container2');
          let lineIndex = 0;

          function fadeOut() {
            let opacity = 1;
            fadeIntervalId = setInterval(() => {
              if (!isMounted) { clearInterval(fadeIntervalId); return; }
              if (opacity > 0) {
                opacity -= 0.05;
                if (codeContainer) codeContainer.style.opacity = opacity;
                if (codeContainer2) codeContainer2.style.opacity = opacity;
              } else {
                clearInterval(fadeIntervalId);
                if (codeContainer) codeContainer.style.display = 'none';
                if (codeContainer2) codeContainer2.style.display = 'none';
              }
            }, 1000);
          }

          function typeLine(container) {
            if (!isMounted) return;
            const line = codeLines[lineIndex];
            const div = document.createElement('div');
            const formattedLine = line?.replace(/\s/g, '\u00a0');
            div.innerHTML = formattedLine;
            div.classList.add('typewriter', 'code-line');

            if (line.includes('return')) {
                div.classList.add('keyword');
            } else if (line.includes('workExperience()') || line.includes('education()') || line.includes('skills()')) {
                div.classList.add('function', 'opacity-50');
            } else if (line.includes('this.')) {
                if (line.includes('=')) {
                div.classList.add('property');
                } else {
                div.classList.add('keyword');
                }
            } else if (line.includes('"') && !line.includes('return [')) {
                div.classList.add('string');
            } else if (line.includes('{') || line.includes('}')) {
                div.classList.add('bracket');
            }

            container?.appendChild(div);
            lineIndex++;

            if (lineIndex < codeLines.length) {
                typeTimeout = setTimeout(() => typeLine(container), 1000);
            } else {
                fadeOut();
            }
          }

          if (!tstRef.current) {  
            tstRef.current = true;
            typeLine(codeContainer);
          }

          return () => {
            isMounted = false;
            tstRef.current = false;
            clearTimeout(typeTimeout);
            clearInterval(fadeIntervalId);
            if (codeContainer) codeContainer.innerHTML = '';
          };
    },[])
  return (
    <div>
        <div id="code-container" className='code-block'></div>
    </div>
  )
}

export default CodeTheme