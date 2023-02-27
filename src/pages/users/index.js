
import Link from 'next/link'
import users from './/../api/users.json'

function Users(){
  return(
    <>
    <h1>Users  page</h1>
    {
      users.map((user) => {
      return(
        <div key={user.id}>
          <strong><span>name:</span>{user.name}</strong>
          <p><span>email:</span>{user.email}</p>
          <p><span>username:</span>{user.username}</p>
        </div>
        )
      })
      
    }
    </>
    )
}
export default Users


//using api
// function Users({ users }){
//   return(
//     <>
//     <h1>Users  page</h1>
//     {users.map((user) => {
//       return(
//         <div key={user.id}>
//           <p>{user.id}</p>
//           <p>{user.name}</p>
//           <p>{user.username}</p>
//           <p>{user.email}</p>
//         </div>
//         )
//       })}
//     </>
//     )
// }
// export default Users

// export async function getStaticProps(){
//   const url = "https://jsonplaceholder.typicode.com/users"
//   const response = await fetch("https://jsonplaceholder.typicode.com/users")
//   const data = await response.json()
//   console.log(data)
  
//   return {
//     props: {
//       users: data,
//     },
//   }
// }