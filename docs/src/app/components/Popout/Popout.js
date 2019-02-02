import styles from './Popout.module.scss';
import React from 'react';
import cx from 'classnames';

const Popout = ({
  children,
  content,
  large,
  onClick,
  onBlur,
  top,
  topLeft,
  topRight,
  bottom,
  bottomLeft,
  bottomRight,
  left,
  leftTop,
  leftBottom,
  right,
  rightTop,
  rightBottom,
  className,
  ...restProps
}) => {
  let [visible, setVisible] = React.useState(false);
  const popRef = React.useRef(null);

  const handleClick = function(e) {
    setVisible(!visible);
    if (onClick) {
      onClick(e);
    }
  };

  React.useEffect(
    () => {
      if (document && visible) {
        document.addEventListener('mousedown', docClick, false);
        document.addEventListener('touchend', docClick, false);
      }
    },
    [visible]
  );

  const docClick = e => {
    if (visible && !popRef.current.contains(e.target)) {
      setVisible(false);
    }
  };

  return (
    <div
      ref={popRef}
      className={cx({
        [styles.root]: true,
        [className]: className
      })}
      {...restProps}
    >
      {children(handleClick, popRef)}
      {visible && (
        <div
          className={cx({
            [styles.container]: true,
            [styles.containerLeft]: topLeft || bottomLeft,
            [styles.containerRight]: topRight || bottomRight || left,
            [styles.containerCenter]: top || bottom,
            [styles.containerMiddle]: left || right
          })}
        >
          <div
            className={cx({
              [styles.popoutTop]: top || topLeft || topRight,
              [styles.popoutBottom]: bottom || bottomLeft || bottomRight,
              [styles.popoutLeft]: left || leftTop || leftBottom,
              [styles.popoutRight]: right || rightTop || rightBottom,
              [styles.popoutAlignMiddle]: left || right,
              [styles.popoutAlignTop]: leftTop || rightTop,
              [styles.popoutAlignBottom]: leftBottom || rightBottom
            })}
          >
            <div className={styles.content}>{content}</div>
            <div
              className={cx({
                [styles.arrowPositionTop]: bottom || bottomRight || bottomLeft,
                [styles.arrowPositionBottom]: top || topLeft || topRight,
                [styles.arrowPositionLeft]: right || rightTop || rightBottom,
                [styles.arrowPositionRight]: left || leftTop || leftBottom,
                [styles.arrowAlignLeft]: topLeft || bottomLeft,
                [styles.arrowAlignCenter]: top || bottom,
                [styles.arrowAlignRight]: topRight || bottomRight,
                [styles.arrowAlignTop]: leftTop || rightTop,
                [styles.arrowAlignMiddle]: left || right,
                [styles.arrowAlignBottom]: leftBottom || rightBottom
              })}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Popout;
