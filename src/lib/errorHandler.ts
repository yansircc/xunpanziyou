export default function errorHandler(e: unknown): string {
  if (e instanceof Error || e instanceof ErrorEvent) {
    return e.message;
  }
  if (e instanceof Response) {
    return e.statusText;
  }
  if (typeof e === "string") {
    return e;
  }
  return "Unknown error";
}
