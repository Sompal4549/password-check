import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
export default class InfiniteScroller extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      hasMore: true,
    };
  }
  componentDidMount() {
    this.fetchData(1);
  }
  fetchData = (page) => {
    const newItems = [];
    for (let i = 0; i < 1000; i++) {
      newItems.push(i);
    }
    if (page === 100) {
      this.setState({ hasMore: false });
    }
    this.setState({ items: [...this.state.items, ...newItems] });
  };
  render() {
    return (
      <div>
        <h1>Infinite Scroll</h1>
        <p>You can't reach to the bottom</p>
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {this.state.items.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}
