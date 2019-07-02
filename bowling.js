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

  sumRolls() {
    let score = 0;
    this.rolls.forEach(roll => {
        score += roll;
    });

    return score;
  }
}

