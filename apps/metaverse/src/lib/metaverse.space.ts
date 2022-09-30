import {
  customElement,
  html,
  inject,
  MetaElement,
} from '@pinser-metaverse/core';
import { PlayerProvider } from '@pinser-metaverse/player';
import '@pinser-metaverse/scene';

@customElement('metaverse-bootstrap-space')
export class MetaverseBootstrapSpaceElement extends MetaElement {
  @inject()
  playerProvider: PlayerProvider;

  override init(): void {
    this.playerProvider.setInfo({
      username: localStorage.getItem('username') || 'Visiteur',
      avatar: localStorage.getItem('avatar') || '/assets/visitor.glb',
      preview: localStorage.getItem('preview') || '/assets/visitor.png',
    });
  }

  override render() {
    return html` <!-- space -->
      <!-- welcome panel -->
      <a-rounded
        color="#5FA6DC"
        width="2"
        height="1"
        rotation="0 0 0"
        position="-1 1.2 -5"
      >
        <a-text
          color="#ffffff"
          value="Welcome\\n in your\\n digital twin world"
          align="center"
          position="1 0.5 0"
        ></a-text>
      </a-rounded>

      <!-- ground -->
      <a-plane
        teleportable
        color="#F3910D"
        width="22.9"
        height="16.92"
        rotation="-90 0 0"
        position="0 0 0"
      ></a-plane>`;
  }
}
