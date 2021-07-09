# css-react-seamless-scroll

React 下列表无缝滚动

> 目前组件支持上下左右无缝滚动，单步滚动，并且支持复杂图标的无缝滚动，组件支持原生 `css3动画` 滚动。

## 效果展示

![image](docs/gif/示例%2000_00_00-00_00_30.gif)

## 安装

- `npm`

  ```shell
  npm install css-css-react-seamless-scroll --save
  ```

- `Yarn`

  ```shell
  yarn add css-css-react-seamless-scroll
  ```

## 组件配置

- `scrollSwitch`

  > 手动控制滚动状态，默认开始滚动

  ```json
    type: Boolean,
    default: true,
    required: false
  ```
- `step`

  > 步进速度，对于js版本值越大速度越快

  ```json
    type: Number,
    required: false
  ```

- `hover`

  > 是否开启鼠标悬停

  ```json
    type: Boolean,
    default: false,
    required: false
  ```

- `direction`

  > 控制滚动方向，可选值`up`，`down`，`left`，`right`

  ```json
    type: String,
    default: "up",
    required: false
  ```

### [js版 特有参数配置文档](docs/jsSeamlessScroll.md)

### [原生css3动画 特有参数组件配置文档](docs/cssSeamlessScroll.md)

## 注意项

> 当使用原生css3动画滚动组件时，单步滚动控制需要`duration`与`step`两个参数协调使用

> 需要滚动的列表所在容器必须设置样式 `overflow: hidden`;

## 使用

```js
import React, { Component } from "react";
import { CssSeamlessScroll, JsSeamlessScroll } from "css-react-seamless-scroll";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollSwitch: false,
      datas: [
        {
          title: "React 无缝滚动组件展示数据第1条",
          date: Date.now(),
        },
        {
          title: "React 无缝滚动组件展示数据第2条",
          date: Date.now(),
        },
        {
          title: "React 无缝滚动组件展示数据第3条",
          date: Date.now(),
        },
        {
          title: "React 无缝滚动组件展示数据第4条",
          date: Date.now(),
        },
        {
          title: "React 无缝滚动组件展示数据第5条",
          date: Date.now(),
        },
        {
          title: "React 无缝滚动组件展示数据第6条",
          date: Date.now(),
        },
        {
          title: "React 无缝滚动组件展示数据第7条",
          date: Date.now(),
        },
        {
          title: "React 无缝滚动组件展示数据第8条",
          date: Date.now(),
        },
        {
          title: "React 无缝滚动组件展示数据第9条",
          date: Date.now(),
        },
      ]
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        scrollSwitch: !this.state.scrollSwitch
      })
    }, 3000);
  }
  render() {
    return (
      <div>
        <div className="scroll">
          <div>JS版 默认配置</div>
          <JsSeamlessScroll datas={this.state.datas} scrollSwitch={this.state.scrollSwitch}>
            {
              this.state.datas.map(data => <div className="item" key={data.title}>
                <span>{data.title}</span>
                <span>{data.date}</span>
              </div>)
            }
          </JsSeamlessScroll>
        </div>
        <div className="scroll">
          <div>JS版 默认配置</div>
          <CssSeamlessScroll datas={this.state.datas} scrollSwitch={this.state.scrollSwitch}>
            {
              this.state.datas.map(data => <div className="item" key={data.title}>
                <span>{data.title}</span>
                <span>{data.date}</span>
              </div>)
            }
          </CssSeamlessScroll>
        </div>
      </div>
    )
  }
}
export default Example;
```

```html
<style>
.scroll {
  display: inline-block;
  height: 290px;
  width: 390px;
  margin: 0 25px;
  overflow: hidden;
  position: relative;
}
.scroll > div:first-child {
  font-weight: bold;
  color: red;
  text-align: center;
}

.scroll > div:last-child {
  margin-top: 15px;
  height: 260px;
  overflow: hidden;
}

.scroll .item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 0;
}
</style>
```
