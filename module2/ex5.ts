class SlothMachine {
    coins: number;

    constructor() {
        this.coins = 0;
    }

    play() {
        this.coins++;

        // 60% winrate para facilitar la aparición de una ruleta ganadora
        // solo para hacer la comprobación de que el ejercicio funciona.
        const WIN_RATE:number = 0.6; 
        let roulette: Array<boolean> = [];

        for (let i = 0; i < 3; i++) {
            let rndmBool: boolean = Math.random() < WIN_RATE; 
            roulette.push(rndmBool);
        }
        
        if (roulette.indexOf(false) == -1){
            console.log(roulette)
            console.log(`Congratulations!!!. You won ${this.coins} coins!!`)
            this.coins = 0;
        }else{
            console.log(roulette)
            console.log("Good luck next time!!")
        }
    }
}
  
const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();