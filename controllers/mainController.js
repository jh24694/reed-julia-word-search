// Function to generate random words
async function generateRandomWords() {
  try {
    const response = await fetch('https://api.datamuse.com/words?ml=beach&max=10');
    if (!response.ok) {
      throw new Error('Failed to fetch random words');
    }
    const randomWords = await response.json();
    console.log('Response from API:', randomWords); // Add this line for debugging
    return randomWords.map(word => word.word);
  } catch (error) {
    console.error('Error generating random words:', error);
    return [];
  }
}

// Main function to log random words
async function main() {
  const randomWords = await generateRandomWords();
  console.log('Random words:', randomWords);
}

// Call the main function
main();

console.log("hi");
