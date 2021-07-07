import React, { Component } from "react";
import PropTypes from "prop-types";

import dataWarm from "../public";

class cssSeamlessScroll extends Component {
  constructor(props) {
    super(props);
    const random_number = Date.now();
    this.state = {
      initStatus: false,
      realBoxWidth: 0,
      realBoxHeight: 0,
      animation_name: `animation_name_${random_number}`,
      cssPlayStatus: "paused"
    };
  }

  componentDidMount() {
    this.initMove();
  }

  render() {
    return (
      <div>
        <div ref="realBoxRef" onMouseEnter={this.enter.bind(this)} onMouseLeave={this.leave.bind(this)}
          style={this.isScroll && this.state.initStatus ? this.realBoxStyle : {}}>
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
      style.animation = `${this.state.animation_name} ${this.cssDuration} ${this.cssCubicBezier} ${this.cssDelay} ${this.cssCount} normal none ${this.state.cssPlayStatus}`;
    } else {
      style.animation = `${this.state.animation_name} ${this.cssDuration} steps(${this.props.step}, start) ${this.cssDelay} ${this.cssCount} normal none ${this.state.cssPlayStatus}`
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

  get cssEndY() {
    if (this.props.direction == "up") {
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

  get cssEndX() {
    if (this.props.direction == "left") {
      return `${-this.state.realBoxWidth / 2}px`;
    }
    return "0";
  }

  initClass() {
    if (this.props.autoPlay) {
      this.setState({
        cssPlayStatus: "running"
      });
    } else {
      this.setState({
        cssPlayStatus: "paused"
      });
    }
    if (this.props.autoPlay && !this.state.initStatus) {
      this.setState({
        initStatus: true
      })
    }
    document.styleSheets[0].insertRule(`@keyframes ${this.state.animation_name}{
      100% {
        z-index: 999;
        transform: translate(${this.cssEndX}, ${this.cssEndY});
      }
    }`, 0)
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
      if (this.isScroll) {
        this.refs.scrollHtml.innerHTML = this.refs.slotListRef.innerHTML;
        setTimeout(() => {
          this.setState({
            realBoxHeight: this.refs.realBoxRef.offsetHeight
          }, function () {
            this.initClass();
          })
        }, 0);
      }
    }, 0);
  }

  enter() {
    if (this.hoverStop) {
      this.setState({
        cssPlayStatus: "paused"
      });
    }
  }
  leave() {
    if (this.hoverStop) {
      this.setState({
        cssPlayStatus: "running"
      });
    }
  }

  reset() {
    this.setState({
      cssPlayStatus: "paused"
    }, function () {
      this.initMove();
    });
  }

  get isHorizontal() {
    return this.props.direction == "left" || this.props.direction == "right"
  }

  get floatStyle() {
    return this.isHorizontal
      ? { float: "left", overflow: "hidden" }
      : { overflow: "hidden" };
  }

  get isScroll() {
    return this.props.datas.length >= this.props.limitScrollNum;
  }

  get hoverStop() {
    return this.props.hover && this.props.autoPlay && this.isScroll;
  }
}

cssSeamlessScroll.propTypes = {
  // 滚动列表的数据列表，主要使用长度与监听数据更新
  datas: PropTypes.array.isRequired,
  // 手动控制滚动
  autoPlay: PropTypes.bool,
  // 步进速度，step 需是单步大小的约数
  step: PropTypes.number,
  // 开启滚动的数据量
  limitScrollNum: PropTypes.number,
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
  autoPlay: true,
  limitScrollNum: 5,
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
