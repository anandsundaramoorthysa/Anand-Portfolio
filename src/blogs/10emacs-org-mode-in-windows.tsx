const blogContent = [
    { type: 'paragraph', value: '<strong>Note:</strong> I am not an expert in Emacs and Org Mode. But I have always loved exploring tech, coding, and finance. This blog is about my journey of exploring Emacs and Org Mode for Static Site Generation using Windows.' },
    { type: 'paragraph', value: 'When I first know about “Static Site Generation” as a developer, I was amazed. Normally, we develop websites using HTML, and even when using other frameworks, HTML serves as the foundation. But in Static Site Generation, markup languages like Markdown, Org Mode, and others are used. These are then converted into HTML through scripting languages or tools like Emacs, Hugo, and more. This concept was totally new to me!' },
    { type: 'paragraph', value: 'To be honest, I was astonished when I first heard about it from my brother, Thanga Ayyanar. He exclusively uses Org Mode to maintain his website and blogs. Inspired by his approach, I wanted to learn, use, and explore this tool for myself, and I like to work on Thanga Ayyanar’s website(golayan.in). I also took the opportunity to work on the UI. However, there was one condition from Thanga Ayyanar. They strictly required that I only use HTML and CSS. It was a slight headache, but a challenge I embraced with love.' },
    { type: 'paragraph', value: 'I aim to host this project soon, and once I do, I will attach the link in this blog below. The challenge, though, is that while Emacs works wonderfully in Linux, I primarily use Windows due to storage constraints. I am unable to use both Windows & Linux like previously on my laptop. Despite this, my curiosity about Emacs and Org Mode drove me to explore them further.' },
    { type: 'paragraph', value: 'I initially referred to ChatGPT, Perplexity, and Gemini AI for guidance, but their suggestions weren’t helpful enough. Eventually, I discovered my way forward:' },
    { type: 'image', src: 'https://mobilemancerblog.blob.core.windows.net/blog/2020/08/vs-code-logo-transp.png', alt: 'Org Mode Extension in VS Code'},
    { type: 'paragraph', value: 'Since I am comfortable using VS Code, I downloaded the Org Mode extension for it.' },
    { type: 'paragraph', value: 'I then downloaded and installed the latest version of Emacs from:' },
    { type: 'paragraph', value: '<a href="http://ftp.gnu.org/gnu/emacs/windows/" target="_blank" rel="noopener noreferrer">Emacs for Windows</a>' },
    { type: 'paragraph', value: 'To build the site, to convert from org to HTML. I ran the following command:' },
    { type: 'code', value: 'emacs --script build-site.el' },
    { type: 'paragraph', value: 'Finally, I used Python to serve the site locally:' },
    { type: 'code', value: 'cd public\npython -m http.server' },
    { type: 'paragraph', value: 'Then, I went through the code and began to understand how Emacs & Org work. Then how it converts the Org to HTML. I understand the whole process slightly. But, till I have full awareness of Emacs & Org.' },
    { type: 'paragraph', value: 'Then, I started working on Thanga Ayyanar’s website’s CSS, striving to make it visually appealing. The UI reflects their name in gold, paired with a dark theme. Since Ayyanar bro prefers dark red & gold, I used it for ::selection. You can check out the code I wrote for the website here: <a href="https://github.com/anandsundaramoorthysa/goldayan.github.io" target="_blank" rel="noopener noreferrer">https://github.com/anandsundaramoorthysa/goldayan.github.io</a>' },
    { type: 'paragraph', value: 'This blog is a brief account of my journey into exploring Emacs, Org Mode, and figuring out how to use them on Windows. Initially, it was somewhat challenging, much like when I began learning Python back in 2022. However, as with any skill, it gradually became easier with time and persistence.' },
    { type: 'paragraph', value: 'When you feel this content is valuable, follow me for more upcoming Blogs.' },
    { type: 'heading', level: 2, value: 'Connect with Me:' },
    { type: 'list', items: [
      '<strong>LinkedIn:</strong> Anand Sundaramoorthy',
      '<strong>Instagram:</strong> @anandsundaramoorthysa',
      '<strong>Email:</strong> sanand03072005@gmail.com',
    ]},
   ];
  
   export default blogContent;