import React from 'react';
import { ExpandableSection } from '@/components/ExpandableSection';
import Section from '@/components/SectionLayout';
import ContactForm from '@/components/ContactForm';
import { CONTACTS } from '@/content/location';
import { PageHero } from '@/components/layout/PageHero';


const FAQS = [
  {
    question: 'What is AINAS?',
    answer: 'AINAS LBG (African Initiative for Nature-Based Solutions) is a non-governmental organization dedicated to empowering African communities to implement innovative nature-based solutions that combat climate change, restore ecosystems, build resilient cities and promote sustainable development.'
  },
  {
    question: 'What are nature-based solutions (NBS)?',
    answer: 'Nature-based solutions are sustainable approaches that use the power of nature to address environmental, social and economic challenges. Examples include reforestation, green infrastructure, sustainable agriculture, agroforestry and water management strategies.'
  },
  {
    question: 'What does AINAS aim to achieve?',
    answer: 'Our goal is to transform African communities through restoring ecosystems, building resilience to climate change and creating sustainable livelihoods. We focus on capacity building, co-creating enterprises, improving agricultural productivity, advocacy, and expanding access to clean water and energy.'
  },
  {
    question: "Who benefits from AINAS's initiatives?",
    answer: "AINAS's primary beneficiaries are rural and urban communities across Africa, especially women, youth, smallholder farmers and vulnerable populations affected by climate change and environmental degradation."
  },
  {
    question: 'How does AINAS engage with local communities?',
    answer: 'AINAS collaborates with communities to co-develop solutions that reflect their unique needs. We provide training, create alternative livelihoods and integrate traditional knowledge with modern innovations to ensure sustainable outcomes.'
  },
  {
    question: 'How can individuals or organizations support AINAS?',
    answer: 'You can support AINAS by donating, volunteering or partnering with us to implement nature-based solutions. Visit our website or contact us directly for more information.'
  },
  {
    question: 'How is AINAS funded?',
    answer: 'AINAS receives funding from a diverse range of sources including grants, private donations, corporate sponsorships and government support. We are committed to transparency and financial accountability.'
  }
];

const ContactUsPage: React.FC = () => {
  return (
    <div className="bg-background text-foreground">
      <PageHero 
        title='Contact Us'
        backgroundImage='/images/community-impact.webp'
      />

        <section className="section flex flex-col-reverse xl:flex-row gap-10" >

            <ContactForm 
              description="Have a question, partnership proposal, or want to learn more about our initiatives? We'd love to hear from you!"
            />

          {/* some text */}
          <div className="max-w-lg mx-auto">
                <h2 className="heading-1 !mb-2">Get in Touch!</h2>
                <p className="font-serif text-xl text-dark mb-8">
                We welcome your inquiries and are eager to connect with you. 
                Whether you have questions, partnership proposals, or wish to learn more about 
                AINAS's initiatives, please do not hesitate to contact us. 
                We look forward to exploring opportunities for collaboration and creating a sustainable 
                future for African communities.
                </p>

                  <div className="flex flex-wrap [&>*]:w-1/2 gap-y-4">
                  {CONTACTS.map((contact, index) => (
                    <div key={index} className="flex">
                    <contact.icon className="text-primary mr-4" size={30} />
                        <div>
                          <h4 className="font-semibold">{contact.title}</h4>
                          <p className="font-sans text-sm">
                            {contact.multiline ? (
                              contact.content.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                  {line}<br />
                                </React.Fragment>
                              ))
                            ) : (
                              <a href={contact.href} className="hover:text-primaryBright">{contact.content}</a>
                            )}
                          </p>
                        </div>
                      </div>
                    ))}
              </div>            
          </div>
        </section>

        <Section>
          {/* map */}
          <div className='bg-secondary h-[400px] rounded-lg overflow-hidden flex items-start'>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d590.7747267495773!2d-0.16891093280276884!3d5.667669488489916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c4276f2de51%3A0x1de8877055eb4beb!2sWestland%20Blvd%20Rd%2C%20Accra!5e0!3m2!1sen!2sgh!4v1746794572933!5m2!1sen!2sgh"
            width="100%" 
            height="100%" 
            style={{border: 0}} 
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </Section>

      <Section title='FAQs'>
        {FAQS.map((faq, idx) => (
          <ExpandableSection 
            key={idx} 
            title={faq.question}
            className='py-4'
          >
            <p className='text-gray-600 pb-4'>{faq.answer}</p>
          </ExpandableSection>
        ))}
      </Section>
    </div>
  );
};

export default ContactUsPage;