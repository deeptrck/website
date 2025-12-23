import React from 'react'
import Head from 'next/head'
import { Navbar } from '@/components/landing-page/navbar'
import Footer from '@/components/landing-page/footer'
import CompanyCultureAndLeadership from '@/components/layout/companyCulture'

export default function CompanyCulturePage() {
  return (
    <>
      <Head>
        <title>Company & Culture | deeptrack</title>
        <meta name="description" content="Learn about deeptrack's mission, vision, product stack and leadership team." />
        <link rel="canonical" href="https://www.deeptrack.io/company-and-culture" />
      </Head>

      <div className="space-y-6">
        <Navbar />
        <CompanyCultureAndLeadership />
        <Footer />
      </div>
    </>
  )
}
