import React from 'react';
import '@/index.css';
import heros from '@/assets/Group.svg';

export function Hero() {
  return (
    <section className="bg-gray-50 py-16 px-4  font">
      <div className="max-w-4xl mx-auto text-center ">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-20 mt-20">
          TOUTES LES OPPORTUNITÉS SERONT À{' '}
          <br className="hidden sm:block " />
          VOTRE PORTÉE <span className="text-blue-600">.</span>
        </h1>
      </div>
   <div>
  <img src={heros} alt="hero" width="90%" className="block mx-auto mb-8" />
</div>

    </section>
  );
}