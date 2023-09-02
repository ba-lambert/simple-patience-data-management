declare module 'cloudinary' {
    export function config(config: {
      cloud_name: string;
      api_key: string;
      api_secret: string;
    }): void;
  }
  