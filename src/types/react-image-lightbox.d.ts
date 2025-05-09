declare module "react-image-lightbox" {
  import { Component } from "react";

  interface LightboxProps {
    mainSrc: string;
    nextSrc?: string;
    prevSrc?: string;
    onCloseRequest: () => void;
    onMovePrevRequest?: () => void;
    onMoveNextRequest?: () => void;
    reactModalStyle?: object;
    imageTitle?: string;
    imageCaption?: string;
    toolbarButtons?: React.ReactNode[];
    animationDisabled?: boolean;
    animationOnKeyInput?: boolean;
    animationDuration?: number;
    keyRepeatLimit?: number;
    keyRepeatKeyupBonus?: number;
    imagePadding?: number;
    clickOutsideToClose?: boolean;
    enableZoom?: boolean;
    wrapperClassName?: string;
    nextLabel?: string;
    prevLabel?: string;
    zoomInLabel?: string;
    zoomOutLabel?: string;
    closeLabel?: string;
  }

  export default class Lightbox extends Component<LightboxProps> {}
}
