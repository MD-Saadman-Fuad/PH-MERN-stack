console.log('File Connected')

const sections = document.getElementsByTagName('section');
for (const section of sections)
    {console.log(section)
        section.style.backgroundColor = 'lightblue';
        section.style.border = '3px solid green';
        section.style.borderRadius = '10px';
        section.style.padding = '10px';
        section.style.marginBottom = '10px';
        
    }