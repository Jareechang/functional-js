import log from './logger';
import Immutable from 'immutable';

let decrementHP = function(player) {
    return player.set('hp', player.get('hp') - 1);
}

let isSameTeam = function(player1, player2) {
    return player1.get('team') === player2.get('team');
}

let punch = function(player, target) {
    return isSameTeam(player, target) ? target : decrementHP(target);
}

let bob = Immutable.Map({
    name: 'Bob',
    hp: 20,
    team: 'red'
});

let george = Immutable.Map({
    name: 'George',
    hp: 20,
    team: 'green'
});

log(punch(bob,george));
