import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import 'swiper/css';
import "../style/index.scss";
import { ServicesProvider } from "@/services";



const inter = Montserrat({ subsets: ['cyrillic', 'latin'] })

export const metadata: Metadata = {
	title: 'Radio "Не надо ля ля"',
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ServicesProvider>
          {children}
				</ServicesProvider>
			</body>
		</html>
	)
}
