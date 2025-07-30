import React from 'react'
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function SimpleSearch() {
  return (
     <section className="bg-gray-50 pb-16 px-6 mb-10 ">
          <div className=" mx-auto flex  flex-wrap gap-2 border border-violetPerso p-5 rounded-full">
                    <Button className="bg-indigo-600 text-black hover:bg-indigo-600 px-6 ">
                      Offres d'emploi
                    </Button>
                    <Button className="bg-white hover:bg-indigo-600 text-black px-6">
                      Stages
                    </Button><Button className="bg-white hover:bg-indigo-600 text-black px-6">
                      Formations
                    </Button>
                    <Button className="bg-white hover:bg-indigo-600 text-black px-6">
                      Bourses
                    </Button>
                        <Button className="bg-white hover:bg-indigo-600  text-black px-6">
                      Concours
                    </Button>    <Button className="bg-white hover:bg-indigo-600 text-black px-6">
                      Volontariats
                    </Button>
                    
                  </div>

        </section>
  )
}
