const blogContent = [
  { type: 'paragraph', value: 'When you think about it, processors in the same family, such as the U, P and H series often have similar architectures and core counts. But despite these similarities, their performance can vary significantly. Like:' },
  { type: 'list', items: [
    '<strong>U Series:</strong> Low performance but high battery life.',
    '<strong>P Series:</strong> Medium performance with medium battery life.',
    '<strong>H Series:</strong> High performance but has low battery life.',
  ]},
  { type: 'paragraph', value: 'These differences in performance are largely due to how much power the processor consumes, which directly affects how fast it can run. Like in our daily life we using Fan. How a fan’s rotation speed depends on how much power it gets, a CPU’s performance depends on the power it consumes. If a processor gets high power, it can perform at higher speeds. If it gets low power, its performance is reduced.' },
  { type: 'paragraph', value: 'This discussion refers to processors within the same family (U, P, and H series) with similar architectures and core counts. The key factor driving performance differences is the TDP and how it influences power consumption, clock speeds, and thermal management, rather than differences in architecture or core count. In this article I use Chatgpt for grammar corrections.' },

  { type: 'heading', level: 2, value: 'Key System Terms: TDP and Clock Speed' },
  { type: 'paragraph', value: 'Before we dive deeper, let’s take a moment to understand some key system terms that help explain processor behavior:' },

  { type: 'heading', level: 3, value: 'What is TDP?' },
  { type: 'paragraph', value: 'TDP (Thermal Design Power) is a measure of the maximum amount of heat a CPU generates under full load, which correlates to how much power the processor uses. It is crucial for designing the cooling systems required to keep the CPU within safe operating temperatures. While TDP gives an indication of power consumption, it is not a strict limit. The processor may exceed TDP during peak performance, but this will trigger thermal throttling if cooling is insufficient.' },

  { type: 'heading', level: 3, value: 'What is Clock Speed?' },
  { type: 'paragraph', value: 'Clock speed, also known as processor frequency, refers to the number of clock cycles per second a CPU can execute. Each cycle represents a basic unit of computation. A higher clock speed means the CPU can perform more tasks per second, leading to faster performance. However, increasing clock speed also requires more power and generates more heat.' },

  { type: 'heading', level: 3, value: 'What is TDP Limit?' },
  { type: 'paragraph', value: 'TDP Limit refers to the maximum amount of power a CPU is designed to consume under full load. This measure helps guide the design of cooling systems and ensures the CPU operates within safe thermal boundaries. While a processor with a higher TDP limit has the potential for better performance due to the increased power and thermal headroom, performance is influenced by many factors, including clock speed, core count, and architecture.' },

  { type: 'heading', level: 3, value: 'What is Base Clock Speed?' },
  { type: 'paragraph', value: 'Base clock speed is the processor’s default operating speed under light or moderate workloads, such as web Browse or word processing. It is set to balance power efficiency with performance, ensuring the processor is energy-efficient during routine tasks.' },

  { type: 'heading', level: 3, value: 'What is Boost Clock Speed?' },
  { type: 'paragraph', value: 'Boost clock speed refers to the maximum speed a processor can achieve when under heavy load, such as gaming, video rendering, or other intensive tasks. Boost speeds are activated when the processor has sufficient power and thermal headroom to perform at higher speeds without overheating, allowing for more efficient execution of demanding tasks.' },

  { type: 'heading', level: 2, value: 'Power Consumption and Performance: A Simple Analogy' },
  { type: 'paragraph', value: 'Let’s use a simple analogy to explain the relationship between power and performance. Think about how the food we eat affects our energy levels. When we eat well, we feel energetic and can perform tasks more efficiently, right? Now, I hear many of you thinking: Likewise, when I eat more and better, I sleep well. So, where do I perform well? Right guys. OK, joke’s apart. Let’s continue the explanation. Similarly, when CPU\'s are provided with sufficient power (higher TDP), they can perform faster and handle demanding tasks, just like when you feel energetic after a good meal.' },
  { type: 'paragraph', value: 'On the other hand, if the CPU is provided with less power (lower TDP), its performance slows down, and it conserves energy. This is similar to feeling sluggish when you haven’t eaten enough or are consuming low-energy food.' },

  { type: 'paragraph', value: 'U Series processors are designed to consume less power, making them efficient for battery life but limiting their performance.' },
  { type: 'paragraph', value: 'H Series processors are designed for high performance but consume more power, leading to shorter battery life.' },
  { type: 'paragraph', value: 'P Series strikes a balance, offering moderate performance with medium power consumption.' },
  { type: 'image', src: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/0*4f4WWDfnVJ3WYi8g', alt: 'U, P, and H Series Comparison Chart' },

  { type: 'heading', level: 2, value: 'How TDP, Base, and Boost Clock Speeds Affect Performance' },
  { type: 'paragraph', value: 'For the U Series, a low TDP limit is set to prioritize energy efficiency and extend battery life. When the processor reaches its TDP limit, the cooling system activates to manage heat and maintain safe temperatures. If the processor exceeds thermal limits, its clock speed is automatically reduced (thermal throttling) to avoid overheating, which reduces performance, particularly during demanding tasks.' },
  { type: 'paragraph', value: 'The same principles apply to the P and H Series, but the TDP limits are set differently:' },
  { type: 'list', items: [
    'The P Series provides a moderate balance of power and thermal management, allowing for medium performance.',
    'The H Series has a higher TDP limit, enabling it to sustain high performance but at the cost of higher power consumption and more heat generation.',
  ]},

  { type: 'heading', level: 2, value: 'Conclusion' },
  { type: 'paragraph', value: 'In summary, the performance differences between the U, P, and H series processors primarily stem from their varying power consumption limits (TDP). These limits affect how much power the CPU can consume, which in turn influences clock speed and thermal management. While U Series processors are optimized for lower power consumption and longer battery life, they offer reduced performance. H Series processors are designed for high performance but consume more power, leading to shorter battery life. The P Series offers a balance between the two, providing moderate performance and power efficiency.' },

  { type: 'paragraph', value: 'When feel this content is valuable follow me for more upcoming Blogs.' },

  { type: 'heading', level: 2, value: 'Connect with Me:' },
  { type: 'list', items: [
    '<strong>LinkedIn:</strong> Anand Sundaramoorthy',
    '<strong>Instagram:</strong> @anandsundaramoorthysa',
    '<strong>Email:</strong> sanand03072005@gmail.com',
  ]},
];

export default blogContent;