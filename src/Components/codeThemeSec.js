import React, { useEffect, useRef } from 'react'
import './styles.css'

const CodeThemeSec = () => {
    const tstRef= useRef(false)
    useEffect(() => {
        const codeLines = [
            'class PersonalLife {',
            '  constructor() {',
            '    this.hobbies = ["Reading", "Video Games","Badminton"];',
            '    this.github = "https://github.com/Arnav1771";',
            '  }',
            '  Address() {',
            '    return [',
            '      { "City/State": "New Delhi" },',
            '      { "Country": "India." },',
            '    ];',
            '  }',
            '  Aboutme() {',
            '    return (',
            '      I am an Programmer/Devloper and Data Science enthusiast.',
            '      Currently Learning New Things with Sales Force and Mern.',
            '    );',
            '  }',
            '}',
          ];
          
          const codeContainer = document.getElementById('code-container2');
          let lineIndex = 0;

          function typeLine() {
            const line = codeLines[lineIndex];
            const div = document.createElement('div');
            const formattedLine = line?.replace(/\s/g, '&nbsp;');
            div.innerHTML = formattedLine;
            div.classList.add('typewriter', 'code-line'); // Add common classes

            if (line?.includes('return')) {
                div.classList.add('keyword');
            } else if (line?.includes('Address()') || line?.includes('Aboutme()')) {
                div.classList.add('function', 'opacity-50');
            } else if (line?.includes('this.')) {
                if (line?.includes('=')) {
                div.classList.add('property');
                } else {
                div.classList.add('keyword');
                }
            } else if (line?.includes('"') && !line?.includes('return [')) {
                div.classList.add('string');
            } else if (line?.includes('{') || line?.includes('}')) {
                div.classList.add('bracket');
            }

            codeContainer?.appendChild(div);

            lineIndex++;

            if (lineIndex < codeLines.length) {
                setTimeout(() => typeLine(codeContainer), 1000);
            }
            }

          if (!tstRef.current) {  
            tstRef.current = true;
            typeLine();
          }

          return () => {
            tstRef.current = false;
            if (codeContainer) codeContainer.innerHTML = '';
          };
    },[])
  return (
    <div>
        <div id="code-container2" className='code-block2'></div>
        </div>
  )
}

export default CodeThemeSec;

  