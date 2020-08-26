//
// Your implementations
// 

class Game {
    public player1Points: number = 0
    public player2Points: number = 0
}

export function updateGameScore(player1Points: number, player2Points: number) {
    const game = new Game;
    game.player1Points = player1Points;
    game.player2Points = player2Points;
    return game
}

export function playerIsWinner(largePoint: number, smallPoint: number) {
    if (largePoint >= 4 && largePoint - smallPoint >= 2) {
        return true
    }

}

export function decideGameWinner(game: Game): string {
    if (playerIsWinner(game.player1Points, game.player2Points)) {
        return 'Player 1';
    } else if (playerIsWinner(game.player2Points, game.player1Points)) {
        return 'Player 2';
    } else {
        return 'no one win';
    }
}

export function printScore(score: number[]) {
    return checkMessageScore(updateGameScore(score[0], score[1]));
}

export function checkMessageScore(game: Game) {
    if (game.player1Points == game.player2Points) {
        switch (game.player1Points) {
            case 0:
                return 'love - love'
                break;
            case 1:
                return 'fifteen - fifteen'
                break;
            case 2:
                return 'thirty - thirty'
                break;
            default:
                return 'deuce'
                break;
        }
    }
    else if (game.player1Points > game.player2Points) {
        return 'advantage player 1'
    }
    else if (game.player2Points > game.player1Points) {
        return 'advantage player 2'
    }
    }
