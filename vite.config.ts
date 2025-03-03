// vite.config.ts
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			'/api/gigachat': {
				target: 'https://gigachat.devices.sberbank.ru/',
				changeOrigin: true,
				secure: false, 
				rewrite: path => path.replace(/^\/api\/gigachat/, '/api/v1'), 
			},
			'/api/ngw': {
				target: 'https://ngw.devices.sberbank.ru:9443',
				changeOrigin: true,
				secure: false, 
				rewrite: path => path.replace(/^\/api\/ngw/, '/api/v2'),
			},
		},
	},
})
