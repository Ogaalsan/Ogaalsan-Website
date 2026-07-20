import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  clearAuth,
  fetchCurrentUser,
  getStoredToken,
  getStoredUser,
  loginUser,
  logoutUser,
  registerUser,
  resendVerification,
  verifyEmail,
} from "@/lib/auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const init = async () => {
      const token = getStoredToken();
      const storedUser = getStoredUser();

      if (!token) {
        if (active) {
          setUser(null);
          setLoading(false);
        }
        return;
      }

      if (storedUser && active) {
        setUser(storedUser);
      }

      try {
        const freshUser = await fetchCurrentUser();
        if (active) setUser(freshUser);
      } catch {
        clearAuth();
        if (active) setUser(null);
      } finally {
        if (active) setLoading(false);
      }
    };

    init();

    return () => {
      active = false;
    };
  }, []);

  const login = useCallback(async (credentials) => {
    const { user: loggedInUser } = await loginUser(credentials);
    setUser(loggedInUser);
    return loggedInUser;
  }, []);

  const register = useCallback(async (data) => {
    const { user: registeredUser } = await registerUser(data);
    setUser(registeredUser);
    return registeredUser;
  }, []);

  const verify = useCallback(async (data) => {
    const verifiedUser = await verifyEmail(data);
    return verifiedUser;
  }, []);

  const resendCode = useCallback(async (email) => {
    return resendVerification(email);
  }, []);

  const logout = useCallback(async () => {
    await logoutUser();
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({
      user,
      loading,
      isAuthenticated: Boolean(user),
      login,
      register,
      verify,
      resendCode,
      logout,
    }),
    [user, loading, login, register, verify, resendCode, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
