class GuessingGame {
    constructor() {}
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }
    /* Use Binary Search for finding half of range of numbers */
    guess() {
        this.guessTheNumber = Math.ceil( (this.min + this.max) / 2);
        return this.guessTheNumber;
    }
    /*If guessing number is lower we move right side of numbers*/
    lower() { this.max = this.guessTheNumber; }
    /*If guessing number is greater we move left side of numbers*/
    greater() { this.min = this.guessTheNumber; }
}
module.exports = GuessingGame;