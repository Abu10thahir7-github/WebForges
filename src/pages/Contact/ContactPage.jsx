import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';

import ContactHero from './section/ContactHero';
import ContactOptions from './section/ContactOptions';
import ProjectForm from './section/ProjectForm';
import DirectContact from './section/DirectContact';

import ContactFinalCTA from './section/ContactFinalCTA';
import ContactPageData from '../../data/ContactPageData';
import ProcessSteps from './section/ProcessSteps';
import FinalCTA from '../../Componets/shared/FinalCTA';

export default function ContactPage() {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>
          Contact Us - Collaborate with WebForges | Professional Web Design & Development
        </title>
        <meta
          name="description"
          content="Get in touch with WebForges for professional web design, branding, no-code development, mobile app design, and landing page services."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webforges.site/contact" />
        <meta property="og:title" content="Contact Us - Collaborate with WebForges" />
        <meta property="og:url" content="https://webforges.site/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="WebForges" />
      </Helmet>

      <ContactHero
        data={ContactPageData.hero}
        onPrimaryClick={scrollToForm}
        onSecondaryClick={scrollToForm}
      />
      <ContactOptions options={ContactPageData.contactOptions} onSelect={scrollToForm} />
      <ProjectForm data={ContactPageData.projectForm} formRef={formRef} />
      <DirectContact data={ContactPageData.directContact} />
      <ProcessSteps data={ContactPageData.process} />
      <FinalCTA
        data={ContactPageData.finalCta}
        bgImage="https://res.cloudinary.com/dcrf52w3g/image/upload/v1789403754/ChatGPT_Image_Sep_14_2026_10_00_26_PM_jdlhjn.png"
      />
    </div>
  );
}
