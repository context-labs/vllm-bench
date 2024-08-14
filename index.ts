
import OpenAI from "openai";

const OAI = new OpenAI({
  baseURL: "http://localhost:8000/v1",
  apiKey: "nothing",
});


export type InferenceResponse = {
  response: unknown;
  ttfb: number;
  responseTimeMs: number;
};



const prompts = [
  `Write a long story about a boy named billy who goes on an adventure to find a treasure`,
  `Explain the theory of relativity in simple terms.`,
  `Write a haiku about autumn.`,
  `List the steps to bake a chocolate cake.`,
  `Who was the first person to walk on the moon?`,
  `Describe the water cycle.`,
  `What are the primary colors?`,
  `Explain the concept of supply and demand in economics.`,
  `Write a short story about a time traveler.`,
  `How does photosynthesis work?`,
  `What is the Pythagorean theorem?`,
  `Describe the plot of Romeo and Juliet.`,
  `What are the main differences between DNA and RNA?`,
  `Explain how a computer's CPU works.`,
  `Write a poem about the ocean.`,
  `What are the symptoms of the common cold?`,
  `Describe the process of mitosis.`,
  `Who painted the Mona Lisa?`,
  `What is the difference between weather and climate?`,
  `Explain the concept of blockchain technology.`,
  `Write a recipe for spaghetti carbonara.`,
  `What is the greenhouse effect?`,
  `Describe the structure of an atom.`,
  `Who wrote "To Kill a Mockingbird"?`,
  `Explain how vaccines work.`,
  `What is the difference between a simile and a metaphor?`,
  `Describe the process of plate tectonics.`,
  `Write a brief history of the Roman Empire.`,
  `What are the main features of a mammal?`,
  `Explain the concept of artificial intelligence.`,
  `Write a dialog between two characters discussing their favorite books.`,
  `What is the function of the pancreas?`,
  `Describe the life cycle of a butterfly.`,
  `Who composed the "Moonlight Sonata"?`,
  `Explain the concept of quantum entanglement.`,
  `Write a news article about a fictional scientific discovery.`,
  `What is the difference between a virus and a bacterium?`,
  `Describe the process of how a bill becomes a law.`,
  `Who painted "The Starry Night"?`,
  `Explain the concept of dark matter.`,
  `Write a short essay on the importance of environmental conservation.`,
  `What is the function of the cerebellum?`,
  `Describe the process of photosynthesis in detail.`,
  `Who invented the telephone?`,
  `Explain the concept of cognitive dissonance in psychology.`,
  `Write a letter to your future self.`,
  `What is the difference between renewable and non-renewable energy sources?`,
  `Describe the major events of World War II.`,
  `Who wrote "1984"?`,
  `Explain the concept of natural selection in evolution.`,
  `Write a review of an imaginary restaurant.`,
  `What is the difference between a tornado and a hurricane?`,
  `Describe the process of how pearls are formed.`,
  `Who discovered penicillin?`,
  `Explain the concept of the Internet of Things (IoT).`,
  `Write a short story about a robot gaining consciousness.`,
  `What are the main functions of the liver?`,
  `Describe the process of how mountains are formed.`,
  `Who was the first woman to win a Nobel Prize?`,
  `Explain the concept of neural networks in machine learning.`,
  `Write a persuasive essay on the importance of space exploration.`,
  `What is the difference between a democracy and a republic?`,
  `Describe the process of how rainbows are formed.`,
  `Who invented the printing press?`,
  `Explain the concept of cryptocurrency.`,
  `Write a scene for a play about time travel.`,
  `What is the difference between classical and operant conditioning?`,
  `Describe the process of how diamonds are formed.`,
  `Who wrote "Pride and Prejudice"?`,
  `Explain the concept of black holes in astrophysics.`,
  `Write a blog post about the future of transportation.`,
  `What is the function of the endocrine system?`,
  `Describe the process of how volcanoes erupt.`,
  `Who developed the theory of evolution?`,
  `Explain the concept of virtual reality.`,
  `Write a short biography of a fictional historical figure.`,
  `What is the difference between a fruit and a vegetable?`,
  `Describe the process of how soap cleans.`,
  `Who invented the light bulb?`,
  `Explain the concept of the butterfly effect in chaos theory.`,
  `Write a children's story about friendship.`,
  `What is the difference between a physical and chemical change?`,
  `Describe the process of how clouds form.`,
  `Who painted the Sistine Chapel ceiling?`,
  `Explain the concept of neuroplasticity.`,
  `Write a speech about the importance of education.`,
  `What is the difference between an asteroid and a comet?`,
  `Describe the process of how a tsunami forms.`,
  `Who discovered radioactivity?`,
  `Explain the concept of the uncanny valley in robotics.`,
  `Write a poem about the changing seasons.`,
  `What is the difference between a solute and a solvent?`,
  `Describe the process of how a rainbow is formed.`,
  `Who invented the World Wide Web?`,
  `Explain the concept of the Turing test in artificial intelligence.`,
  `Write a short story about a day in the life of a tree.`,
  `What is the difference between alternating current (AC) and direct current (DC)?`,
  `Describe the process of how a star is born.`,
  `Who wrote "The Origin of Species"?`,
  `Explain the concept of the multiverse theory in physics.`,
  `What is the capital of France?`,
  `Explain the theory of relativity in simple terms.`,
  `Write a haiku about autumn.`,
  `List the steps to bake a chocolate cake.`,
  `Who was the first person to walk on the moon?`,
  `Describe the water cycle.`,
  `What are the primary colors?`,
  `Explain the concept of supply and demand in economics.`,
  `Write a short story about a time traveler.`,
  `How does photosynthesis work?`,
  `What is the Pythagorean theorem?`,
  `Describe the plot of Romeo and Juliet.`,
  `What are the main differences between DNA and RNA?`,
  `Explain how a computer's CPU works.`,
  `Write a poem about the ocean.`,
  `What are the symptoms of the common cold?`,
  `Describe the process of mitosis.`,
  `Who painted the Mona Lisa?`,
  `What is the difference between weather and climate?`,
  `Explain the concept of blockchain technology.`,
  `Write a recipe for spaghetti carbonara.`,
  `What is the greenhouse effect?`,
  `Describe the structure of an atom.`,
  `Who wrote "To Kill a Mockingbird"?`,
  `Explain how vaccines work.`,
  `What is the difference between a simile and a metaphor?`,
  `Describe the process of plate tectonics.`,
  `Write a brief history of the Roman Empire.`,
  `What are the main features of a mammal?`,
  `Explain the concept of artificial intelligence.`,
  `Write a dialog between two characters discussing their favorite books.`,
  `What is the function of the pancreas?`,
  `Describe the life cycle of a butterfly.`,
  `Who composed the "Moonlight Sonata"?`,
  `Explain the concept of quantum entanglement.`,
  `Write a news article about a fictional scientific discovery.`,
  `What is the difference between a virus and a bacterium?`,
  `Describe the process of how a bill becomes a law.`,
  `Who painted "The Starry Night"?`,
  `Explain the concept of dark matter.`,
  `Write a short essay on the importance of environmental conservation.`,
  `What is the function of the cerebellum?`,
  `Describe the process of photosynthesis in detail.`,
  `Who invented the telephone?`,
  `Explain the concept of cognitive dissonance in psychology.`,
  `Write a letter to your future self.`,
  `What is the difference between renewable and non-renewable energy sources?`,
  `Describe the major events of World War II.`,
  `Who wrote "1984"?`,
  `Explain the concept of natural selection in evolution.`,
  `Write a review of an imaginary restaurant.`,
  `What is the difference between a tornado and a hurricane?`,
  `Describe the process of how pearls are formed.`,
  `Who discovered penicillin?`,
  `Explain the concept of the Internet of Things (IoT).`,
  `Write a short story about a robot gaining consciousness.`,
  `What are the main functions of the liver?`,
  `Describe the process of how mountains are formed.`,
  `Who was the first woman to win a Nobel Prize?`,
  `Explain the concept of neural networks in machine learning.`,
  `Write a persuasive essay on the importance of space exploration.`,
  `What is the difference between a democracy and a republic?`,
  `Describe the process of how rainbows are formed.`,
  `Who invented the printing press?`,
  `Explain the concept of cryptocurrency.`,
  `Write a scene for a play about time travel.`,
  `What is the difference between classical and operant conditioning?`,
  `Describe the process of how diamonds are formed.`,
  `Who wrote "Pride and Prejudice"?`,
  `Explain the concept of black holes in astrophysics.`,
  `Write a blog post about the future of transportation.`,
  `What is the function of the endocrine system?`,
  `Describe the process of how volcanoes erupt.`,
  `Who developed the theory of evolution?`,
  `Explain the concept of virtual reality.`,
  `Write a short biography of a fictional historical figure.`,
  `What is the difference between a fruit and a vegetable?`,
  `Describe the process of how soap cleans.`,
  `Who invented the light bulb?`,
  `Explain the concept of the butterfly effect in chaos theory.`,
  `Write a children's story about friendship.`,
  `What is the difference between a physical and chemical change?`,
  `Describe the process of how clouds form.`,
  `Who painted the Sistine Chapel ceiling?`,
  `Explain the concept of neuroplasticity.`,
  `Write a speech about the importance of education.`,
  `What is the difference between an asteroid and a comet?`,
  `Describe the process of how a tsunami forms.`,
  `Who discovered radioactivity?`,
  `Explain the concept of the uncanny valley in robotics.`,
  `Write a poem about the changing seasons.`,
  `What is the difference between a solute and a solvent?`,
  `Describe the process of how a rainbow is formed.`,
  `Who invented the World Wide Web?`,
  `Explain the concept of the Turing test in artificial intelligence.`,
  `Write a short story about a day in the life of a tree.`,
  `What is the difference between alternating current (AC) and direct current (DC)?`,
  `Describe the process of how a star is born.`,
  `Who wrote "The Origin of Species"?`,
  `Explain the concept of the multiverse theory in physics.`,
]


const averageStatus = {
  ttfb: 0,
  responseTimeMs: 0,
  totalWords: 0,
  completedPrompts: 0,
};

async function mainStream(
  prompt: string,
): Promise<{ ttfb: number, totalTime: number, wordCount: number }> {
  const abortController = new AbortController();

  let startTime = Date.now();

  try {
    const response = await OAI.chat.completions.create(
      {
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        model: "neuralmagic/Meta-Llama-3.1-70B-Instruct-FP8",
        stream: true,
      },
      {
        signal: abortController.signal,
        maxRetries: 0,
      },
    );

    let fullContent = '';
    let firstChunkTime: number | null = null;

    for await (const chunk of response) {
      if (firstChunkTime === null) {
        firstChunkTime = Date.now();
      }
      const content = chunk.choices[0]?.delta?.content || '';
      fullContent += content;
      process.stdout.write(content);
    }

    const endTime = Date.now();
    const ttfb = firstChunkTime! - startTime;
    const totalTime = endTime - startTime;
    const wordCount = fullContent.trim().split(/\s+/).length;

    // console.log('DONE, ttfb:', ttfb, 'totalTime:', totalTime);

    return { ttfb, totalTime, wordCount };

  } catch (error: any) {
    if (error.code === 401) {
      console.error('Unauthorized');
    } else {
      console.error(error?.message);
    }
    throw error;
  } finally {
    abortController.abort();
  }
}

async function runAllPrompts() {
  const results = await Promise.all(prompts.map(prompt => mainStream(prompt)));

  const totalWords = results.reduce((sum, result) => sum + result.wordCount, 0);
  const completedPrompts = results.length;

  const calculatePercentile = (values: number[], percentile: number) => {
    const sorted = [...values].sort((a, b) => a - b);
    const index = Math.ceil((percentile / 100) * sorted.length) - 1;
    return sorted[index];
  };

  const ttfbs = results.map(result => result.ttfb);
  const responseTimes = results.map(result => result.totalTime);
  const wordCounts = results.map(result => result.wordCount);

  console.log('TTFB (ms):');
  console.log('  p10:', calculatePercentile(ttfbs, 10));
  console.log('  p50:', calculatePercentile(ttfbs, 50));
  console.log('  p99:', calculatePercentile(ttfbs, 99));

  console.log('Response Time (ms):');
  console.log('  p10:', calculatePercentile(responseTimes, 10));
  console.log('  p50:', calculatePercentile(responseTimes, 50));
  console.log('  p99:', calculatePercentile(responseTimes, 99));

  console.log('Word Count:');
  console.log('  p10:', calculatePercentile(wordCounts, 10));
  console.log('  p50:', calculatePercentile(wordCounts, 50));
  console.log('  p99:', calculatePercentile(wordCounts, 99));

  console.log('Total words:', totalWords);
  console.log('Completed prompts:', completedPrompts);
}

runAllPrompts().catch(console.error);