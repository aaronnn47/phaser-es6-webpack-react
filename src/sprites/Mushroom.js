import Phaser from 'phaser'

import { show } from '../gui-system/SimpleMessage'

export default class extends Phaser.Sprite {
  onClick() {
    show('Hello boys and girls', () => {
      console.log('Message is closed')
    })
  }
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)

    this.inputEnabled = true;

    this.events.onInputDown.add(this.onClick, this);
  }

  update () {
    this.angle += 1
  }
}
