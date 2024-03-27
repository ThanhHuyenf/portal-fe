import MyLayout from '@/components/my-layout/index.vue'

import { RouteNames } from '../names'
import { appAdminRoutes } from './app/admin'

export const appRoutes = {
	path: '/app',
	redirect: '/app/dashboard',
	meta: { title: 'App', icon: 'ic:outline-touch-app', alwaysShow: true },
	component: MyLayout,
	children: [
		{
			name: RouteNames.dashboard,
			path: '/app/dashboard',
			meta: { title: 'Dashboard', icon: 'tabler:dashboard' },
			component: () => import('@/pages/app/dashboard/index.vue')
		},
		{
			path: '/app/user',
			meta: { title: 'Người dùng', icon: 'iconoir:user' },
			redirect: '/app/test-menu/l1-1',
			children: [
				{
					path: 'list',
					meta: { title: 'Danh sách' },
					component: () => import('@/pages/app/user/index.vue')
				},
				{
					path: 'l1-2',
					meta: { title: 'Thiết bị', },
					redirect: '/app/test-menu/l1-2/l2-3',
				}
			]
		},
		{
			path: '/app/agency',
			meta: { title: 'Đại lý', icon: 'bi:houses' },
			redirect: '/app/test-menu/l1-1',
			children: [
				{
					path: 'list',
					meta: { title: 'Danh sách', icon: 'activity' },
					redirect: '/app/test-menu/l1-1/l2-1',
				},
				{
					path: 'l1-2',
					meta: { title: 'Yêu cầu hỗ trợ', icon: 'fe:app-menu', alwaysShow: true },
					redirect: '/app/test-menu/l1-2/l2-3',
				}
			]
		},
		{
			path: '/app/group',
			meta: { title: 'Quyền và nhóm', icon: 'iconoir:group' },
			redirect: '/app/test-menu/l1-1',
			children: [
				{
					path: 'list',
					meta: { title: 'Danh sách nhóm', icon: 'activity' },
					redirect: '/app/test-menu/l1-1/l2-1',
				},
				{
					path: 'l1-2',
					meta: { title: 'Thiết lập quyền', icon: 'fe:app-menu', alwaysShow: true },
					redirect: '/app/test-menu/l1-2/l2-3',
				}
			]
		},
		{
			path: '/app/asset',
			meta: { title: 'Tài sản', icon: 'map:finance' },
			component: () => import('@/pages/app/components/image-uploader.vue')
		},
		{
			path: '/app/category',
			meta: { title: 'Chuyên mục', icon: 'iconamoon:category-duotone' },
			component: () => import('@/pages/app/components/image-uploader.vue')
		},
		{
			path: '/app/game',
			meta: { title: 'Trò chơi', icon: 'mingcute:game-2-line' },
			redirect: '/app/test-menu/l1-1',
			children: [
				{
					path: 'list',
					meta: { title: 'Danh sách game', icon: 'activity' },
					redirect: '/app/test-menu/l1-1/l2-1',
				},
				{
					path: 'l1-2',
					meta: { title: 'Thiết lập', icon: 'fe:app-menu', alwaysShow: true },
					redirect: '/app/test-menu/l1-2/l2-3',
				}
			]
		},
		{
			path: '/app/news',
			meta: { title: 'Tin tức', icon: 'tabler:news' },
			component: () => import('@/pages/app/components/image-uploader.vue')
		},
		{
			path: '/app/event',
			meta: { title: 'Sự kiện', icon: 'material-symbols:event-outline' },
			component: () => import('@/pages/app/components/image-uploader.vue')
		},
		{
			path: '/app/finance',
			meta: { title: 'Nạp và rút', icon: 'akar-icons:arrow-right-left' },
			redirect: '/app/test-menu/l1-1',
			children: [
				{
					path: 'list',
					meta: { title: 'Danh sách', icon: 'activity' },
					redirect: '/app/test-menu/l1-1/l2-1',
				},
				{
					path: 'l1-2',
					meta: { title: 'Yêu cầu', icon: 'fe:app-menu', alwaysShow: true },
					redirect: '/app/test-menu/l1-2/l2-3',
				},
				{
					path: 'list',
					meta: { title: 'Thanh toán', icon: 'activity' },
					redirect: '/app/test-menu/l1-1/l2-1',
				},
				{
					path: 'l1-2',
					meta: { title: 'Lịch sử nạp', icon: 'fe:app-menu', alwaysShow: true },
					redirect: '/app/test-menu/l1-2/l2-3',
				},
				{
					path: 'l1-2',
					meta: { title: 'Lịch sử rút', icon: 'fe:app-menu', alwaysShow: true },
					redirect: '/app/test-menu/l1-2/l2-3',
				}
			]
		},
		{
			path: '/app/notification',
			meta: { title: 'Thông báo', icon: 'mingcute:notification-line' },
			redirect: '/app/test-menu/l1-1',
			children: [
				{
					path: 'list',
					meta: { title: 'Danh sách thông báo', icon: 'activity' },
					redirect: '/app/test-menu/l1-1/l2-1',
				},
				{
					path: 'l1-2',
					meta: { title: 'Đến đại lý', icon: 'fe:app-menu', alwaysShow: true },
					redirect: '/app/test-menu/l1-2/l2-3',
				},
				{
					path: 'list',
					meta: { title: "Đến người dùng", icon: 'activity' },
					redirect: '/app/test-menu/l1-1/l2-1',
				},
				{
					path: 'l1-2',
					meta: { title: 'Đến game', icon: 'fe:app-menu', alwaysShow: true },
					redirect: '/app/test-menu/l1-2/l2-3',
				},
				{
					path: 'l1-2',
					meta: { title: 'Đến nhóm', icon: 'fe:app-menu', alwaysShow: true },
					redirect: '/app/test-menu/l1-2/l2-3',
				}
			]
		},
		{
			path: '/app/history',
			meta: { title: 'Lịch sử', icon: 'ic:round-history' },
			redirect: '/app/test-menu/l1-1',
			children: [
				{
					path: 'list',
					meta: { title: 'Truy cập', icon: 'activity' },
					redirect: '/app/test-menu/l1-1/l2-1',
				},
				{
					path: 'l1-2',
					meta: { title: 'Vận hành', icon: 'fe:app-menu', alwaysShow: true },
					redirect: '/app/test-menu/l1-2/l2-3',
				}
			]
		},
		{
			path: '/app/system',
			meta: { title: 'Hệ thống', icon: 'eos-icons:file-system-outlined' },
			redirect: '/app/test-menu/l1-1',
			children: [
				{
					path: 'list',
					meta: { title: 'Cấu hình', icon: 'activity' },
					redirect: '/app/test-menu/l1-1/l2-1',
				},
				{
					path: 'l1-2',
					meta: { title: 'Black list', icon: 'fe:app-menu', alwaysShow: true },
					redirect: '/app/test-menu/l1-2/l2-3',
				}
			]
		},
		// {
		// 	name: RouteNames.components,
		// 	path: '/app/components',
		// 	meta: { title: '组件', icon: 'ion:logo-web-component', alwaysShow: true },
		// 	children: [
		// 		{
		// 			name: RouteNames.imageUploader,
		// 			path: '/app/components/imageuploader',
		// 			meta: { title: '图片上传' },
		// 			component: () => import('@/pages/app/components/image-uploader.vue')
		// 		},
		// 		{
		// 			name: RouteNames.tinymce,
		// 			path: '/app/components/tinymce',
		// 			meta: { title: '富文本编辑器' },
		// 			component: () => import('@/pages/app/components/tinymce.vue')
		// 		}
		// 	]
		// },
		appAdminRoutes
	]
}
