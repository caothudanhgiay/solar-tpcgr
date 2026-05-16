package com.example.solar_tpc_server.exception;

import com.example.solar_tpc_server.response.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * Nơi tập trung bắt và xử lý mọi Exception văng ra từ Controllers
 */
@RestControllerAdvice
public class GlobalExceptionHandler {

    /**
     * Bắt lỗi nghiệp vụ chủ động văng ra (AppException)
     */
    @ExceptionHandler(value = AppException.class)
    public ResponseEntity<ApiResponse<Object>> handlingAppException(AppException exception) {
        ErrorCode errorCode = exception.getErrorCode();
        
        // Trả về ApiResponse bọc kèm theo message lấy từ enum ErrorCode
        String message = exception.getMessage() != null && !exception.getMessage().equals(errorCode.getMessage()) 
                            ? exception.getMessage() 
                            : errorCode.getMessage();
                            
        ApiResponse<Object> apiResponse = ApiResponse.error(errorCode.getCode(), message);

        return ResponseEntity
                .status(errorCode.getCode())
                .body(apiResponse);
    }

    /**
     * Bắt các lỗi chung (ví dụ lỗi RuntimeException không lường trước được)
     */
    @ExceptionHandler(value = Exception.class)
    public ResponseEntity<ApiResponse<Object>> handlingRuntimeException(Exception exception) {
        ErrorCode errorCode = ErrorCode.INTERNAL_SERVER_ERROR;
        
        ApiResponse<Object> apiResponse = ApiResponse.error(
                errorCode.getCode(), 
                errorCode.getMessage() + ": " + exception.getMessage()
        );

        return ResponseEntity
                .status(errorCode.getCode())
                .body(apiResponse);
    }
}
