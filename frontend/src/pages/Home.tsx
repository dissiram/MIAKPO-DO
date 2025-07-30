import React from 'react'
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { SearchForm } from '../components/SearchForm';
import { JobCategories } from '../components/JobCategories';
import { CompanyLogos } from '../components/CompanyLogos';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div>
     <Header />
      <main>
        <Hero />
        <SearchForm />
        <JobCategories />
        <CompanyLogos />
      </main>
      <Footer />
    </div>
  )
}
