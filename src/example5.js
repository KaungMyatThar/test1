import React from "react";
import ReactDOM from "react-dom/client";

const TableExample = () => {
    const tableData = [
      {student_id:"001",student_name:"MgMg",gender:"Male",age:"23",grade:"3",homeTown:"Yangon",JapaneseSkill:"N3",fatherName:"U Kyaw"},
      {student_id:"002",student_name:"MaMa",gender:"Female",age:"20",grade:"3",homeTown:"Mandalay",JapaneseSkill:"N2",fatherName:"U Tun"},
      {student_id:"003",student_name:"KoKo",gender:"Male",age:"22",grade:"3",homeTown:"Bago",JapaneseSkill:"N4",fatherName:"U Khant"},
      {student_id:"004",student_name:"YuYu",gender:"Female",age:"18",grade:"3",homeTown:"Saging",JapaneseSkill:"N3",fatherName:"U Htoo"},
    ]

      return (
        <>
          <table>
            <thead style={{backgroundColor: "#9ca13c"}}>
              <tr>
                <th style={{border: "1px solid"}} scope="col">
                  <label style={{color: "white"}}>No</label>
                </th>
                <th style={{border: "1px solid"}} scope="col">
                  <label style={{color: "white"}}>Id</label>
                </th>
                <th style={{border: "1px solid"}} scope="col">
                  <label style={{color: "white"}}>Name</label>
                </th>
                <th style={{border: "1px solid"}} scope="col">
                  <label style={{color: "white"}}>Gender</label>
                </th>
                <th style={{border: "1px solid"}} scope="col">
                  <label style={{color: "white"}}>Age</label>
                </th>
                <th style={{border: "1px solid"}} scope="col">
                  <label style={{color: "white"}}>Grade</label>
                </th>
                <th style={{border: "1px solid"}} scope="col">
                  <label style={{color: "white"}}>Hometown</label>
                </th>
                <th style={{border: "1px solid"}} scope="col">
                  <label style={{color: "white"}}>Japanese Skill</label>
                </th>
                <th style={{border: "1px solid"}} scope="col">
                  <label style={{color: "white"}}>Father Name</label>
                </th>
                <th style={{border: "1px solid"}} scope="col" colSpan="3">
                  <label style={{color: "white"}}>Action</label>
                </th>
              </tr>
            </thead>

            <tbody>
              {tableData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td style={{border: "1px solid"}}>{index + 1}</td>
                    <td style={{border: "1px solid"}}>{data.student_id}</td>
                    <td style={{border: "1px solid"}}>{data.student_name}</td>
                    <td style={{border: "1px solid"}}>{data.gender}</td>
                    <td style={{border: "1px solid"}}>{data.age}</td>
                    <td style={{border: "1px solid"}}>{data.grade}</td>
                    <td style={{border: "1px solid"}}>{data.homeTown}</td>
                    <td style={{border: "1px solid"}}>{data.JapaneseSkill}</td>
                    <td style={{border: "1px solid"}}>{data.fatherName}</td>
                    <td style={{border: "1px solid"}}>Edit</td>
                    <td style={{border: "1px solid", color: "red"}}>Delete</td>
                    <td style={{border: "1px solid"}}>View</td>
                  </tr>
                )
              })}
            </tbody>

          </table>
        </>
      )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<TableExample/>)