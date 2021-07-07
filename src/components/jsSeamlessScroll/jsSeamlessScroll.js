import React, { Component } from "react";
import PropTypes from "prop-types";

import dataWarm from "../public";

class jsSeamlessScroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      xPos: 0,
      yPos: 0,
      reqFrame: null,
      singleWaitTimeout: null,
      realBoxWidth: 0,
      realBoxHeight: 0,
      isHover: false,
    };
  }

  render() {
    return (
      <div>
        <div ref="realBoxRef" style={this.realBoxStyle} onMouseEnter={this.enter.bind(this)} onMouseLeave={this.leave.bind(this)}>
          <div ref="slotListRef" style={this.floatStyle}>{this.props.children}</div>
          <div ref="scrollHtml" style={this.floatStyle}></div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.initMove();
  }

  componentWillUnmount() {
    this.cancle();
    clearTimeout(this.state.singleWaitTimeout);
    this.setState({
      singleWaitTimeout: null
    })
  }

  get realBoxStyle() {
    return {
      width: this.state.realBoxWidth ? `${this.state.realBoxWidth}px` : "auto",
      transform: `translate(${this.state.xPos}px,${this.state.yPos}px)`,
      transition: `all ${this.props.ease} ${this.props.delay}ms`,
      overflow: "hidden",
    };
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

  get baseFontSize() {
    return this.props.isRemUnit
      ? parseInt(
        window.getComputedStyle(document.documentElement, null).fontSize
      )
      : 1;
  }

  get realSingleStopWidth() {
    return this.props.singleWidth * this.baseFontSize;
  }

  get realSingleStopHeight() {
    return this.props.singleHeight * this.baseFontSize;
  }

  get hoverStop() {
    return this.props.hover && this.props.autoPlay && this.isScroll;
  }

  get step() {
    let singleStep;
    let _step = this.props.step;
    if (this.isHorizontal) {
      singleStep = this.realSingleStopWidth;
    } else {
      singleStep = this.realSingleStopHeight;
    }
    if (singleStep > 0 && singleStep % _step > 0) {
      console.error(
        "如果设置了单步滚动,step需是单步大小的约数,否则无法保证单步滚动结束的位置是否准确。~~~~~"
      );
    }
    return _step;
  }


  cancle() {
    cancelAnimationFrame(this.state.reqFrame || "");
    this.setState({
      reqFrame: null
    });
  }

  move() {
    if (this.state.isHover || !this.isScroll) {
      return;
    }
    this.cancle();
    this.setState({
      reqFrame: requestAnimationFrame(() => {
        const h = this.state.realBoxHeight / 2;
        const w = this.state.realBoxWidth / 2;
        let { direction, singleWaitTime } = this.props;
        if (direction === "up") {
          if (Math.abs(this.state.yPos) >= h) {
            this.setState({
              yPos: 0
            });
          }
          this.setState({
            yPos: this.state.yPos - this.step
          });
        } else if (direction === "down") {
          if (this.state.yPos >= 0) {
            this.setState({
              yPos: h * -1
            });
          }
          this.setState({
            yPos: this.state.yPos + this.step
          });
        } else if (direction === "left") {
          if (Math.abs(this.state.xPos) >= w) {
            this.setState({
              xPos: 0
            });
          }
          this.setState({
            xPos: this.state.xPos - this.step
          });
        } else if (direction === "right") {
          if (this.state.xPos >= 0) {
            this.setState({
              xPos: w * -1
            });
          }
          this.setState({
            xPos: this.state.xPos + this.step
          });
        }
        if (this.state.singleWaitTimeout) {
          clearTimeout(this.state.singleWaitTimeout);
          this.setState({
            singleWaitTimeout: null
          })
        }
        if (!!this.realSingleStopHeight) {
          if (Math.abs(this.state.yPos) % this.realSingleStopHeight < this.step) {
            this.setState({
              singleWaitTimeout: setTimeout(() => {
                this.move();
              }, singleWaitTime)
            });
          } else {
            this.move();
          }
        } else if (!!this.realSingleStopWidth) {
          if (Math.abs(this.state.xPos) % this.realSingleStopWidth < this.step) {
            this.setState({
              singleWaitTimeout: setTimeout(() => {
                this.move();
              }, singleWaitTime)
            });
          } else {
            this.move();
          }
        } else {
          this.move();
        }
      })
    });
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
          })
          if (this.props.autoPlay) {
            this.move();
          }
        }, 0);
      } else {
        this.cancle();
        this.setState({
          yPos: 0,
          xPos: 0
        })
      }
    }, 0);
  }

  startMove() {
    this.setState({
      isHover: false
    }, function () {
      this.move();
    });
  }

  stopMove() {
    this.setState({
      isHover: true
    });
    if (this.state.singleWaitTimeout) {
      clearTimeout(this.state.singleWaitTimeout);
      this.setState({
        singleWaitTimeout: null
      })
    }
    this.cancle();
  }

  enter() {
    if (this.hoverStop) {
      this.stopMove();
    }
  }

  leave() {
    if (this.hoverStop) {
      this.startMove();
    }
  }

  reset() {
    this.cancle();
    this.setState({
      isHover: false,
    }, function () {
      this.initMove();
    })
  }
}

jsSeamlessScroll.propTypes = {
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
  // 单步运动停止的高度
  singleHeight: PropTypes.number,
  // 单步运动停止的宽度
  singleWidth: PropTypes.number,
  // 单步停止等待时间(默认值 1000ms)
  singleWaitTime: PropTypes.number,
  // singleHeight and singleWidth 是否开启 rem 度量
  isRemUnit: PropTypes.bool,
  // 动画时间
  delay: PropTypes.number,
  // 动画方式
  ease: PropTypes.string
}

jsSeamlessScroll.defaultProps = {
  autoPlay: true,
  step: 1,
  limitScrollNum: 5,
  hover: false,
  direction: "up",
  singleHeight: 0,
  singleWidth: 0,
  singleWaitTime: 1000,
  isRemUnit: false,
  delay: 0,
  ease: "ease-in"
}

export default jsSeamlessScroll;
