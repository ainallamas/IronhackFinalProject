import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Cuando hagamos build -> cual será la carpeta de destino. Tenemos que poner la carpeta a la que vamos a vincular el github pages, en este caso, 'docs'. 
  base: process.env.NODE_ENV == 'production' ? '/IronhackFinalProject/' : '/',
  build: {
    outDir: 'docs',
    rollupOptions: {
      output: {
        entryFileNames: `assets/file_[name].[hash].js`,
        chunkFileNames: `assets/file_[name].[hash].js`,
        assetFileNames: `assets/file_[name].[hash].[ext]`,
      },
    }
  },
  // Le vamos a decir cual es la base de todo -> vamos a crear una variable de entorno -> quiere decir si estamos en un yarn dev o un build. Producción quiere decir que ya está en el servidor y es el definitivo. Si es producción, le vamos a poner en el repositorio llamado ironhackfinalproject (tenemos que ponerle el nombre del repositorio -> hay diferencias entre las mayúsculas y las minúsculas).
  //Se le llama operación ternario y viene a ser lo mismo que lo siguiente:  
  // if (process.env.NODE_ENV == 'production'){
    // base: 'produccion'
    // } else { 
      // base: '/'
  // }
  server: {
    base: process.env.NODE_ENV == 'production' ? '/IronhackFinalProject/' : '/',
  }
})
