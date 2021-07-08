import React, { Component } from "react";
import PropTypes from "prop-types";

import dataWarm from "../public";

class cssSeamlessScroll extends Component {
  constructor(props) {
    super(props);
    const random_number = Date.now();
    this.state = {
      realBoxWidth: 0,
      realBoxHeight: 0,
      animation_name: `animation_name_${random_number}`,
      cssPlayStatus: true,
      var_EndX: `--var-end-x-${random_number}`,
      var_EndY: `--var-end-y-${random_number}`,
    };
  }

  componentDidMount() {
    this.refs.realBoxRef.style.setProperty(this.state.var_EndX, 0);
    this.refs.realBoxRef.style.setProperty(this.state.var_EndY, 0);
    document.styleSheets[0].insertRule(`@keyframes ${this.state.animation_name}{
      100% {
        z-index: 999;
        transform: translate(var(${this.state.var_EndX}), var(${this.state.var_EndY}));
      }
    }`, 0);
    this.initMove();
  }

  render() {
    return (
      <div>
        <div ref="realBoxRef" onMouseEnter={this.enter.bind(this)} onMouseLeave={this.leave.bind(this)}
          style={this.realBoxStyle}>
          <div ref="slotListRef" style={this.floatStyle}>{this.props.children}</div>
          <div ref="scrollHtml" style={this.floatStyle}></div>
        </div >
      </div >
    )
  }

  get realBoxStyle() {
    const style = {
      overflow: "hidden",
      width: this.cssRealBoxWidth,
      transform: `translate(${this.cssStartX}, ${this.cssStartY})`
    }
    if (this.props.step == undefined) {
      style.animation = `${this.state.animation_name} ${this.cssDuration} ${this.cssCubicBezier} ${this.cssDelay} ${this.cssCount} normal none ${this.props.scrollSwitch && this.state.cssPlayStatus ? "running" : "paused"}`;
    } else {
      style.animation = `${this.state.animation_name} ${this.cssDuration} steps(${this.props.step}, start) ${this.cssDelay} ${this.cssCount} normal none ${this.props.scrollSwitch && this.state.cssPlayStatus ? "running" : "paused"}`
    }
    return style;
  }

  get cssRealBoxWidth() {
    return this.state.realBoxWidth ? `${this.state.realBoxWidth}px` : "auto"
  }

  get cssDelay() {
    return `${this.props.delay}s`;
  }

  get cssCubicBezier() {
    return `cubic-bezier(${this.props.cubicBezier.x1}, ${this.props.cubicBezier.y1}, ${this.props.cubicBezier.x2}, ${this.props.cubicBezier.y2})`
  };

  get cssCount() {
    return this.props.count;
  };

  get cssDuration() {
    if (this.props.duration !== undefined) {
      return `${this.props.duration}s`;
    }
    if (this.isHorizontal && this.state.realBoxWidth != 0) {
      return `${this.state.realBoxWidth / 2 / 60}s`;
    }
    if (this.state.realBoxHeight.value != 0) {
      return `${this.state.realBoxHeight / 2 / 60}s`;
    }
    return "0s";
  }

  get cssStartY() {
    if (this.props.direction == "down") {
      return `${-this.state.realBoxHeight / 2}px`;
    }
    return "0";
  }

  get cssStartX() {
    if (this.props.direction == "right") {
      return `${-this.state.realBoxWidth / 2}px`;
    }
    return "0";
  }

  initMove() {
    setTimeout(() => {
      dataWarm(this.props.datas);
      this.refs.scrollHtml.innerHTML = "";
      if (this.isHorizontal) {
        let slotListWidth = this.refs.slotListRef.offsetWidth;
        slotListWidth = slotListWidth * 2 + 1;
        this.setState({
          realBoxWidth: slotListWidth
        });
      }
      this.refs.scrollHtml.innerHTML = this.refs.slotListRef.innerHTML;
      setTimeout(() => {
        this.setState({
          realBoxHeight: this.refs.realBoxRef.offsetHeight
        }, function () {
          if (this.props.direction == "left") {
            this.refs.realBoxRef.style.setProperty(this.state.var_EndX, `${-this.state.realBoxWidth / 2}px`);
          }
          if (this.props.direction == "up") {
            this.refs.realBoxRef.style.setProperty(this.state.var_EndY, `${-this.state.realBoxHeight / 2}px`);
          }
        })
      }, 0);
    }, 0);
  }

  enter() {
    if (this.hoverStop) {
      this.setState({
        cssPlayStatus: false
      });
    }
  }
  leave() {
    if (this.hoverStop) {
      this.setState({
        cssPlayStatus: true
      });
    }
  }

  reset() {
    this.initMove();
  }

  get isHorizontal() {
    return this.props.direction == "left" || this.props.direction == "right"
  }

  get floatStyle() {
    return this.isHorizontal
      ? { float: "left", overflow: "hidden" }
      : { overflow: "hidden" };
  }

  get hoverStop() {
    return this.props.hover && this.props.scrollSwitch;
  }
}

cssSeamlessScroll.propTypes = {
  // 手动控制滚动状态
  scrollSwitch: PropTypes.bool,
  // 步进速度
  step: PropTypes.number,
  // 是否开启鼠标悬停
  hover: PropTypes.bool,
  // 控制滚动方向
  direction: PropTypes.oneOf(["up", "down", "left", "right"]),
  // 动画循环次数
  count: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  // 动画时间
  duration: PropTypes.number,
  // 贝塞尔曲线
  cubicBezier: PropTypes.shape({
    x1: PropTypes.number,
    y1: PropTypes.number,
    x2: PropTypes.number,
    y2: PropTypes.number
  }),
  // 动画延时开始
  delay: PropTypes.number,
}

cssSeamlessScroll.defaultProps = {
  scrollSwitch: true,
  hover: false,
  direction: "up",
  count: "infinite",
  cubicBezier: {
    x1: 0,
    y1: 0,
    x2: 1,
    y2: 1,
  },
  delay: 0,
}

export default cssSeamlessScroll;
