import { UUID } from "crypto";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function apiCall(endpoint: string, options = {}) {
  const token =
    typeof window != "undefined" ? localStorage.getItem("access_token") : null;
  const config = {
    ...options,
    headers: {
      "Content-type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  };
  const response = await fetch(`${API_URL}${endpoint}`, config);

  // if (response.status === 401) {
  //   const refreshed = await refreshToken();
  //   if (refreshed) {
  //     return await apiCall(endpoint, options);
  //   }
  //   logout();
  //   throw new Error("Session expirée, reconnectez vous");
  // }
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.detail || `Erreur ${response.status}`);
  }
  if (response.status === 204) return null;

  return await response.json();
}

// auth

export async function register(
  username: string,
  email: string,
  password: string,
) {
  return await apiCall("/users/register/", {
    method: "POST",
    body: JSON.stringify({ username, email, password, password2: password }),
  });
}

export async function login(username: string, password: string) {
  const response = await fetch(`${API_URL}/users/login/`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  if (response.status === 200) {
    const data = await response.json();
    localStorage.setItem("access_token", data.access);
    localStorage.setItem("refresh_token", data.refresh);
    return data;
  }
  if (response.status === 400) {
    throw new Error("Vous devez renseigner les champs obligatoires");
  }
  if (response.status === 401) {
    throw new Error("Vos identifiants sont incorrects");
  }
}

export async function refreshToken() {
  const refresh = localStorage.getItem("refresh_token");
  if (!refresh) return false;
  try {
    const response = await fetch(`${API_URL}/users/refresh/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ refresh }),
    });
    const data = await response.json();
    localStorage.setItem("access_token", data.access);
    localStorage.setItem("refresh_token", data.refresh);
    return true;
  } catch {
    return false;
  }
}

export const isLogin = () => !!localStorage.getItem("access_token");

export function logout() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  window.location.href = "/login";
}

// currect profil
export const getProfil = () => apiCall("/users/profil/me/");

// user profil
export const getuserProfil = (username: string) =>
  apiCall(`/users/profil/${username}/`);

// get user list
export const getUsers = () => apiCall("/users/");

// get user
export const getUser = (uuid: UUID) => apiCall(`/users/${uuid}/`);
