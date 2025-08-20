export {};

declare global {
  interface Window {
    PUBLIC_API_URL: string;
    userService: any;
  }
}
