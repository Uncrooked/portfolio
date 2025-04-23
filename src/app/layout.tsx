//npm
import { Suspense } from "react";

//fonts
import { fonts } from "@/lib/fonts";

//styles
import "./global.css";

// ui/components
import Header from "@/ui/templates/header/header";
import Footer from "@/ui/templates/footer/footer";
import PageLoading from "@/ui/components/loading/page-loading/pageLoading";

interface props{
    children: React.ReactNode
}

export default async function RootLayout({children}:props){
  return (
    <html lang="en">

        <body className={fonts.montserrat.className}>
          <Suspense fallback={<PageLoading/>}>
            <Header />
              {children}
            <Footer />
          </Suspense>
        </body>
    </html>
  )
}