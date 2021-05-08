import useUser from "../hooks/use-user";

export default function Sidebar(){
  // const {
  //   user: { fullName, username, userId}
  // } = useUser()
  const x = useUser()
  console.log(x)

  return (
    <p>I'm sidebar</p>
  )
}