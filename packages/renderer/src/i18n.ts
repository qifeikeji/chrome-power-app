import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          refresh: 'Refresh',
          account_already_have: 'Account already have an account?',
          account_sign_in: 'Sign in',
          account_sign_up: 'Sign up',
          account_sign_out: 'Sign out',
          account_forgot_password: 'Forgot password?',
          account_reset_password: 'Reset password',
          account_do_not_have: "Don't have an account?",
          sign_in: 'Sign in',
          sign_up: 'Sign up',
          sign_out: 'Sign out',
          forgot_password: 'Forgot password',
          forgotten_password_desc:
            'Enter your email and we will send you a link to reset your password.',
          update_password: 'Update password',

          new_window: 'New window',
          edit_window: 'Edit window',

          window_open: 'Open',
          window_close: 'Close',
          window_edit: 'Edit',
          window_delete: 'Delete',
          window_proxy_setting: 'Proxy setting',
          window_set_cookie: 'Preset cookie',
          window_running: 'Running',
          window_preparing: 'Preparing',
          window_column_profile_id: 'Profile ID',
          window_column_proxy: 'Proxy',
          window_column_group: 'Group',
          window_column_remark: 'Remark',
          window_column_name: 'Name',
          window_column_tags: 'Tags',
          window_column_last_open: 'Last open',
          window_column_created_at: 'Created at',
          window_column_action: 'Action',
          window_edit_form_profile_id: 'Profile ID',
          window_edit_form_name: 'Name',
          window_edit_form_remark: 'Remark',
          window_edit_form_group: 'Group',
          window_edit_form_proxy: 'Proxy',
          window_edit_form_tags: 'Tags',
          window_detail_create: 'Create',
          window_detail_import: 'Import',
          window_import_from_template: 'Import from template',
          window_import_from_template_tip: 'Click to upload(Excel)',
          window_import_from_template_download: 'Download template',
          window_import_from_ads: 'Import AdsPower file',
          window_import_from_ads_tip: 'Click to upload(Txt/Excel)',

          proxy_check: 'Check',
          proxy_new_proxy: 'New proxy',
          proxy_edit: 'Edit',
          proxy_delete: 'Delete',
          proxy_column_type: 'Proxy Type',
          proxy_column_status: 'Status',
          proxy_column_country: 'IP Country',
          proxy_column_remark: 'Remark',
          proxy_column_checker: 'IP Checker',
          proxy_import_tip: `Instructions:
          1. If the proxy type is not specified, it will default to HTTP type.
          2. Only HTTP and SOCKS5 proxy types are supported.
          3. Enter one proxy per line.
          4. Only IPv4 addresses are supported for the host.
          Input format (IPv4 only):
          192.168.0.1:8000{remark}
          192.168.0.1:8000:proxy_username:proxy_password{remark}
          socks5://192.168.0.1:8000{remark}
          socks5://192.168.0.1:8000:proxy_username:proxy_password{remark}`,
          proxy_check_all: 'Check all',
          proxy_total: 'Total',
          proxy_import_column_type: 'Type',
          proxy_import_column_host: 'Host',
          proxy_import_column_port: 'Port',
          proxy_import_column_username: 'Username',
          proxy_import_column_password: 'Password',
          proxy_import_column_remark: 'Remark',
          proxy_import_column_status: 'Status',

          tile_windows: 'Auto arrange',

          settings_cache_path: 'Cache path',
          settings_choose_cache_path: 'Choose path',
          settings_use_local_chrome: 'Use Chrome',
          settings_chrome_path: 'Chrome.exe Path',
          setting_chromium_path: 'Chromium Path',
          settings_automation_connect: 'Automation connect',
          footer_ok: 'OK',
          footer_cancel: 'Cancel',

          new_proxy: 'New proxy',

          menu_windows: 'Windows',
          menu_proxy: 'Proxy',
          menu_extensions: 'Extensions',
          menu_settings: 'Settings',
          menu_logs: 'Running Logs',
          menu_sync: 'Sync',
          menu_api: 'API',

          header_language: 'Language',
          header_settings: 'Settings',
          header_sign_out: 'Sign out',

          // 英语
          api_title: 'API',
          api_link: 'Document',
          api_description:
            'API is used for developers to connect to browser instances using `Puppeteer / Playwright / Selenium` and other automation tools to execute automation scripts. Non-developers do not need to use this feature.',
          api_status: 'API Status',
          api_url: 'API URL',
          api_supported: 'Supported API',
          api_control: 'Control Start/Stop',
          api_getProfiles: 'Get all Profiles list',
          api_openProfile: 'Open specified Profiles by ID (contains debugging link)',
          api_closeProfile: 'Close specified Profiles by ID',
          api_windows: 'Windows CRUD',
          api_windowsDoc: 'Details Document',
          api_proxy: 'Proxy CRUD',
          api_proxyDoc: 'Details Document',
          extension_name: 'Extension Name',
          extension_version: 'Version',
          extension_update_time: 'Update Time',
          extension_description: 'Description',
          extension_status: 'Status',
          extension_action: 'Action',
          extension_download: 'Download',
          extension_refresh: 'Refresh',
          extension_upload: 'Upload',
          extension_upload2: 'Upload Extension',
          extension_install_package: 'Installation Package',
          extension_install_package_tooltip: 'Please upload a zip file containing the extension',
          extension_install_package_size_error: 'Package size cannot exceed 60MB',
          extension_zip_format_tip: 'Support .zip format files',
          extension_icon: 'Icon',
          extension_icon_tooltip: 'Extension icon, supports jpg/jpeg/png format',
          extension_icon_format_error: 'Only jpg/jpeg/png format is supported',
          extension_icon_size_error: 'Icon size cannot exceed 1MB',
          extension_icon_upload_placeholder: 'Upload Icon',
          extension_name_required: 'Please enter extension name',
          extension_name_placeholder: 'Please enter extension name',
          extension_description_tooltip: 'Extension description',
          extension_description_placeholder: 'Please enter extension description',
          extension_apply_to_window: 'Apply to Window',
          extension_upload_success: 'Upload success',
          extension_select_all: 'Select all',
          extension_update: 'Update',
          extension_delete: 'Delete',
          extension_update_success: 'Update success',
          extension_update_failed: 'Update failed',
          extension_delete_success: 'Delete success',
          extension_delete_failed: 'Delete failed',
          extension_update2: 'Update Extension',
          extension_delete_confirm_title: 'Delete confirm',
          extension_delete_confirm_content:
            'Are you sure you want to delete this extension? This operation cannot be recovered.',
          extension_current_version: 'Current version',
        },
      },
      zh: {
        translation: {
          refresh: '刷新',
          account_already_have: '已有账号?',
          account_sign_in: '登录',
          account_sign_up: '注册',
          account_sign_out: '退出',
          account_forgot_password: '忘记密码?',
          account_reset_password: '重置密码',
          account_do_not_have: '没有账号?',
          sign_in: '登录',
          sign_up: '注册',
          sign_out: '退出',
          forgot_password: '忘记密码',
          forgotten_password_desc: '输入您的电子邮件，我们将向您发送重置密码的链接。',
          update_password: '更新密码',

          new_window: '新建窗口',
          edit_window: '编辑窗口',

          window_open: '打开',
          window_close: '关闭',
          window_edit: '编辑',
          window_delete: '删除',
          window_proxy_setting: '代理设置',
          window_set_cookie: '预设 cookie',
          window_running: '运行中',
          window_preparing: '配置中',
          window_column_profile_id: '缓存目录',
          window_column_proxy: '代理',
          window_column_group: '分组',
          window_column_remark: '备注',
          window_column_name: '名称',
          window_column_tags: '标签',
          window_column_last_open: '最后打开',
          window_column_created_at: '创建时间',
          window_column_action: '操作',
          window_edit_form_profile_id: '缓存目录名',
          window_edit_form_name: '名称',
          window_edit_form_remark: '备注',
          window_edit_form_group: '分组',
          window_edit_form_proxy: '代理',
          window_edit_form_tags: '标签',
          window_detail_create: '创建',
          window_detail_import: '导入',
          window_import_from_template: '从模板导入',
          window_import_from_template_tip: '点击上传(Excel)',
          window_import_from_template_download: '下载模板',
          window_import_from_ads: '导入 AdsPower 文件',
          window_import_from_ads_tip: '点击上传(Txt/Excel)',

          proxy_check: '检查',
          proxy_new_proxy: '新建代理',
          proxy_edit: '编辑',
          proxy_delete: '删除',
          proxy_column_type: '代理类型',
          proxy_column_status: '状态',
          proxy_column_country: 'IP 地区',
          proxy_column_remark: '备注',
          proxy_column_checker: '检查方式',
          proxy_import_tip: `说明
          1. 如果未指定代理类型，则默认为 HTTP 类型。
          2. 仅支持 HTTP 和 SOCKS5 代理类型。
          3. 每行输入一个代理。
          4. 主机只支持 IPv4 地址。
          输入格式（仅限 IPv4）：
          192.168.0.1:8000{remark}
          192.168.0.1:8000:proxy_username:proxy_password{remark}
          socks5://192.168.0.1:8000{remark}
          socks5://192.168.0.1:8000:proxy_username:proxy_password{remark}`,
          proxy_check_all: '检查全部',
          proxy_total: '总数',
          proxy_import_column_type: '类型',
          proxy_import_column_host: '主机',
          proxy_import_column_port: '端口',
          proxy_import_column_username: '用户名',
          proxy_import_column_password: '密码',
          proxy_import_column_remark: '备注',
          proxy_import_column_status: '状态',

          tile_windows: '自动排列',

          settings_cache_path: '缓存目录',
          settings_choose_cache_path: '选择路径',
          settings_use_local_chrome: '使用本地 Chrome',
          settings_chrome_path: 'Chrome.exe 路径',
          setting_chromium_path: 'Chromium 内核路径',
          settings_automation_connect: '自动化连接',
          footer_ok: '确定',
          footer_cancel: '取消',

          new_proxy: '新建代理',

          menu_windows: '窗口管理',
          menu_proxy: '代理设置',
          menu_extensions: '扩展管理',
          menu_sync: '同步操作',
          menu_logs: '运行日志',
          menu_settings: '设置',
          menu_api: 'API',

          header_settings: '设置',
          header_language: '语言',
          header_sign_out: '退出登录',

          api_title: 'API',
          api_link: '接口文档',
          api_description:
            'API 作用于开发人员通过 `Puppeteer / Playwright / Selenium` 等自动化工具连接浏览器实例，执行自动化脚本，非开发人员无需使用此功能。',
          api_status: '接口状态',
          api_url: '接口 URL',
          api_supported: '已支持接口',
          api_control: '控制开启/关闭',
          api_getProfiles: '获取所有 Profiles 列表',
          api_openProfile: '根据 ID 打开指定 Profiles（返回值中有调试链接）',
          api_closeProfile: '根据 ID 关闭指定 Profiles',
          api_windows: 'Windows CRUD',
          api_windowsDoc: '详情文档',
          api_proxy: '代理 CRUD',
          api_proxyDoc: '详情文档',
          extension_name: '扩展名称',
          extension_version: '版本',
          extension_update_time: '更新时间',
          extension_description: '描述',
          extension_status: '状态',
          extension_action: '操作',
          extension_download: '下载',
          extension_refresh: '刷新',
          extension_upload: '上传',
          extension_upload2: '上传扩展',
          extension_install_package: '安装包',
          extension_install_package_tooltip: '请上传包含扩展的 zip 文件',
          extension_install_package_size_error: '安装包大小不能超过 60MB',
          extension_zip_format_tip: '支持 .zip 格式文件',
          extension_icon: '图标',
          extension_icon_tooltip: '扩展图标，支持 jpg/jpeg/png 格式',
          extension_icon_format_error: '仅支持 jpg/jpeg/png 格式',
          extension_icon_size_error: '图标大小不能超过 1MB',
          extension_icon_upload_placeholder: '上传图标',
          extension_name_required: '请输入扩展名称',
          extension_name_placeholder: '请输入扩展名称',
          extension_description_tooltip: '扩展描述',
          extension_description_placeholder: '请输入扩展描述',
          extension_apply_to_window: '应用到窗口',
          extension_upload_success: '上传成功',
          extension_select_all: '全选',
          extension_update: '更新',
          extension_delete: '删除',
          extension_update_success: '更新成功',
          extension_update_failed: '更新失败',
          extension_delete_success: '删除成功',
          extension_delete_failed: '删除失败',
          extension_delete_confirm_title: '删除确认',
          extension_delete_confirm_content: '确定要删除这个扩展吗？此操作不可恢复。',
          extension_update2: '更新扩展',
          extension_current_version: '当前版本',
        },
      },
    },
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
