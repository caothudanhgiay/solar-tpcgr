package com.example.solar_tpc_server.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TsoMenuDto {
    private Long menuId;
    private String menuName;
    private String menuNameEng;
    private String menuUrl;
    private String note;
}
