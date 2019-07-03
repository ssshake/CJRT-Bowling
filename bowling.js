export class Bowling {
  constructor() {
    this.rolls = [];
    this.frames = [];
  }

  roll(pins) {
    this.rolls = [...this.rolls, pins];

   //let foo = Math.floor((this.rolls.length - 1) / 2) + 1
  }

  score() {
    return this.sumRolls();
  }

  framesFromRolls() {

    var i,j;
    for (i=0,j=this.rolls.length; i<j; i+=2) {
        this.frames.push(this.rolls.slice(i,i+2))
    }
  }

  sumRolls() {
    this.framesFromRolls();

    return this.frames.reduce((score, frame, index) => {
      let frameScore = frame[0] + frame[1];
      if (frameScore === 10) {
        // add the next roll from the next frame
        frameScore += this.frames[index + 1][0];
      }

      return score + frameScore
    }, 0)
  }
}

