export class Bowling {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls = [...this.rolls, pins];
  }

  score() {
    return this.sumRolls();
  }

  frames() {
    return this.rolls.reduce((frames, roll, index, rolls) => {
      if (index % 2){
        return frames
      }
      return [...frames, [ roll, rolls[index + 1 ] || 0]]
    }, [])
  }

  sumRolls() {
    return this.frames().reduce((score, frame, index, frames) => {
      if (index === 10) {
        return score;
      }
      return score + this.getFrameScore(frame, index, frames)
    }, 0)
  }

  getFrameScore(frame, index, frames) {
    let score = frame[0] + frame[1];
    if (score === 10) {
      score += frames[index + 1][0];
    }

    return score;
  }
}

