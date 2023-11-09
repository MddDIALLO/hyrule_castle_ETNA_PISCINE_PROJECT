import { getInput } from '../utils';
import { Player } from '../Interfaces';

export function gameStarting(): boolean {
    let playing: boolean = false;

    console.log("(1) New Game ", " (2) Quit");
    let question: string = 'Enter your choice \n';
    let inputValue: number = parseInt(getInput(question), 10);

    while(!(inputValue === 1 || inputValue === 2)) {
        let question: string = 'Please enter a valid Option\n';
        inputValue = parseInt(getInput(question), 10);
    }

    if(inputValue === 1) {
        playing = true;
    } else if(inputValue === 2) {
        console.log("Good Bye!");
        playing = false;
    }

    return playing;
}

export function difficultyChoice(): string {
    let difficulty: string = '';

    console.log("***** Difficulty *****");
    console.log("(1) Normal ", " (2) Difficult", " (3) Insane");
    let question: string = 'Enter your choice \n';
    let inputValue: number = parseInt(getInput(question), 10);

    while(!(inputValue === 1 || inputValue === 2 || inputValue === 3)) {
        let question: string = 'Please enter a valid Option\n';
        inputValue = parseInt(getInput(question), 10);
    }

    if(inputValue === 1) {
        difficulty = 'Normal';
    } else if(inputValue === 2) {
        difficulty = 'Difficult';
    } else if(inputValue === 3) {
        difficulty = 'Insane';
    }

    return difficulty;
}

export function updateEnemyStats(enemy: Player, difficulty: string): Player {
    let multiple: number = 0;

    if(difficulty === 'Difficult') {
        multiple = 1.5;
    } else if (difficulty === 'Insane') {
        multiple = 2;
    }

    for (let key in enemy) {
        if(key != 'id' && key != 'name' && key != 'race' && key != 'class' && key != 'rarity') {
            enemy[key] = Math.floor(enemy[key] * multiple)
        }
    }

    return enemy;
}