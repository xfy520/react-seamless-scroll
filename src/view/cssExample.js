import React, { Component } from "react";
import * as echarts from "echarts";

import { CssSeamlessScroll } from "css-react-seamless-scroll";

import "./style.css";

class cssExample extends Component {
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
      ],
      datas1: [
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
      ],
      datas2: [
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
      ],
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
      },
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        scrollSwitch: !this.state.scrollSwitch
      })
    }, 3000);
    const t1 = setInterval(() => {
      this.state.datas1[1].title = `我是第2条更新数据-${Date.now()}`;
      this.state.datas1[5].title = `我是第6条更新数据-${Date.now()}`;
      this.state.datas1[7].title = `我是第8条更新数据-${Date.now()}`;
      this.setState({
        datas1: this.state.datas1,
      }, function () {
        this.refs.datas1.reset();
      });
    }, 3000);

    const t2 = setInterval(() => {
      this.state.datas2.push({
        title: "我是新增的一条数据" + Date.now(),
        date: Date.now(),
      });
      this.setState({
        datas2: this.state.datas2,
      }, function () {
        this.refs.datas2.reset();
      });
    }, 3000);

    setTimeout(() => {
      clearInterval(t1);
      clearInterval(t2);
    }, 15000);

    setTimeout(() => {
      const charts = document.querySelectorAll(".css_chart");
      for (let index = 0; index < charts.length; index++) {
        const element = charts[index];
        echarts.init(element).setOption(this.state.chartOptions);
      }
      this.refs.echart.reset();
    }, 2000);
  }

  render() {
    return (
      <div style={{ margin: "10px 0" }}>
        <div className="scroll">
          <div>CSS3版 默认配置</div>
          <CssSeamlessScroll datas={this.state.datas} scrollSwitch={this.state.scrollSwitch}>
            {
              this.state.datas.map(data => <div className="item" key={data.title}>
                <span>{data.title}</span>
                <span>{data.date}</span>
              </div>)
            }
          </CssSeamlessScroll>
        </div>

        <div className="scroll">
          <div>CSS3版 向下滚动</div>
          <CssSeamlessScroll datas={this.state.datas} direction="down">
            {
              this.state.datas.map(data => <div className="item" key={data.title}>
                <span>{data.title}</span>
                <span>{data.date}</span>
              </div>)
            }
          </CssSeamlessScroll>
        </div>

        <div className="scroll">
          <div>CSS3版 向左滚动</div>
          <CssSeamlessScroll datas={this.state.datas} direction="left">
            {
              this.state.datas.map(data => <div className="item" key={data.title}>
                <span>{data.title}</span>
                <span>{data.date}</span>
              </div>)
            }
          </CssSeamlessScroll>
        </div >

        <div className="scroll">
          <div>CSS3版 滚动速度</div>
          <CssSeamlessScroll datas={this.state.datas} duration={2}>
            {
              this.state.datas.map(data => <div className="item" key={data.title}>
                <span>{data.title}</span>
                <span>{data.date}</span>
              </div>)
            }
          </CssSeamlessScroll >
        </div >

        <div className="scroll">
          <div>CSS3版 鼠标悬停</div>
          <CssSeamlessScroll datas={this.state.datas} hover>
            {
              this.state.datas.map(data => <div className="item" key={data.title}>
                <span>{data.title}</span>
                <span>{data.date}</span>
              </div>)
            }
          </CssSeamlessScroll >
        </div >

        <div className="scroll">
          <div>CSS3版 单步停顿</div>
          <CssSeamlessScroll datas={this.state.datas} duration={30} step={9}>
            {
              this.state.datas.map(data => <div className="item" key={data.title}>
                <span>{data.title}</span>
                <span>{data.date}</span>
              </div>)
            }
          </CssSeamlessScroll >
        </div >

        <div className="scroll">
          <div>CSS3版 单行停顿时间</div>
          <CssSeamlessScroll datas={this.state.datas} duration={60} step={9}>
            {
              this.state.datas.map(data => <div className="item" key={data.title}>
                <span>{data.title}</span>
                <span>{data.date}</span>
              </div>)
            }
          </CssSeamlessScroll >
        </div >

        <div className="scroll">
          <div>CSS3版 数组属性更新</div>
          <CssSeamlessScroll ref="datas1" datas={this.state.datas1}>
            {
              this.state.datas1.map(data => <div className="item" key={data.title}>
                <span>{data.title}</span>
                <span>{data.date}</span>
              </div>)
            }
          </CssSeamlessScroll>
        </div>

        <div className="scroll">
          <div>CSS3版 数组添加数据</div>
          <CssSeamlessScroll ref="datas2" datas={this.state.datas2}>
            {
              this.state.datas2.map(data => <div className="item" key={data.title}>
                <span>{data.title}</span>
                <span>{data.date}</span>
              </div>)
            }
          </CssSeamlessScroll>
        </div>

        <div className="scroll">
          <div>CSS3版 echart图表</div>
          <CssSeamlessScroll datas={[1, 2, 3]} ref="echart">
            {
              [1, 2, 3].map(num => <div className="css_chart" style={{ width: "360px", height: "200px" }} key={num}>
              </div>)
            }
          </CssSeamlessScroll>
        </div>

      </div >
    )
  }
}

export default cssExample;
