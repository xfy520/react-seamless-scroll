# Js 滚动配置参数

- `singleHeight`

  > 单步运动停止的高度

  ```json
    type: Number,
    default: 0,
    required: false
  ```

- `singleWidth`

  > 单步运动停止的宽度

  ```json
    type: Number,
    default: 0,
    required: false
  ```

- `singleWaitTime`

  > 单步停止等待时间(默认值 1000ms)

  ```json
    type: Number,
    default: 1000,
    required: false
  ```

- `isRemUnit`

  > singleHeight and singleWidth 是否开启 rem 度量

  ```json
    type: Boolean,
    default: true,
    required: false
  ```

- `delay`

  > 动画延时时间

  ```json
    type: Number,
    default: 0,
    required: false
  ```

- `ease`

  > css3动画效果

  ```json
    type: String,
    default: "ease-in",
    required: false
  ```

# 示例

## 以下示例统一样式

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

## 默认配置

```js
import React, { Component } from "react";
import { JsSeamlessScroll } from "css-react-seamless-scroll";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  render() {
    return (
      <div className="scroll">
        <div>Js版 默认配置</div>
        <JsSeamlessScroll datas={this.state.datas}>
          {
            this.state.datas.map(data => <div className="item" key={data.title}>
              <span>{data.title}</span>
              <span>{data.date}</span>
            </div>)
          }
        </JsSeamlessScroll>
      </div>
    )
  }
}
export default Example;
```

![image](gif/JS版%20默认配置%2000_00_00-00_00_30.gif))

## 向下滚动

```js
import React, { Component } from "react";
import { JsSeamlessScroll } from "css-react-seamless-scroll";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  render() {
    return (
      <div className="scroll">
        <div>Js版 向下滚动</div>
        <JsSeamlessScroll datas={this.state.datas} direction="down">
          {
            this.state.datas.map(data => <div className="item" key={data.title}>
              <span>{data.title}</span>
              <span>{data.date}</span>
            </div>)
          }
        </JsSeamlessScroll>
      </div>
    )
  }
}
export default Example;
```

![image](gif/JS版%20向下滚动%2000_00_00-00_00_30.gif)

## 向左滚动

```js
import React, { Component } from "react";
import { JsSeamlessScroll } from "css-react-seamless-scroll";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  render() {
    return (
      <div className="scroll">
        <div>Js版 向左滚动</div>
        <JsSeamlessScroll datas={this.state.datas} direction="left">
          {
            this.state.datas.map(data => <div className="item" key={data.title}>
              <span>{data.title}</span>
              <span>{data.date}</span>
            </div>)
          }
        </JsSeamlessScroll>
      </div>
    )
  }
}
export default Example;
```

![image](gif/JS版%20向左滚动%2000_00_00-00_00_30.gif)

## 滚动速度

```js
import React, { Component } from "react";
import { JsSeamlessScroll } from "css-react-seamless-scroll";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  render() {
    return (
      <div className="scroll">
        <div>Js版 滚动速度</div>
        <JsSeamlessScroll datas={this.state.datas} step={3}>
          {
            this.state.datas.map(data => <div className="item" key={data.title}>
              <span>{data.title}</span>
              <span>{data.date}</span>
            </div>)
          }
        </JsSeamlessScroll>
      </div>
    )
  }
}
export default Example;
```

![image](gif/JS版%20滚动速度%2000_00_00-00_00_30.gif)

## 鼠标悬停

```js
import React, { Component } from "react";
import { JsSeamlessScroll } from "css-react-seamless-scroll";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  render() {
    return (
      <div className="scroll">
        <div>Js版 鼠标悬停</div>
        <JsSeamlessScroll datas={this.state.datas} hover>
          {
            this.state.datas.map(data => <div className="item" key={data.title}>
              <span>{data.title}</span>
              <span>{data.date}</span>
            </div>)
          }
        </JsSeamlessScroll>
      </div>
    )
  }
}
export default Example;
```

![image](gif/JS版%20鼠标悬停%2000_00_00-00_00_30.gif)

## 单步停顿

```js
import React, { Component } from "react";
import { JsSeamlessScroll } from "css-react-seamless-scroll";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  render() {
    return (
      <div className="scroll">
        <div>Js版 单步停顿</div>
        <JsSeamlessScroll datas={this.state.datas} singleHeight={35}>
          {
            this.state.datas.map(data => <div className="item" key={data.title}>
              <span>{data.title}</span>
              <span>{data.date}</span>
            </div>)
          }
        </JsSeamlessScroll>
      </div>
    )
  }
}
export default Example;
```

![image](gif/JS版%20单步停顿%2000_00_00-00_00_30.gif)

## 单行停顿时间

```js
import React, { Component } from "react";
import { JsSeamlessScroll } from "css-react-seamless-scroll";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  render() {
    return (
      <div className="scroll">
        <div>Js版 单行停顿时间</div>
        <JsSeamlessScroll datas={this.state.datas} singleHeight={35} singleWaitTime={3000}>
          {
            this.state.datas.map(data => <div className="item" key={data.title}>
              <span>{data.title}</span>
              <span>{data.date}</span>
            </div>)
          }
        </JsSeamlessScroll>
      </div>
    )
  }
}
export default Example;
```

![image](gif/JS版%20单步停顿%2000_00_00-00_00_30.gif)

## 数组属性更新

```js
import React, { Component } from "react";
import { JsSeamlessScroll } from "css-react-seamless-scroll";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      this.state.datas[1].title = `我是第2条更新数据-${Date.now()}`;
      this.state.datas[5].title = `我是第6条更新数据-${Date.now()}`;
      this.state.datas[7].title = `我是第8条更新数据-${Date.now()}`;
      this.setState({
        datas: this.state.datas,
      }, function () {
        this.refs.datas.reset();
      });
    }, 1000);
  }
  render() {
    return (
      <div className="scroll">
        <div>Js版 数组属性更新</div>
        <JsSeamlessScroll datas={this.state.datas} ref="datas">
          {
            this.state.datas.map(data => <div className="item" key={data.title}>
              <span>{data.title}</span>
              <span>{data.date}</span>
            </div>)
          }
        </JsSeamlessScroll>
      </div>
    )
  }
}
export default Example;
```

![image](gif/JS版%20数组属性更新%2000_00_00-00_00_30.gif)

## 数组添加数据

```js
import React, { Component } from "react";
import { JsSeamlessScroll } from "css-react-seamless-scroll";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const timer = setInterval(() => {
      this.state.datas.push({
        title: "我是新增的一条数据" + Date.now(),
        date: Date.now(),
      });
      this.setState({
        datas: this.state.datas,
      }, function () {
        this.refs.datas.reset();
      });
    }, 3000);

    setTimeout(() => {
      clearInterval(timer);
    }, 15000);
  }
  render() {
    return (
      <div className="scroll">
        <div>Js版 默认配置</div>
        <JsSeamlessScroll datas={this.state.datas} ref="datas">
          {
            this.state.datas.map(data => <div className="item" key={data.title}>
              <span>{data.title}</span>
              <span>{data.date}</span>
            </div>)
          }
        </JsSeamlessScroll>
      </div>
    )
  }
}
export default Example;
```

![image](gif/JS版%20数组添加数据%2000_00_00-00_00_30.gif)

## echart图表

```js
import React, { Component } from "react";
import { JsSeamlessScroll } from "css-react-seamless-scroll";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartOptions: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      }
    }
  }
  componentDidMount() {
    setTimeout(() => {
      const charts = document.querySelectorAll(".css_chart");
      for (let index = 0; index < charts.length; index++) {
        const element = charts[index];
        echarts.init(element).setOption(this.state.chartOptions);
      }
      this.refs.echart.reset();
    }, 0);
  }
  render() {
    return (
      <div className="scroll">
        <div>Js版 echart图表</div>
        <JsSeamlessScroll datas={[1, 2, 3]} ref="echart">
            {
              [1, 2, 3].map(num => <div className="css_chart" style={{ width: "360px", height: "200px" }} key={num}>
              </div>)
            }
          </JsSeamlessScroll>
      </div>
    )
  }
}
export default Example;
```

![image](gif/JS版%20echart图表%2000_00_00-00_00_30.gif)
