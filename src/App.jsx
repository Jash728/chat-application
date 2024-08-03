import Chat from "./components/chat/Chat"
import Detail from "./components/detail/Detail"
import List from "./components/list/List"

const App = () => {
  return (
    <div className="w-[80vw] h-[90vh] bg-[rgba(17,25,40,0.75)] backdrop-blur-[19px] backdrop-saturate-[180%] rounded-[12px] border border-[rgba(255,255,255,0.125)] flex ">

      <List />
      <Chat/>
      <Detail/>

    </div>
  )
}

export default App