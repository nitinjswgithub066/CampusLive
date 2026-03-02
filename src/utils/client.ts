import axios from "axios";

let isRefreshing = false;
let refreshSubscribers: any[] = [];

const api = axios.create({
  baseURL: BASE_URL,
});

const subscribeTokenRefresh = (cb: any) => {
  refreshSubscribers.push(cb);
};

const onRefreshed = (token: string) => {
  refreshSubscribers.forEach((cb) => cb(token));
  refreshSubscribers = [];
};

api.interceptors.request.use(async (config) => {
  const token = await getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    if (!isRefreshing) {
      isRefreshing = true;

      try {
        const refreshToken = await getRefreshToken();

        const res = await axios.post(`${BASE_URL}/auth/refresh`, {
          refreshToken,
        });

        await saveAccessToken(res.data.accessToken);
        onRefreshed(res.data.accessToken);
      } catch (err) {
        await clearUserData();
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return new Promise((resolve) => {
      subscribeTokenRefresh((token: string) => {
        originalRequest.headers.Authorization = `Bearer ${token}`;
        resolve(api(originalRequest));
      });
    });
  }
);

export default api;