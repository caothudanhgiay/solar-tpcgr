package com.example.solar_tpc_server.exception;

import com.example.solar_tpc_server.response.TsoApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * Nơi tập trung bắt và xử lý mọi Exception văng ra từ Controllers
 */
@RestControllerAdvice
public class TsoGlobalExceptionHandler {

    /**
     * Bắt lỗi nghiệp vụ chủ động văng ra (TsoAppException)
     */
    @ExceptionHandler(value = TsoAppException.class)
    public ResponseEntity<TsoApiResponse<Object>> handlingAppException(TsoAppException exception) {
        TsoErrorCode errorCode = exception.getErrorCode();
        
        // Trả về TsoApiResponse bọc kèm theo message lấy từ enum TsoErrorCode
        String message = exception.getMessage() != null && !exception.getMessage().equals(errorCode.getMessage()) 
                            ? exception.getMessage() 
                            : errorCode.getMessage();
                            
        TsoApiResponse<Object> apiResponse = TsoApiResponse.error(errorCode.getCode(), message);

        return ResponseEntity
                .status(errorCode.getCode())
                .body(apiResponse);
    }

    /**
     * Bắt các lỗi chung (ví dụ lỗi RuntimeException không lường trước được)
     */
    @ExceptionHandler(value = Exception.class)
    public ResponseEntity<TsoApiResponse<Object>> handlingRuntimeException(Exception exception) {
        TsoErrorCode errorCode = TsoErrorCode.INTERNAL_SERVER_ERROR;
        
        TsoApiResponse<Object> apiResponse = TsoApiResponse.error(
                errorCode.getCode(), 
                errorCode.getMessage() + ": " + exception.getMessage()
        );

        return ResponseEntity
                .status(errorCode.getCode())
                .body(apiResponse);
    }
}

