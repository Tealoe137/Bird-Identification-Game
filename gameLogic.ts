
import { Bird, Question } from './types';
import { BIRD_LIST } from './birdData';

/**
 * Shuffles an array in place.
 */
export function shuffle<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

/**
 * Generates a new question with smart distractors.
 */
export function generateQuestion(allowedBirds: Bird[] = BIRD_LIST): Question {
  // 1. Pick a random bird from the allowed list
  const correctBird = allowedBirds[Math.floor(Math.random() * allowedBirds.length)];
  
  // 2. Pick a random image from that bird
  const imageUrl = correctBird.images[Math.floor(Math.random() * correctBird.images.length)];

  // 3. Find potential distractors
  let potentialDistractors: Bird[] = [];
  const normalize = (s: string) => s.replace(/[’']/g, "'").toLowerCase().trim();
  const normalizedPool = (correctBird.distractorPool || []).map(normalize);

  // 1. Try to get distractors from the FULL list that are in the distractorPool
  // This ensures we always use the user's specified distractors if they exist.
  if (normalizedPool.length > 0) {
    const poolDistractors = BIRD_LIST.filter(b => 
      normalizedPool.includes(normalize(b.name)) && b.id !== correctBird.id
    );
    potentialDistractors = poolDistractors;
  }

  // 2. If we still need more (shouldn't happen based on user feedback, but good for safety),
  // try to get distractors from the ALLOWED list that are in the same group
  if (potentialDistractors.length < 3) {
    const groupDistractors = allowedBirds.filter(b => 
      b.id !== correctBird.id && 
      b.group === correctBird.group &&
      !potentialDistractors.find(p => p.id === b.id)
    );
    potentialDistractors = [...potentialDistractors, ...groupDistractors];
  }

  // 3. If still not enough, backfill with random birds from the ALLOWED list
  if (potentialDistractors.length < 3) {
    const others = shuffle(allowedBirds.filter(b => 
      b.id !== correctBird.id && 
      !potentialDistractors.find(p => p.id === b.id)
    ));
    potentialDistractors = [...potentialDistractors, ...others];
  }

  // 4. If we STILL don't have 3 (e.g. user selected < 4 birds and pool was small),
  // pull from the full BIRD_LIST.
  if (potentialDistractors.length < 3) {
    const fullListOthers = shuffle(BIRD_LIST.filter(b => 
      b.id !== correctBird.id && 
      !potentialDistractors.find(p => p.id === b.id)
    ));
    potentialDistractors = [...potentialDistractors, ...fullListOthers];
  }

  // 4. Select 3 distractors
  const distractors = shuffle(potentialDistractors).slice(0, 3);

  // 5. Combine and shuffle options
  const options = shuffle([correctBird, ...distractors]);

  return {
    correctBird,
    imageUrl,
    options
  };
}
