export default ({ config }) => {
  const ENV = process.env.APP_ENV || "development";

  // Read API URL from environment variable or use fallback
  const API_URL = process.env.EXPO_PUBLIC_API_URL || "http://localhost:3000";

  const ENV_CONFIG = {
    development: {
      name: "CampusLive Dev",
      package: "com.campuslive.dev",
    },
    preprod: {
      name: "CampusLive Preprod",
      package: "com.campuslive.preprod",
    },
    production: {
      name: "CampusLive",
      package: "com.campuslive",
    },
  };

  const current = ENV_CONFIG[ENV];

  return {
    expo: {
      name: current.name,
      slug: "CampusLive",
      version: "1.0.0",
      orientation: "portrait",
      scheme: "campuslive",
      userInterfaceStyle: "automatic",
      newArchEnabled: true,

      ios: {
        supportsTablet: true,
      },

      android: {
        adaptiveIcon: {
          backgroundColor: "#E6F4FE",
          foregroundImage: "./assets/images/app-icon.jpeg",
        },
        edgeToEdgeEnabled: true,
        predictiveBackGestureEnabled: false,
        package: current.package,
      },

      web: {
        output: "static",
      },

      plugins: ["expo-router"],

      experiments: {
        typedRoutes: true,
        reactCompiler: true,
      },

      extra: {
        router: {},
        env: ENV,
        apiUrl: API_URL,
        eas: {
          projectId: "435b78c1-95e4-40a0-b37a-06f14721ef2a",
        },
      },
    },
  };
};