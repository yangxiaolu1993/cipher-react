import React, { Component } from "react";

class IndexUI extends Component {
  render() {
    return (
      <div className="homePage">
        <div className="banner">
          <div className="energyToday">
            <div className="energyTodayNum">9</div>
            <div className="energyTodayTitle">点击获取能量</div>
          </div>
          <div className="circle">
            <img src={require("../../static/img/home_earth.png")} alt="" />
          </div>
        </div>
        {/* 查密码、测关系、身份卡 */}
        <div className="baseMenu">
          <div className="baseMenuItem">
            <img src={require("../../static/img/home_icon1.png")} alt="" />
            <p>密码解读</p>
          </div>
          <div className="baseMenuItem">
            <img src={require("../../static/img/home_icon2.png")} alt="" />
            <p>关系匹配</p>
          </div>
          <div className="baseMenuItem">
            <img src={require("../../static/img/home_icon3.png")} alt="" />
            <p>查令十字架</p>
          </div>
        </div>

        {/* 财运指南 */}
        <div className="fortune">
          <div className="fortuneTitle">2019新年财运解码专题</div>
          <div className="fortuneMain">
            {this.props.fortune.map(item => {
              return (
                <div className="fortuneItem" key={item.id}>
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
        {/* 深度报告 */}
        <div className="depth">
          <div className="depthTitle">
            <img
              src={require("../../static/img/home_report_icon.png")}
              alt=""
            />
            深度报告
          </div>
          <div className="depthMain">
            <div className="depthItemIcon">
              <img src={require("../../static/img/home_deep1.png")} alt="" />
            </div>
            <div className="depthItemContent">
              <div className="depthItemTitle">
                恋人相处指南
                <img
                  src={require("../../static/img/single_arrow_icon.png")}
                  alt=""
                />
              </div>
              <div className="depthItemDesc">depth</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexUI;
