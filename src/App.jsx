import Avtar from "./Avtar";
import TodoList from "./TodoList";
import Box from "./Box";
import img from "./images/car1.webp";
import img2 from "./images/car2.webp";
import img3 from "./images/img2.jpg";
import img4 from "./images/iron.jpg";




export default function App() {
  return (
    <>

      {/* <Avtar/> */}
      {/* <TodoList/> */}

      <div className="flex p-10">
        <>
          <Box title="box1" img={img} content="this is paragraph 1 out of 4" />
          <Box title="box2" img={img2} content="this is paragraph 2 out of 4" />
          <Box title="box3" img={img3} content="this is paragraph 3 out of 4" />
          <Box title="box4" img={img4} content="this is paragraph 4 out of 4" />
        </>
      </div>

    </>
  )
}