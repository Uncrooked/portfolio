//fonts
import { fonts } from "@/lib/fonts";

//styles
import "./global.css";

// ui/components
import Header from "@/ui/templates/header/header";
import Footer from "@/ui/templates/footer/footer";

interface props{
    children: React.ReactNode
}

export default async function RootLayout({children}:props){
  return (
    <html lang="en">
        <body className={fonts.montserrat.className}>
            <Header />
              {children}
            <Footer />
        </body>
    </html>
  )
}