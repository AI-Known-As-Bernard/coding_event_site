import Image from "next/image";
import ProfileProjectList from "./components/ProfileProjectList";
import Header from "./components/Header";

export default function Home() {
  return (
  <div className="flex flex-col bg-gray-600">
    <Header title="Student Project List"/>
    <ProfileProjectList />
    
  </div>
  );
}
