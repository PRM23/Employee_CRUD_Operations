import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function AddEmp() {
  const data = JSON.parse(localStorage.getItem("data")) || [];
  //console.log(data)
  const [firstname, setFirstName] = useState("");
  const [value, setValue] = useState(data);
  const [lastname, setLastName] = useState("");
  const [gender, setGender] = useState();
  const [email, setEmail] = useState("");
  const [addr, setAddr] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  const [checkSkills, setCheckSkills] = useState([]);

  const [cnt, setCnt] = useState(0);
  const [opt, setOpt] = useState([
    {
      compName: "",
      duration: "",
      desc: "",
    },
  ]);
  const navigate = useNavigate();
  const { id } = useParams();
  let temp = [];
  let add = "";
  console.log(value);

  useEffect(() => {
    let values = value.map((a, i) => {
      setFirstName(a.name);
      setLastName(a.lastname);
      setGender(a.gender);
      setEmail(a.email);
      setAddr(a.addr);
      setPin(a.pin);
      setOpt(a.opt);
      setCountry(a.country);
      setState(a.state);

      setCheckSkills(a.checkSkills);
    });
  }, []);

  const UpdateHandler = () => {
    let modifiedValue = value?.map((a, i) => {
      if (i == id) {
        console.log("update:" + a.name);
        setFirstName(a.name);
        setLastName(a.lastname);
        setGender(a.gender);
        setEmail(a.email);
        setAddr(a.addr);
        setPin(a.pin);
        setOpt(a.opt);
        setCountry(a.country);
        setState(a.state);

        setCheckSkills(a.checkSkills);
        return {
          ...a,
          name: firstname,
          lastname: lastname,
          addr: addr,
          gender: gender,
          pin: pin,
          cnt: cnt,
          opt: opt,
          country: country,
          state: state,
          checkSkills: checkSkills,

          email: email,
        };
      }
      console.log(a);
      setValue(a);
      return a;
    });
    localStorage.setItem("data", JSON.stringify(modifiedValue));
    navigate("/");
    // console.log(value)
    // localStorage.setItem("emp",JSON.stringify(value))
  };

  const SubmitHandler = () => {
    add = {
      // name,email,noofSkills,totalWorkExp

      name: firstname,
      lastname: lastname,
      gender: gender,
      cnt: cnt,
      email: email,
    };

    localStorage.setItem("data", JSON.stringify(add));
    navigate("/");
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
      localStorage.setItem("data", JSON.stringify(remove));
    }
  };

  console.log(data.name);
  const RemoveHandler = (id) => {
    let remove = opt.filter((a, i) => i !== id);
    console.log(remove);
    setOpt(remove);
  };

  const OptionHandler = () => {
    console.log("clicked");
    setOpt((prev) => [...prev, cnt]);
    setCnt(cnt + 1);
    console.log(cnt);
  };
  return (
    <>
      <div class="container my-4">
        <main>
          <div class="py-5 text-center">
            <h2>Edit Candidate</h2>
          </div>
          <form class="was-validated">
          <div class="row g-5">
            <div class="col-md-7 col-lg-8 ms-auto me-auto">
              <h4 class="mb-3">Basic Info</h4>
              <div class="row g-3">
                <div class="col-sm-6">
                  <label class="form-label">First name</label>
                  <input
                    type="text"
                    class="form-control"
                    required
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">
                      Please fill out this field.
                    </div>
                </div>

                <div class="col-sm-6">
                  <label class="form-label">Last name</label>
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

                <div class="col-12" onChange={(e) => setGender(e.target.value)}>
                  <label class="form-label">Gender</label>
                  <div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        name="gender"
                        // defaultValue={gender}
                        value="Male"
                        type="radio"
                       required
                        checked={gender === "Male"}
                      />
                      
                      <label class="form-check-label">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                      {console.log(gender)}
                      <input
                        class="form-check-input"
                        name="gender"
                        // defaultValue={gender}
                        value="Female"
                        required
                        checked={gender === "Female"}
                        type="radio"
                      />
                      <label class="form-check-label">Female</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        name="gender"
                        value="Other"
                        type="radio"
                        required
                        checked={gender === "Other"}
                      />
                      <label class="form-check-label">Other</label>
                    </div>
                  </div>
                </div>

                <div class="col-12">
                  <label class="form-label">Email</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    class="form-control"
                    required
                    placeholder="you@example.com"
                  />
                  <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">
                      Please fill out this field.
                    </div>
                </div>

                <div class="col-12">
                  <label class="form-label">Address</label>
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
                  <label class="form-label">Country</label>
                  <select
                    class="form-select"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option>Choose...</option>
                    <option>India</option>
                    <option>United States</option>
                    <option>UAE</option>
                    <option>Austrellia</option>
                  </select>
                </div>

                <div class="col-md-4">
                  <label class="form-label">State</label>
                  <select
                    class="form-select"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  >
                    <option value="">Choose...</option>
                    <option>Maharashtra</option>
                    <option>Karnataka</option>
                    <option>Andhra Pradesh</option>
                  </select>
                </div>

                <div class="col-md-3">
                  <label class="form-label">Pin / Zip</label>
                  <input
                    type="text"
                    class="form-control"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                  />
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
                    <div
                      class="form-check form-check-inline"
                      //value={checkSkills[0]}
                    >
                      <input
                        class="form-check-input"
                        value="Angular"
                        type="checkbox"
                        checked={checkSkills[0] == "Angular"}
                        onChange={CheckHandler}
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
                      />
                      <label class="form-check-label">Java</label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row gy-3">
                <div class="col-12">
                  <label class="form-label">
                    <strong>
                      Experience
                      <span class="small text-muted">(min 2, max 5 items)</span>
                    </strong>
                  </label>

                  {opt.map((a, i) => {
                    return (
                      <>
                        <div class="card mx-3 mt-3" key={i}>
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
                                  value={a.compName}
                                  onChange={(e) => {
                                    temp = opt;
                                    temp[i].compName = e.target.value;
                                    setOpt(temp);
                                  }}
                                />
                              </div>
                              <div class="col-6">
                                <label class="form-label">
                                  Duration{" "}
                                  <span class="text-muted">(in months)</span>
                                </label>
                                <input
                                  key={i}
                                  type="number"
                                  class="form-control"
                                  value={a.duration}
                                  onChange={(e) => {
                                    temp = opt;
                                    temp[i].duration = e.target.value;
                                    setOpt(temp);
                                  }}
                                />
                              </div>
                              <div class="col-12">
                                <label class="form-label">
                                  Describe your responsibilities
                                </label>
                                <textarea
                                  value={a.duration}
                                  onChange={(e) => {
                                    temp = opt;
                                    temp[i].desc = e.target.value;
                                    setOpt(temp);
                                  }}
                                  class="form-control"
                                ></textarea>
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
                onClick={UpdateHandler}
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
