import { API_URL } from "@/utils/constants";

const DEFAULT_BASE_URL = API_URL;

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = DEFAULT_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  /**
   * Hàm core để gọi API
   */
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    // Cấu hình headers mặc định
    const headers = new Headers(options.headers);
    
    // Tự động thêm Content-Type là application/json nếu có truyền body
    if (!headers.has('Content-Type') && options.body) {
        headers.set('Content-Type', 'application/json');
    }

    // Tương lai: bạn có thể cấu hình lấy token từ localStorage và gắn vào header ở đây
    // const token = localStorage.getItem('token');
    // if (token) headers.set('Authorization', `Bearer ${token}`);

    const config: RequestInit = {
      ...options,
      headers,
    };

    try {
      const response = await fetch(url, config);
      
      // Bắt lỗi HTTP (4xx, 5xx)
      if (!response.ok) {
        let errorMessage = `Lỗi hệ thống: HTTP ${response.status}`;
        try {
          // Thử parse thông báo lỗi từ server gửi về (nếu có)
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch (e) {
          // Không parse được JSON, giữ nguyên errorMessage
        }
        throw new Error(errorMessage);
      }

      // Trả về rỗng nếu status là 204 (No Content)
      if (response.status === 204) {
        return {} as T;
      }
      
      const responseText = await response.text();
      try {
        return JSON.parse(responseText);
      } catch (parseError) {
        console.error(`[API Parse Error] URL: ${url}, Text length: ${responseText.length}`);
        console.error(`[API Parse Error] Raw text (first 1000 chars):`, responseText.substring(0, 1000));
        throw parseError;
      }
    } catch (error) {
      console.error(`[API Call Failed] ${options.method || 'GET'} ${url}:`, error);
      throw error;
    }
  }

  /**
   * GET Request - Lấy dữ liệu
   */
  public get<T>(endpoint: string, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  }

  /**
   * POST Request - Gửi dữ liệu JSON lên server để tạo mới
   */
  public post<T>(endpoint: string, data: any, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * PUT Request - Gửi dữ liệu JSON lên server để cập nhật
   */
  public put<T>(endpoint: string, data: any, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  /**
   * DELETE Request - Xóa dữ liệu
   */
  public delete<T>(endpoint: string, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' });
  }
}

// Export ra một biến dùng chung (Singleton) để tiện tái sử dụng ở mọi nơi
export const apiClient = new ApiClient();
