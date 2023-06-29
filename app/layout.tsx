import { Metadata } from 'next'

import 'semantic-ui-css/semantic.min.css'
import '@/public/stylesheets/styles.css'

export const metadata: Metadata = {
  title: 'Test App'
}

export default function RootLayout({ children }) {
  const background = '#cecece;'
  return (
    <html lang="en">
      <body style={{background}}>
        {children}
      </body>
    </html>
  )
}

