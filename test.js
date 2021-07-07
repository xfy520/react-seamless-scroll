import React, { Component } from 'react'

export default class OneDemo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [1, 2, 3, 4, 5, '', 6, 7, 8, 9, '', 0, 2, 1, 3, 4, 5, 6, 7, '', 5, 4, 3, 2, 1, 2, 3, 9]
    }
  }

  componentDidMount(e) {
    let numArr = Object.keys(this.refs)
    let num = numArr.length - 1
    let startNum = 0
    this.state.startNum = startNum
    this.state.endNum = num
    this.state.timer = setInterval(this.fn, 300)
  }
  fn = () => {
    let animationStyle = this.refs[this.state.startNum].style
    animationStyle.display = 'inline-block'
    document.styleSheets[0].insertRule(`@keyframes mymove{
             0%{ color:white;transform:rotate(0deg) translateY(0px)}
             70%{color:black;transform:rotate(180deg) translateY(-24px)}
             100%{ color:#666;transform:rotate(360deg) translateY(0px)} }`, 0)
    animationStyle.animation = 'mymove 1s linear forwards'
    //递增
    this.state.startNum++
    //清除timer
    if (this.state.startNum == this.state.endNum + 1) {
      clearInterval(this.state.timer)
    }
  }

  render() {
    return (
      <div className="OneDemo">
        {
          this.state.data.map((v, i) => {
            if (v === '') {
              return (
                <span key={i} ref={i} style={{ display: 'inline-block', height: '24px' }}> </span>
              )
            } else {
              return (
                <span key={i} ref={i} style={{ display: 'inline-block', height: '24px' }}>{v}</span>
              )
            }

          })
        }
      </div>
    )
  }
}
