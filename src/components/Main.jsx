import React, { useState } from "react";

function Main() {


  const [input, setInput] = useState("");
  const [arr, setArr] = useState([]);
  const [id,setId]= useState(null)
  const [toggle,seToggle] = useState(false)

  const addhandle = (e) => {
    e.preventDefault();
      if(!input){
        alert("plz write something")
      }else if(id!=null){
        setArr(
          arr.map((elem,index)=>{
            if(id===index){
              return [...elem,input]
              
            }
            return elem;
          })
        )
        setId(null)
        seToggle(false)
      }else{
        setArr([...arr, input]);
      }
      setInput("");
    
  };


  const edit = (i) => {
    setId(i)
    setInput(arr[i])
    seToggle(true)
  };

  const remove = (i) => {
   setArr(
    arr.filter((element , index)=>{
      return index !== i;
    })
   
   )
  };

  return (
    <>
      <div className="container-fluid bg-primary pt-5">
        <div className="container">
          <div className="col-xs-12 col-md-12 col-sm-12 col-lg-6 m-auto">
            <div className="todo m-auto bg-light">
              <div className="inputcontainer p-3">
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Enter Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputname"
                      aria-describedby="emailHelp"
                      placeholder="enter name"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      autoComplete="off"
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={addhandle}
                    className="btn btn-primary"
                  >
                    {
                      toggle? "Edit":"Add"
                    }
                  </button>
                </form>
              </div>
              <div className="showcontainer p-3">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Serial no.</th>
                      <th scope="col">Name</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {arr.map((e, i) => {
                      return (
                        <tr key={i}>
                          <th scope="row">{i + 1}</th>
                          <td>{e}</td>
                          <td>
                            <i
                              className="fa-solid fa-pen-to-square text-primary fs-3 mx-2"
                              onClick={()=>edit(i)}
                            ></i>
                            <i
                              className="fa-solid fa-trash-can mx-2 text-danger fs-3"
                              onClick={() => remove(i)}
                            ></i>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
