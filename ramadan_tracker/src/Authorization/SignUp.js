import React from "react";

export default function SignUp() {
  return (
    <div className="shade1 full_page">
      <div className="shade2 p-5">
        <form>
          <center>
            <h4>সাইন-আপ</h4>
          </center>{" "}
          <hr /> <br />
          <div className="row">
            <div className="col">
              <div class="mb-3 mt-3">
                <label for="q1" className="form-label">
                  নামঃ
                </label>
                <br />
                <input
                  type="name"
                  id="q1"
                  placeholder="আপনার নাম দিন"
                  name="name"
                />
              </div>{" "}
              <hr />
              <div class="mb-3 mt-3">
                <label for="q2" className="form-label">
                  মোবাইল নম্বরঃ
                </label>
                <br />
                <input
                  type="name"
                  id="q2"
                  placeholder="আপনার মোবাইল নম্বর দিন"
                  name="phone"
                />
              </div>{" "}
              <hr />
            </div>

            <div className="col">
              <div class="mb-3 mt-3">
                <label for="q4" className="form-label">
                  ঠিকানাঃ
                </label>
                <br />
                <input
                  type="address"
                  id="q4"
                  placeholder="আপনার ঠিকানা দিন"
                  name="address"
                />
              </div>{" "}
              <hr />
              <div class="mb-3 mt-3">
                <label for="q3" className="form-label">
                  জেন্ডারঃ
                </label>
                <br />
                <div className="row">
                  <div className="col">
                    পুরুষঃ
                    <input type="checkbox" id="q3" name="gender" value="male" />
                  </div>
                  <div className="col">
                    নারীঃ
                    <input
                      type="checkbox"
                      id="q3"
                      name="gender"
                      value="female"
                    />
                  </div>
                </div>
              </div>{" "}
              <hr />
            </div>
          </div>
          <hr />
          <div className="row">
            <div class="mb-3 mt-3">
              <label for="q5" className="form-label">
                ই-মেইলঃ(ইউজার আইডি)
              </label>
              <br />
              <input
                type="email"
                id="q5"
                placeholder="আপনার ই-মেইল দিন"
                name="email"
              />
            </div>{" "}
            <div className="col">
              <div class="mb-3 mt-3">
                <label for="q6" className="form-label">
                  পাসওয়ার্ডঃ
                </label>
                <br />
                <input
                  type="password"
                  id="q6"
                  placeholder="আপনার পাসওয়ার্ড দিন"
                  name="password"
                />
              </div>{" "}
            </div>
            <div className="col">
              <div class="mb-3 mt-3">
                <label for="q6" className="form-label">
                  পাসওয়ার্ডটি পুনরায় দিনঃ
                </label>
                <br />
                <input
                  type="password"
                  id="q6"
                  placeholder="পুর্বের পাসওয়ার্ড"
                  name="password2"
                />
              </div>{" "}
            </div>
          </div>
          <hr />
          <center>
            <input
              className="shade1 p-2"
              type="submit"
              value="অ্যাকাউন্ট তৈরি করুন"
            />
          </center>
        </form>
      </div>
    </div>
  );
}