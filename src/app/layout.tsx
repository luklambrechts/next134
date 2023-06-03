import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextJS 13.4 Image Gallery',
  description: 'Tutorial project by coding in flow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>This div is ahared across layouts</div>
        {children}</body>
    </html>
  )
}
