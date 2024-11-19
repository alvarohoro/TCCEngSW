import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'
import react from '@vitejs/plugin-react-swc'
import fs from 'fs'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), mkcert()],
//   server:{
//     https:{
//       key: fs.readFileSync('/Users/alvaro/projetos/frontkey.pem'),
//       cert: fs.readFileSync('/Users/alvaro/projetos/frontcert.pem'),
//     },
//     "host":"127.0.0.1",
//     "port":5123
//   }
// })


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isHttps = mode === 'https';
  return {
    plugins: [
      react(),
      ...(isHttps ? [mkcert()] : []) // Aplica o mkcert somente no modo https
    ],
    server: {
      host: "127.0.0.1",
      port: 5123,
      https: isHttps
        ? {
            key: fs.readFileSync('/Users/alvaro/projetos/testkey.pem'),
            cert: fs.readFileSync('/Users/alvaro/projetos/testcert.pem'),
          }
        : undefined,
    }
  }
})