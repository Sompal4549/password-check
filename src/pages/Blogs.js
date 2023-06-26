import React, { useEffect, useState } from "react";
import PostAnother from "../components/post/PostAnother";
import CreatePost from "../components/post/PostMethod";
import LearnMemo from "../components/meMo/LearnMemo";
import SlickSlider from "../components/Slider/SlickSlider";
const Blogs = () => {
  class Car extends React.Component {
    constructor(props) {
      super(props);
      this.state = { color: "red" };
    }
    render() {
      return (
        <>
          <h2> Hi, I am a {this.state.color} Car!</h2>
          <p>I wish, I would have {this.props.jetColor} jet plane</p>
          <h2>Props in the Constructor</h2>
          <p>
            If your component has a constructor function, the props should
            always be passed to the constructor and also to the React.Component
            via the super() method.
          </p>
          <h2>I have a {this.props.model}!</h2>
        </>
      );
    }
  }
  const [posts, setposts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((response) => response.json())
      .then((data) => setposts(data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <>
      <div>
      <LearnMemo/>
        <Car model="Fortuner" jetColor={"black"} />
        <PostAnother posts={posts} />
        <h1>Blogs section to be built</h1>
        <p>Blog section of this page</p>
        <h2>React Class Component</h2>
        <p>
          Before React 16.8 class component were the only way to track state and
          lifecycle on a REact component. Function components were considered
          "state-less"
        </p>
        <p>
          With the addition of Hooks, Function components are now almost
          equivalent to class components. The differences are so minor that you
          will probably never need to use a class component in React.
        </p>
        <p>
          Even thought Function components are preferred there are not current
          plans on removing class components from React.
        </p>
        <p>
          This section will give you an overview of how to use class components
          in React.
        </p>
        <h3>Example</h3>
        <p>Create a class component called Car</p>
        {/* class car extends React.Component {
          render(){
            return <h2>
              Hi, I am a Car!
            </h2>
          }
        } */}
        <CreatePost />
      </div>
    </>
  );
};
export default Blogs;
