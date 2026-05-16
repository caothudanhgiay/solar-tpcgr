package com.example.solar_tpc_server.exception;

import lombok.Getter;

/**
 * Custom Exception class dùng để quăng lỗi mọi nơi trong project
 */
@Getter
public class AppException extends RuntimeException {

    private final ErrorCode errorCode;

    public AppException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
    }
    
    // Hỗ trợ truyền thêm thông báo chi tiết nếu cần thiết
    public AppException(ErrorCode errorCode, String detailedMessage) {
        super(detailedMessage);
        this.errorCode = errorCode;
    }
}
