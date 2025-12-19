import React from 'react'
import Image from 'next/image'
import { Navbar } from '@/components/landing-page/navbar'
import FeatureHighlight from '@/components/layout/feature-highlight'
import FeatureInformation from '@/components/layout/useCaseFeatureInformation';
import Footer from '@/components/landing-page/footer'
import InformationSection from '@/components/layout/informationSection'
import UseCaseFooterBanner from '@/components/layout/useCaseFooterBanner'
import Head from 'next/head';
import { WaitlistButton } from '@/components/landing-page/waiting-list';

const features = [
    {
        title: 'Credit-Based Fair Pricing',
        description: 'Users purchase credits and consume them with each scan. Fair, transparent pricing that scales with usage — no hidden fees, no wasted subscriptions. Organizations only pay for what they use.'
    },
    {
        title: 'Scalable Bulk Processing',
        description: 'Upload hundreds of media files simultaneously. Worker-powered background processing ensures asynchronous verification without blocking the user interface, enabling enterprise-grade throughput.'
    },
    {
        title: 'Comprehensive Enterprise Reporting',
        description: 'Export PDF reports, audit trails, confidence scores, and detected issues. Professional documentation for compliance, investigations, and stakeholder communication.'
    }
]

const GothamPage = () => {
  return (
    <>
      <Head>
        <title>Deeptrack Gotham  — Media Verification SaaS Platform | DeepTrack</title>
        <meta 
          name="description" 
          content="Deeptrack Gotham: A modern SaaS platform for large-scale media verification. Credit-based scanning, bulk processing, worker architecture, and comprehensive PDF reporting for enterprises." 
        />
        <meta property="og:title" content="Deeptrack Gotham — Enterprise Media Verification Platform" />
        <meta property="og:description" content="Scale media authenticity verification with Deeptrack Gotham — credit-based pricing, bulk scanning, and professional reporting." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.deeptrack.io/gotham" />
      </Head>
      
      <div className='space-y-6'>
          <Navbar />
          
          {/* Hero Section */}
          <section data-aos="fade-in" className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto mt-4 min-h-[50vh] p-4">
              <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left m-auto space-y-4">
                    <p className='font-semibold text-lg'>Solution:</p>
                  <h1 className="text-4xl sm:text-5xl font-semibold">Deeptrack Gotham</h1>
                  <p className="text-lg leading-relaxed max-w-lg">
                      A modern SaaS platform for large-scale media verification. Credit-based scanning, bulk processing, worker-powered architecture, and professional reporting.
                  </p>
                  <div className="flex gap-3 flex-col sm:flex-row">
                    <WaitlistButton id='btn-gotham-enterprise'/>
                    <a
                      href="https://gotham.deeptrack.io"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-sky-600 text-white px-4 py-3 rounded-lg hover:bg-sky-700 transition font-semibold text-center"
                    >
                      Visit Gotham
                    </a>
                  </div>
              </div>

              <div className="flex justify-center lg:justify-end p-6 mt-6">
                  <Image 
                    src="/Vector.svg"
                    alt="Gotham Enterprise Media Verification"
                    width={400}
                    height={300}
                    className="customTeal opacity-60"
                  />
              </div>
          </section>
          <div className='bg-customTeal max-w-7xl mx-auto mt-4' style={{ height: '1px' }} />

          {/* Feature Highlight */}
          <FeatureHighlight
              title="Enterprise-Grade Media Verification at Scale"
              subtitle='Credit-Based SaaS with Background Processing'
              description="Deeptrack Gotham, delivers a complete verification platform combining modern SaaS architecture with sophisticated media analysis. Users purchase credits that fuel unlimited scans, while a worker-based architecture ensures bulk operations process asynchronously without impacting performance. From payment processing  to audit trail logging, every component is built for enterprise reliability and scalability."
              imageSrc='/Vector.svg'
              imageAlt='Deeptrack Gotham Platform Architecture'
          />
            <Image
                src="/Vector.svg"
                alt="Decorative"
                width={400}
                height={300}
                className="absolute -right-72 md:-right-20 -z-10 customTeal"
                />
          
          {/* Key Features */}
          <FeatureInformation
              features={features} title={''} description={''}
          />

          
          
          <Image
              src="/Vector.svg"
              alt="Decorative"
              width={400}
              height={300}
              className="absolute teal-200 -z-10 -left-[150px] rotate-[180deg]"
          />

          {/* Value Section */}
          <UseCaseFooterBanner
              title="Complete Media Verification Ecosystem"
              imageSrc='/Vector.svg'
              imageAlt='Deeptrack Gotham Complete Platform' 
              content={[
                  {
                      subtitle: 'Seamless Monetization & User Experience',
                      description: 'Freemium trial accounts let users experience verification immediately. Credit-based purchasing aligns pricing with usage, creating transparent, fair value exchange. Webhook-verified payments ensure credits are reliably credited, and users see immediate confirmation.',
                  },
                  {
                      subtitle: 'Enterprise Compliance & Documentation',
                      description: 'PDF report generation creates professional documentation for audits and stakeholder communication. Complete audit trails log every verification, every scan, and every transaction. Role-based access (future) will enable teams to collaborate while maintaining security controls.',
                  },
              ]}          
          />

          {/* CTA Section */}
          <section className="py-16 px-4 text-center bg-gray-50">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold mb-4">Ready to Scale Your Media Verification?</h2>
              <p className="text-lg text-gray-700 mb-6">Deeptrack Gotham powers organizations that need to verify media at scale with reliability, compliance, and ease of use.</p>
              <a 
                href="https://gotham.deeptrack.io" 
                target="_blank" 
                rel="noreferrer"
                className="inline-block bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition font-semibold"
              >
                Launch Deeptrack Gotham
              </a>
            </div>
          </section>

          <Footer />
      </div>
    </>
  )
}

export default GothamPage;
