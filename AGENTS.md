# Solar TPC Group - AI Coding Rules (Root)

> Đây là file quy tắc dành cho AI model. Khi tạo hoặc sửa code, hãy tuân thủ nghiêm ngặt các quy tắc bên dưới.

## Tổng quan Dự án

Solar TPC Group là hệ thống quản lý năng lượng mặt trời, gồm 3 sub-project:

| Project | Tech Stack | Mục đích |
|---------|-----------|----------|
| `solar_tpc_server` | Spring Boot 4.0, Java 21, Gradle, MySQL, JPA, Lombok | REST API Backend |
| `solar_tpc_client` | Next.js 16, React 19, TypeScript, Tailwind CSS 4, i18next | Website khách hàng (SSR/SSG) |
| `solar_tpc_admin` | Vue 3.5, Vite 8, TypeScript, Axios, vue-i18n, vue-router 5 | Dashboard quản trị (SPA) |

## Quy tắc Đặt tên Chung (Naming Convention)

### Prefix bắt buộc: `Tso`
- **Tất cả** class, component, file, view, entity, DTO đều phải bắt đầu bằng prefix `Tso` (viết tắt của "TPC Solar").
- Ví dụ: `TsoUserController`, `TsoLogin.vue`, `TsoHeroSection.tsx`, `TsoApiResponse`

### Java (Server)
- Class: `PascalCase` với prefix `Tso` → `TsoUserService`, `TsoMenuDto`
- Package: `lowercase` → `controller`, `service`, `dto`, `entity`, `repository`, `config`, `exception`, `util`, `validation`, `response`
- Constant: `UPPER_SNAKE_CASE` → `API_BASE`, `SYSTEM`
- Variable/Method: `camelCase` → `saveCustomerRequest()`, `isSpamRequest()`

### TypeScript/JavaScript (Client & Admin)
- Component file: `PascalCase` với prefix `Tso` → `TsoHeroSection.tsx`, `TsoLogin.vue`
- Utility file: `PascalCase` với prefix → `TsoLocalStorageUtils.ts`  
- Constants file: `camelCase` → `constants.ts`
- Variable/Function: `camelCase` → `handleLogin()`, `apiGet()`
- Type/Interface: `PascalCase` với prefix `Tso` → `TsoUserDto`, `TsoApiResponse`

### Database
- Table: `snake_case` với prefix `tso_` → `tso_customer_request`, `tso_user`
- Column: `snake_case` → `customer_name`, `created_date`

## Quy tắc i18n (Đa ngôn ngữ)
- Hệ thống hỗ trợ 2 ngôn ngữ: `vi` (Tiếng Việt) và `en` (English)
- **KHÔNG** hardcode text hiển thị. Luôn dùng hàm dịch: `t('key')`, `$t('key')`, `TsoMessageUtil.getMessage("key")`
- Comment trong code có thể viết bằng Tiếng Việt

## Quy tắc Chung
- Mỗi sub-project có file `AGENTS.md` riêng với quy tắc chi tiết → **Đọc file AGENTS.md trong thư mục con trước khi code**
- Docker: Mỗi sub-project có `Dockerfile` riêng, compose ở root
- Git: Mỗi sub-project là 1 git submodule
