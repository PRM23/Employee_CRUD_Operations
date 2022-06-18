import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function ListEmp() {
  let ls = [];
  // const data = JSON.parse(localStorage.getItem("data")) || [];
  const data = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [];
  const [value, setValue] = useState(data);
  const { id } = useParams();

  const navigate = useNavigate();

  const DeleteHandler = (id) => {
    const remove = value?.filter((a, i) => i !== id);
    console.log(value);
    setValue(remove);
    localStorage.setItem("data", JSON.stringify(remove));
  };

  console.log(data[0]?.opt[0].duration);

  return (
    <>
      <div class="container my-4">
        <main>
          <div class="py-5">
            <h2>
              Candidates List
              <button
                class="btn btn-primary float-end"
                onClick={() => navigate("/addemployee")}
              >
                Add Candidate
              </button>
            </h2>
          </div>

          <div class="row">
            <div class="col-12 ms-auto me-auto">
              <div class="card">
                <div class="card-body">
                  <table class="table">
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Number of Skills</th>
                      <th>Total Work Experience (in months)</th>
                      <th>Actions</th>
                    </tr>
                    {data.map((a, i) => {
                      return (
                        <>
                          <tr>
                            <td>{i + 1}</td>
                            <td>{a.name}</td>
                            <td>{a.email}</td>
                            <td>{a.checkSkills.length}</td>

                            <td>{a.opt.length}</td>

                            <td>
                              <a onClick={() => navigate(`/edit/${i}`)}>Edit</a>
                              <a
                                onClick={() => DeleteHandler(i)}
                                className="text-danger ms-2"
                              >
                                Delete
                              </a>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default ListEmp;
