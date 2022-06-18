import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEmp() {
  const data = JSON.parse(localStorage.getItem("data")) || [];
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [addr, setAddr] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  const [checkSkills, setCheckSkills] = useState([]);
  // const [desc, setDesc] = useState("");
  // const [duration, setDuration] = useState(0);
  // const [compName, setCompanyName] = useState("");

  const [cnt, setCnt] = useState(0);
  const [opt, setOpt] = useState([
    {
      compName: "",
      duration: "",
      desc: "",
    },
    {
      compName: "",
      duration: "",
      desc: "",
    },
  ]);

  const [addData, setAddData] = useState([]);
  const [exp, setExp] = useState([]);
  const navigate = useNavigate();
  let temp = [];
  let add = "";

  const SubmitHandler = () => {
    // if(checkSkills.length<3){
    //   alert("you have to select min 3 skills!")
    // }
    if (!email || !firstname || !lastname || !gender || !addr) {
    } else {
      add = {
        checkSkills: checkSkills,
        addr: addr,
        country: country,
        cnt: cnt,
        state: state,
        pin: pin,
        opt: opt,
        name: firstname,
        lastname: lastname,
        gender: gender,
        email: email,
      };
      const data = localStorage.getItem("data")
        ? JSON.parse(localStorage.getItem("data"))
        : [];
      data.push(add);
      console.log(data);

      localStorage.setItem("data", JSON.stringify(data));
      navigate("/");
    }
  };

  const CheckHandler = (e) => {
    // setCheckSkills(e.target.value);

    let value = e.target.value;
    console.log(value);

    if (e.target.checked) {
      checkSkills.push(value);
      setCheckSkills([...checkSkills]);
    } else {
      const remove = checkSkills?.filter((i) => i !== e.target.value);
      console.log(remove);
      //setCheckSkills(remove)
      //localStorage.setItem("data", JSON.stringify(remove));
    }
  };

  const RemoveHandler = (id) => {
    let remove = opt.filter((a, i) => i !== id);
    if(opt.length<2){
      alert("you have to add min 2 exp!")
    }
    console.log(remove);
    setOpt(remove);
  };

  const OptionHandler = () => {
  
      const gfg = opt.push({
        compName: "",
        duration: "",
        desc: "",
      });

      console.log(cnt);
    
    setCnt(cnt + 1);
    
    // setOpt((prev) => [...prev, cnt]);
  };
  console.log(opt);
  return (
    <>
      <div class="container my-4">
        <main>
          <div class="py-5 text-center">
            <h2>Add Candidate</h2>
          </div>
          <form class="was-validated">
            <div class="row g-5">
              <div class="col-md-7 col-lg-8 ms-auto me-auto">
                <h4 class="mb-3">Basic Info</h4>
                <div class="row g-3">
                  <div class="col-sm-6">
                    <label for="validationCustom01" class="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      value={firstname}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">
                      Please fill out this field.
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <label for="validationCustom01" class="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      required
                      value={lastname}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">
                      Please fill out this field.
                    </div>
                  </div>

                  <div
                    class="col-12"
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <label class="form-label">Gender</label>
                    <div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          name="Male"
                          value="Male"
                          type="radio"
                          checked={gender === "Male"}
                          required
                        />
                        <label
                          for="validationCustom01"
                          class="form-check-label"
                        >
                          Male
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          name="Female"
                          type="radio"
                          value="Female"
                          checked={gender === "Female"}
                          required
                        />
                        <label class="form-check-label">Female</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          name="gender"
                          value="Other"
                          defaultValue={gender==="Other"}
                          type="radio"
                          required
                        />
                        <label class="form-check-label">Other</label>
                      </div>
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="validationCustom01" class="form-label">
                      Email
                    </label>
                    <input
                      id="validationDefaultUsername"
                      aria-describedby="inputGroupPrepend21"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      class="form-control"
                      placeholder="you@example.com"
                    />
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">
                      Please fill out this field.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="validationCustom01" class="form-label">
                      Address
                    </label>
                    <textarea
                      value={addr}
                      onChange={(e) => setAddr(e.target.value)}
                      class="form-control"
                      placeholder="1234 Main St"
                      required
                    ></textarea>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">
                      Please fill out this field.
                    </div>
                  </div>

                  <div class="col-md-5">
                    <label for="validationCustom01" class="form-label">
                      Country
                    </label>
                    <select
                      class="form-select"
                      required
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      <option>Choose...</option>
                      <option>India</option>
                      <option>United States</option>
                      <option>UAE</option>
                      <option>Austrellia</option>
                    </select>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">
                      Please fill out this field.
                    </div>
                  </div>

                  <div class="col-md-4">
                    <label class="form-label">State</label>
                    <select
                      class="form-select"
                      required
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    >
                      <option value="">Choose...</option>
                      <option>Maharashtra</option>
                      <option>Karnataka</option>
                      <option>Andhra Pradesh</option>
                    </select>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">
                      Please fill out this field.
                    </div>
                  </div>

                  <div class="col-md-3">
                    <label class="form-label">Pin / Zip</label>
                    <input
                      type="text"
                      class="form-control"
                      required
                      value={pin}
                      onChange={(e) => setPin(e.target.value)}
                    />
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">
                      Please fill out this field.
                    </div>
                  </div>
                </div>

                <hr class="my-4"></hr>

                <h4 class="mb-3">Professional Info</h4>

                <div class="row g-3">
                  <div class="col-12">
                    <label class="form-label">
                      Choose your skills
                      <span class="small text-muted">(min 3 skills)</span>
                    </label>

                    <div class="mb-3">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          value="Angular"
                          type="checkbox"
                          checked={checkSkills[0] == "Angular"}
                          onChange={CheckHandler}
                          required
                        />
                        <label class="form-check-label">Angular</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          value="React"
                          type="checkbox"
                          checked={checkSkills[1] == "React"}
                          onChange={CheckHandler}
                          required
                        />
                        <label class="form-check-label">React</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          value="Node.JS"
                          type="checkbox"
                          checked={checkSkills[2] == "Node.JS"}
                          onChange={CheckHandler}
                          required
                        />
                        <label class="form-check-label">Node.JS</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          value="JavaScript"
                          type="checkbox"
                          checked={checkSkills[3] == "JavaScript"}
                          onChange={CheckHandler}
                          required
                        />
                        <label class="form-check-label">JavaScript</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          value="Flutter"
                          type="checkbox"
                          checked={checkSkills[4] == "Flutter"}
                          onChange={CheckHandler}
                          required
                        />
                        <label class="form-check-label">Flutter</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          value="Java"
                          type="checkbox"
                          checked={checkSkills[5] == "Java"}
                          onChange={CheckHandler}
                          required
                        />
                        <label class="form-check-label">Java</label>
                      </div>
                      <div class="valid-feedback">Valid.</div>
                      <div class="invalid-feedback">
                        Please fill out this field.
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row gy-3">
                  <div class="col-12">
                    <label class="form-label">
                      <strong>
                        Experience
                        <span class="small text-muted">
                          (min 2, max 5 items)
                        </span>
                      </strong>
                    </label>

                    {opt.map((a, i) => {
                      console.log(a.compName);
                      return (
                        <>
                          <div class="card mx-3 mt-3">
                            <div class="card-body">
                              <h6 class="card-title text-muted mb-3">
                                Experience {i + 1}
                                <a
                                  class="float-end text-danger fw-normal"
                                  onClick={() => RemoveHandler(i)}
                                >
                                  Remove
                                </a>
                              </h6>
                              <div class="row g-3">
                                <div class="col-6">
                                  <label class="form-label">Company Name</label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    required
                                    onChange={(e) => {
                                      temp = opt;
                                      temp[i].compName = e.target.value;
                                      setOpt(temp);
                                    }}
                                  />
                                  <div class="valid-feedback">Valid.</div>
                                  <div class="invalid-feedback">
                                    Please fill out this field.
                                  </div>
                                </div>
                                <div class="col-6">
                                  <label class="form-label">
                                    Duration{" "}
                                    <span class="text-muted">(in months)</span>
                                  </label>
                                  <input
                                    type="number"
                                    class="form-control"
                                    required
                                    onChange={(e) => {
                                      temp = opt;
                                      temp[i].duration = e.target.value;
                                      setOpt(temp);
                                    }}
                                  />
                                  <div class="valid-feedback">Valid.</div>
                                  <div class="invalid-feedback">
                                    Please fill out this field.
                                  </div>
                                </div>
                                <div class="col-12">
                                  <label class="form-label">
                                    Describe your responsibilities
                                  </label>
                                  <textarea
                                    onChange={(e) => {
                                      temp = opt;
                                      temp[i].desc = e.target.value;
                                      setOpt(temp);
                                    }}
                                    class="form-control"
                                    required
                                  ></textarea>
                                  <div class="valid-feedback">Valid.</div>
                                  <div class="invalid-feedback">
                                    Please fill out this field.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}

                    <a class="d-block mt-3" onClick={OptionHandler}>
                      Add more experience
                    </a>
                  </div>
                </div>

                <hr class="my-4"></hr>

                <button
                  class="btn btn-primary"
                  type="submit"
                  onClick={SubmitHandler}
                >
                  Save Candidate
                </button>
              </div>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}

export default AddEmp;
