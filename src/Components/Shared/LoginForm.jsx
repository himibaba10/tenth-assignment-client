import PropTypes from "prop-types";
import { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";

const LoginForm = ({ objective }) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { user, googleSignIn, setUser, SignInUser, signUpUser, setLoading } =
    useContext(AuthContext);

  if (user) {
    return <Navigate to={`${location.state || "/"}`} />;
  }
  const handleForm = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if (objective === "Login") {
      SignInUser(email, password)
        .then((res) => {
          setUser(res.user);
          setLoading(false);
          navigate(location.state || "/");
        })
        .catch(() => {
          setError("Email and password does not match");
        });
    } else {
      const name = form.name.value;

      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9\s]).{6,}$/.test(password)) {
        setError(
          "Password should be at least 6 character long, should contain at least on uppercase and at least a special character"
        );
        return;
      }

      signUpUser(email, password)
        .then((res) => {
          updateProfile(res.user, {
            displayName: name,
          })
            .then(() => {
              const newUser = { ...res.user, displayName: name };
              setUser(newUser);
              setLoading(false);
            })
            .catch((err) => {
              console.log(err.message);
            });
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        setUser(res.user);
        navigate(location.state || "/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="bg-primaryColor2 flex-1 py-20">
      <div className="section">
        <form
          onSubmit={handleForm}
          className="bg-white max-w-sm p-10 mx-auto space-y-4"
        >
          {objective === "Register" && (
            <input
              className="bg-gray-200 w-full p-3"
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          )}
          <input
            className="bg-gray-200 w-full p-3"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <input
            className="bg-gray-200 w-full p-3"
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
          <input
            className="bg-primaryColor2 w-full py-3.5 text-white cursor-pointer"
            type="submit"
            value={`${objective === "Login" ? "Login" : "Register"}`}
          />
          <p className="text-center text-sm">
            {objective === "Login"
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <Link
              className="text-primaryColor1 underline underline-offset-2"
              to={`${objective === "Login" ? "/register" : "/login"}`}
            >
              {objective === "Login" ? "Register" : "Login"}
            </Link>
          </p>
          <div className="text-center pt-4">
            <span
              className="relative inline-block text-center text-sm before:content-[''] before:h-[1px] before:w-20 before:bg-gray-500 before:inline-block before:absolute before:top-[9px] before:-left-24
            after:content-[''] after:h-[1px] after:w-20 after:bg-gray-500 after:inline-block after:absolute after:top-[9px] after:-right-24
            "
            >
              Or login using
            </span>
          </div>
          <div className="text-center">
            <button
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-gray-300 rounded"
              onClick={handleGoogleSignIn}
            >
              <FaGoogle color="blue" />
              Google
            </button>
          </div>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  objective: PropTypes.string,
};

export default LoginForm;
