import { defineConfig } from 'vite'
import path from 'path'
// import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src')
    },
  },
  plugins: [
      vue(), 
      // VitePWA({ 
      //   registerType: 'autoUpdate',
      //   devOptions: {
      //     enabled: true
      //   }
      // })
    ],
  
})
