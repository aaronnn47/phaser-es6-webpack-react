import 'pixi'
import 'p2'
import Phaser from 'phaser'

import { connect } from  './gui-system'

import BootState from './states/Boot'
import SplashState from './states/Splash'
import GameState from './states/Game'

import config from './config'

class Game extends Phaser.Game {
    constructor() {
        var parentId = 'content';

        const docElement = document.documentElement
        const width = docElement.clientWidth > config.gameWidth ? config.gameWidth : docElement.clientWidth
        const height = docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight

        super(width, height, Phaser.CANVAS, parentId, null)

        this.state.add('Boot', BootState, false)
        this.state.add('Splash', SplashState, false)
        this.state.add('Game', GameState, false)

        this.state.start('Boot')

        connect(parentId, width, height)
    }
}

window.game = new Game()