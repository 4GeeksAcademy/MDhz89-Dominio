
let pronouns = ['the', 'our', 'his'];
let adjectives = ['great', 'big', 'amazing'];
let nouns = ['jogger', 'raccoon', 'dog', 'merchant', 'driver'];


for (let i = 0; i < pronouns.length; i++) {
  for (let j = 0; j < adjectives.length; j++) {
    for (let k = 0; k < nouns.length; k++) {
    
      console.log(`${pronouns[i]}${adjectives[j]}${nouns[k]}.com`);
    }
  }
}
