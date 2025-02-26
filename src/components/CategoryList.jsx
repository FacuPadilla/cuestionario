import React from 'react'
import {imgs, categories} from '../data';
import { Link } from 'react-router-dom';
import { CategoryCard } from './CategoryCard';

const [
    imgCiencia,
    imgDeportes,
    imgFilosofia,
    imgGeografia,
    imgHistoria,
    imgLiteratura,
    imgTecnologia,
] = imgs;

export const CategoryList = () => {
  return (
    <div className='mb-10 flex flex-row flex-wrap justify-center gap-4 mt-10'>
        {/* Category Link Ciencia */}
        <CategoryCard
        category={categories.ciencia}
        src={imgCiencia}
        alt={`Categoria ${categories.ciencia}`}
        gradientColor='from-purple-500 to-pink-500'
        />
         {/* Category Link Deportes */}
         <CategoryCard
        category={categories.deportes}
        src={imgDeportes}
        alt={`Categoria ${categories.deportes}`}
        gradientColor='from-lime-400 to-teal-700 '
        />
         {/* Category Link Filosofia */}
         <CategoryCard
        category={categories.filosofia}
        src={imgFilosofia}
        alt={`Categoria ${categories.filosofia}`}
        gradientColor='from-red-500 to-zinc-500 '
        />
         
         {/* Category Link Geografia */}
         <CategoryCard
        category={categories.geografia}
        src={imgGeografia}
        alt={`Categoria ${categories.geografia}`}
        gradientColor='from-cyan-200 to-lime-200 '
        />
         {/* Category Link Historia */}
         <CategoryCard
        category={categories.historia}
        src={imgHistoria}
        alt={`Categoria ${categories.historia}`}
        gradientColor='from-sky-400 to-indigo-900 '
        />
         {/* Category Link Literatura */}
         <CategoryCard
        category={categories.literatura}
        src={imgLiteratura}
        alt={`Categoria ${categories.literatura}`}
        gradientColor='from-amber-500 to-emerald-600 '
        />
         {/* Category Link Tecnologia */}
         <CategoryCard
        category={categories.tecnologia}
        src={imgTecnologia}
        alt={`Categoria ${categories.tecnologia}`}
        gradientColor='from-violet-500 to-rose-500 '
        />
         
    </div>
  )
}
