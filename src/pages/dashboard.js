import {useEffect} from "react";
import Header from "../components/Header";
import Timeline from "../components/timeline";
import Sidebar from "../components/sidebar";

export default function Dashboard() {
  useEffect(() => {
    document.title = "Instagram"
  }, [])

  return (
    <div className="bg-gray-background">
      {/* eslint-disable-next-line react/jsx-no-undef */}
      <Header></Header>
      <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg ">
        <Timeline></Timeline>
        <Sidebar></Sidebar>
      </div>

    </div>
  )
}