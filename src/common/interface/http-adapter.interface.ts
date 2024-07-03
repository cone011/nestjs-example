export interface HttpAdapater {
  get<T>(url: string, data: any): Promise<T>;

  post<T>(url: string, body: any): Promise<T>;

  delete<T>(url: string): Promise<T>;
}
