export class Emoji {
  constructor() {
    this.animalEmojis = [
      "🐢",
      "🦈",
      "🦙",
      "🐙",
      "🦕",
      "🐊",
      "🕊️",
      "🦖",
      "🐡",
      "💫",
      "🌊",
    ];
    this.musicEmoji = ["🎷", "🎺", "🎸", "🪗", "🪕", "🎻", "🎹", "🪇", "🪘"];
    this.videoGameEmojis = ["🎮", "👾"];
    this.plantEmojis = ["🌲", "🌵"];
  }

  getAllEmojis() {
    return animalEmojis.concat(musicEmojis, videoGameEmojis, plantEmojis);
  }

  getRandomEmoji(emojiGroup) {
    if (!emojiGroup) {
      emojiGroup = this.getAllEmojis();
    }
    const randomIndex = Math.floor(Math.random() * emojiGroup.length);
    return emojiGroup[randomIndex];
  }
}

const animalEmojis = [
  "🐢",
  "🦈",
  "🦙",
  "🐙",
  "🦕",
  "🐊",
  "🕊️",
  "🦖",
  "🐡",
  "💫",
  "🌊",
];

const musicEmojis = ["🎷", "🎺", "🎸", "🪗", "🪕", "🎻", "🎹", "🪇", "🪘"];
const videoGameEmojis = ["🎮", "👾"];
const plantEmojis = ["🌲", "🌵"];

export const allemojis = animalEmojis.concat(musicEmojis, videoGameEmojis);
