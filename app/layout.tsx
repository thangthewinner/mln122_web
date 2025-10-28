import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Đứt Gãy Công Nghệ - Website Phân tích',
  description: 'Website phân tích về đứt gãy công nghệ và con đường công nghiệp hóa, hiện đại hóa tại Việt Nam',
  keywords: ['đứt gãy công nghệ', 'công nghiệp hóa', 'hiện đại hóa', 'Việt Nam', 'cách mạng 4.0'],
  authors: [{ name: 'NHÓM DOVAT' }],
  creator: 'NHÓM DOVAT',
  publisher: 'NHÓM DOVAT',
  openGraph: {
    title: 'Đứt Gãy Công Nghệ - Website Phân tích',
    description: 'Website phân tích về đứt gãy công nghệ và con đường công nghiệp hóa, hiện đại hóa tại Việt Nam',
    type: 'website',
    locale: 'vi_VN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
