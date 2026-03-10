"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroBillboardCarousel from "@/components/sections/hero/HeroBillboardCarousel";
import MediaAbout from "@/components/sections/about/MediaAbout";
import FeatureCardSixteen from "@/components/sections/feature/FeatureCardSixteen";
import ProductCardThree from "@/components/sections/product/ProductCardThree";
import MetricCardSeven from "@/components/sections/metrics/MetricCardSeven";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Heart, Handshake, CheckCircle, Lightbulb, TrendingUp, HelpCircle, Mail, Phone, MapPin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="smallMedium"
      sizing="largeSmall"
      background="circleGradient"
      cardStyle="solid"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="HHH"
          navItems={[
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
            { name: "Resources", id: "faq" },
          ]}
          button={{ text: "Get Started", href: "contact" }}
          animateOnLoad={true}
          className="bg-white/80 backdrop-blur-sm border border-accent/10"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Making Healthcare Less Overwhelming & More Human"
          description="Navigate your healthcare journey with personalized assistance. From insurance explanations to doctor visit support, we empower you with the information and resources you need."
          tag="Concierge Care Coordination"
          tagIcon={Heart}
          tagAnimation="slide-up"
          background={{ variant: "sparkles-gradient" }}
          mediaItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/medical-team-nurses-working-tablet-modern-professional-medical-office-smiling-healthcare-employee-comparing-data-with-african-american-coworker-hospital-workplace_482257-64612.jpg",              imageAlt: "Healthcare professional providing personalized assistance"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/retired-woman-nurse-talking-doctor-video-call-telemedicine-telehealth-nursing-home-medical-assistant-holding-smartphone-helping-disabled-patient-weelchair_482257-41327.jpg",              imageAlt: "Patient receiving care coordination support"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/female-healthcare-professional-uses-oximeter-measure-oxygen-levels_482257-117268.jpg",              imageAlt: "Healthcare insurance explanation"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/stethoscope-prescription-laptop_1232-4439.jpg",              imageAlt: "Medical terminology translation assistance"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/hr-manager-interviewing-woman-after-doing-background-checks_482257-115673.jpg",              imageAlt: "Insurance appeal process support"},
          ]}
          buttons={[
            { text: "Learn About Services", href: "services" },
            { text: "Schedule Consultation", href: "contact" },
          ]}
          buttonAnimation="slide-up"
          className="min-h-screen flex items-center justify-center py-20"
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Personalized Healthcare Assistance"
          description="HHH provides a comprehensive range of services designed to support you through healthcare challenges. We focus on empowering patients with the information and resources they need, without offering any medical advice or treatment. Our mission is to make healthcare navigation accessible, understandable, and less overwhelming for everyone."
          tag="Our Approach"
          tagIcon={Handshake}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/retired-woman-nurse-talking-doctor-video-call-telemedicine-telehealth-nursing-home-medical-assistant-holding-smartphone-helping-disabled-patient-weelchair_482257-41327.jpg"
          imageAlt="Professional healthcare coordinator assisting patient"
          useInvertedBackground={false}
          buttons={[{ text: "Explore Services", href: "services" }]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardSixteen
          title="What Sets HHH Apart"
          description="We handle the healthcare challenges so you don't have to. Our comprehensive services simplify complex processes."
          tag="Services Overview"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          negativeCard={{
            items: [
              "Confusion navigating insurance options",              "Struggle understanding medical terminology",              "Difficulty appealing denied claims",              "Facing healthcare appointments alone",              "Missing critical healthcare information"],
          }}
          positiveCard={{
            items: [
              "Clear insurance coverage explanations",              "Medical terminology translated and simplified",              "Professional appeal assistance support",              "Healthcare advocates accompanying appointments",              "Comprehensive resources and guidance"],
          }}
        />
      </div>

      <div id="service-details" data-section="service-details">
        <ProductCardThree
          title="Our Core Services"
          description="Discover how HHH supports your healthcare journey with tailored solutions"
          tag="Service Offerings"
          tagIcon={Lightbulb}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          products={[
            {
              id: "1",              name: "Insurance Coverage Assistance",              price: "Comprehensive Support",              imageSrc: "http://img.b2bpic.net/free-photo/female-healthcare-professional-uses-oximeter-measure-oxygen-levels_482257-117268.jpg",              imageAlt: "Insurance coverage explanation service"},
            {
              id: "2",              name: "Medical Terminology Translation",              price: "Clear Communication",              imageSrc: "http://img.b2bpic.net/free-photo/stethoscope-prescription-laptop_1232-4439.jpg",              imageAlt: "Medical language translation service"},
            {
              id: "3",              name: "Insurance Appeal Processing",              price: "Expert Advocacy",              imageSrc: "http://img.b2bpic.net/free-photo/hr-manager-interviewing-woman-after-doing-background-checks_482257-115673.jpg",              imageAlt: "Insurance appeal assistance service"},
            {
              id: "4",              name: "Doctor Visit Accompaniment",              price: "Patient Support",              imageSrc: "http://img.b2bpic.net/free-photo/young-couple-receiving-prescription-medicine-from-female-doctor-consultations-clinic-focus-is-doctor_637285-1154.jpg",              imageAlt: "Healthcare appointment support service"},
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardSeven
          title="HHH Impact"
          description="Our commitment to patient advocacy creates measurable results"
          tag="Success Metrics"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          uniformGridCustomHeightClasses="min-h-80"
          metrics={[
            {
              id: "1",              value: "100%",              title: "Patient-Centered Approach",              items: [
                "Empowering patient knowledge",                "No medical advice provided",                "Support without diagnosis"],
            },
            {
              id: "2",              value: "24/7",              title: "Healthcare Access Support",              items: [
                "Insurance guidance available",                "Documentation assistance",                "Appeal support services"],
            },
            {
              id: "3",              value: "Expert",              title: "Professional Coordination",              items: [
                "Trained healthcare advocates",                "Personalized assistance plans",                "Compassionate support"],
            },
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="HHH transformed my healthcare experience. They explained my insurance options in ways I actually understood, and their support throughout the process made me feel confident and empowered. I couldn't have navigated this without them."
          rating={5}
          author="Sarah Martinez, Healthcare Patient"
          avatars={[
            {
              src: "http://img.b2bpic.net/free-photo/portrait-smiling-senior-woman-looking-camera-while-standing-corridor-hospital-team-doctors-is-background_637285-729.jpg",              alt: "Patient testimonial avatar 1"},
            {
              src: "http://img.b2bpic.net/free-photo/confident-woman-with-crossed-arms-gesture_53876-111201.jpg",              alt: "Patient testimonial avatar 2"},
            {
              src: "http://img.b2bpic.net/free-photo/side-view-smiley-doctor-talking-patient_23-2149856238.jpg",              alt: "Patient testimonial avatar 3"},
            {
              src: "http://img.b2bpic.net/free-photo/experienced-female-medic-practitioner-consulting-patient-health-insurance_482257-126948.jpg",              alt: "Patient testimonial avatar 4"},
            {
              src: "http://img.b2bpic.net/free-photo/smiling-female-doctor_23-2151940439.jpg",              alt: "Patient testimonial avatar 5"},
            {
              src: "http://img.b2bpic.net/free-photo/male-doctor-giving-injection-patient-hospital_1170-2136.jpg",              alt: "Patient testimonial avatar 6"},
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Get answers about HHH services and how we support your healthcare journey"
          tag="Support"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          animationType="smooth"
          faqs={[
            {
              id: "1",              title: "What services does HHH provide?",              content: "HHH provides comprehensive healthcare navigation services including insurance coverage explanation, medical terminology translation, insurance appeal assistance, and accompaniment to doctor visits. We empower patients with information and resources without providing any medical advice."},
            {
              id: "2",              title: "Do you provide medical advice?",              content: "No. HHH is dedicated to patient advocacy and healthcare navigation support. We do not offer medical advice, treatment, or diagnosis. Our role is to help you understand healthcare processes and access the information you need."},
            {
              id: "3",              title: "How does the insurance assistance work?",              content: "Our team helps you understand your coverage options, explains insurance terminology, reviews your policies, and guides you through the process. We make complex insurance documents accessible and understandable."},
            {
              id: "4",              title: "Can you help with denied insurance claims?",              content: "Yes. We provide professional assistance with the appeal process, helping you understand why claims were denied and guiding you through the appeals process with documentation and support."},
            {
              id: "5",              title: "What should I expect during a consultation?",              content: "During your personalized consultation, we assess your healthcare needs, discuss your concerns, explain available support services, and create a customized plan to help you navigate your healthcare journey effectively."},
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Start Your Healthcare Journey With Us"
          description="Connect with HHH today for personalized healthcare coordination. Our team is ready to support you with compassionate, professional guidance through every step of your healthcare navigation."
          inputs={[
            {
              name: "fullName",              type: "text",              placeholder: "Full Name",              required: true,
            },
            {
              name: "email",              type: "email",              placeholder: "Email Address",              required: true,
            },
            {
              name: "phone",              type: "tel",              placeholder: "Phone Number",              required: false,
            },
          ]}
          textarea={{
            name: "message",            placeholder: "Tell us about your healthcare needs and how we can help...",            rows: 5,
            required: true,
          }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/medical-assistant-consulting-senior-patients-about-test-results-mri-scans_482257-122824.jpg"
          imageAlt="Healthcare professional providing patient support"
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttonText="Schedule Consultation"
          className="py-20"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="HHH"
          copyrightText="© 2025 HHH - Personalized Healthcare Assistance. All Rights Reserved."
          socialLinks={[
            {
              icon: Mail,
              href: "mailto:hello@hhheather.com",              ariaLabel: "Email HHH"},
            {
              icon: Phone,
              href: "tel:+1-800-000-0000",              ariaLabel: "Call HHH"},
            {
              icon: MapPin,
              href: "#",              ariaLabel: "HHH Location"},
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
