package com.example.solar_tpc_server.service;

import com.example.solar_tpc_server.dto.TsoMenuDto;
import com.example.solar_tpc_server.entity.TsoMenu;
import com.example.solar_tpc_server.repository.TsoMenuRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TsoMenuService {

    private final TsoMenuRepository tsoMenuRepository;

    public List<TsoMenuDto> getAllEnabledMenus() {
        List<TsoMenu> menus = tsoMenuRepository.findByIsEnabledTrue();
        return menus.stream()
                .map(menu -> new TsoMenuDto(
                        menu.getMenuId(),
                        menu.getMenuName(),
                        menu.getMenuNameEng(),
                        menu.getMenuUrl(),
                        menu.getNote()
                ))
                .collect(Collectors.toList());
    }
}
