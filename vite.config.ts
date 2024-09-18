import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    //Custom Plugin To load the markdown Found in https://www.dev.to/how-to-load-and-render-files-into-your-vite-react-app-using-typescript-26jm
    {
      name:"markdown-loader",
      transform(code,id){
        if(id.slice(-3)===".md"){
          return `export default ${JSON.stringify(code)}`
        }
      }
    }
  ],
})
