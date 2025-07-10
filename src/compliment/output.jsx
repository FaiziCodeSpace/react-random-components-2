import Users from "./user"

function Boards(){
    const users = [
        {
      id: "1",
      name: "John",
      age: 21,
      lastName: "khan",
    },
    {
      id: "2",
      name: "Lizabeth",
      age: 18,
      lastName: "khan",
    },
    {
      id: "3",
      name: "Willam",
      age: 13,
      lastName: "Fatima",
    },
    {
      id: "4",
      name: "Peter",
      age: 41,
      lastName: "khalid",
    }
    ]
    return(
        <div>
            <Users input={users}/>
        </div>
    )
}
export default Boards;