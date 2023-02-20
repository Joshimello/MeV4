<script>

import Header from './lib/header.svelte'
import { siSvelte } from 'simple-icons'

</script>

<main class="flex flex-col items-center">

    <!-- Cursor -->
    <!-- <div class="w-10 h-10 absolute top-10 z-100 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-indigo-900 mix-blend-difference border-3" id="cursor">
    </div>  -->

    <!-- Header -->
    <Header/>

    <!-- Body -->
    <section class="w-110 h-200vh">
        
        <div class="mb-16">
            <div class="font-manifesto text-4xl flex">
                <img src="./image/wave.svg">
                <span class="pt-2 pl-4">
                    halo i am joshua
                </span>
            </div>
                
            <span class="font-odudo text-xl font-light">
                Freshman at NTHU Hsinchu, attempting computer science. I like Matcha and Katsudon.
            </span>
        </div>

        <div class="mb-16">
            <div class="font-manifesto text-4xl flex">
                <img src="./image/celebration.svg">
                <span class="pt-2 pl-4">
                    Com&hairsp;petitions
                </span>
            </div>
                
            <span class="font-odudo text-xl font-light block">
                <b>2023</b> Meichu Hackathon PixArt 2<sup>nd</sup>
            </span>

            <span class="font-odudo text-xl font-light block">
                <b>2023</b> Taipei Metro UXUI
            </span>
        </div>

        <div class="mb-16">
            <div class="font-manifesto text-4xl flex">
                <img src="./image/exercise.svg">
                <span class="pt-2 pl-4">
                    Experiences
                </span>
            </div>
                
            <span class="font-odudo text-xl font-light block">
                <b>2023</b> Soon
            </span>
        </div>

        <div class="mb-16">
            <div class="font-manifesto text-4xl flex">
                <img src="./image/school.svg">
                <span class="pt-2 pl-4">
                    Education
                </span>
            </div>
                
            <span class="font-odudo text-xl font-light block">
                <b>2022-2026</b> National Tsing Hua University
            </span>
        </div>

        <div class="mb-16">
            <div class="font-manifesto text-4xl flex">
                <img src="./image/drill.svg">
                <span class="pt-2 pl-4">
                    worked with
                </span>
            </div>
                
            <span class="font-odudo text-xl font-light block">
                <b class="block">Language</b>

                <b class="block">Frontend</b>
                <siSvelte/>
            </span>
        </div>
    </section>
</main>