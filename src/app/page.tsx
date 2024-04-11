import Header from "./Header";
import SideBar from "./SideBar";
import Body from "./Body";

export default function Home(): JSX.Element {
  return (
    <div
      className="flex flex-col h-full lg:h-screen gap-5 lg:overflow-hidden overflow-auto"
      style={{
        backgroundColor: "#F6F4F5",
      }}
    >
      <Header />
      <div className="flex lg:flex-row flex-col mx-5 lg:mx-16 gap-5 h-5/6">
        <SideBar />
        <Body />
      </div>
    </div>
  );
}
