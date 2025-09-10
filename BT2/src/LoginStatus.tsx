import React, { Component } from "react";
import "./LoginStatus.css"; // để styling

interface State {
  isLoggedIn: boolean;
}

class LoginStatus extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  toggleLogin = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  render() {
    return (
      <div className="login-container">
        {this.state.isLoggedIn ? (
          <>
            <p className="message success">✅ Xin chào, User!</p>
            <button onClick={this.toggleLogin} className="btn">
              Đăng xuất
            </button>
          </>
        ) : (
          <>
            <p className="message warning">🔒 Vui lòng đăng nhập để tiếp tục.</p>
            <button onClick={this.toggleLogin} className="btn">
              Đăng nhập
            </button>
          </>
        )}
      </div>
    );
  }
}

export default LoginStatus;
