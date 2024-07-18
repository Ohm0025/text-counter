import style from "./adminLogin.module.css";

const AdminLogin = () => {
  return (
    <div className={style.container}>
      <div className={style.loginBox}>
        <h4>Admin Login</h4>
        <div>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
        </div>
        <div>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
