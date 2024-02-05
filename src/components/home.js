import olive from '../assets/13437643_1612.m10.i302.n005.F.c03.149588858 Olive tree branches texture. Vector olives seamless background for oil package.jpg'
import olive1 from '../assets/10120334_1153.jpg'
import olive2 from '../assets/3226266_43211.jpg'
import olive3 from '../assets/3e8891bc1f7129f3e819f15969c639d3.jpg'
import olive4 from '../assets/6.jpg'


export default function Home(props){
    
    return(
        <>
            <div className="home-Container">
            <div class="w-screen h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
                <img src= {olive} class="absolute top-0 left-0 min-h-full w-screen ob bg-no-repeat	"/>
                <div class="relative z-20 max-w-screen-lg mx-auto grid grid-cols-12 h-full items-center">
                    <div class="col-span-6">
                    <span class="uppercase text-white text-xs font-bold mb-2 block">WE ARE EXPERTS</span>
                    <h1 class="text-white font-extrabold text-5xl mb-8">Finpoint provides Financial Consulting in different ways</h1>
                    <p class="text-stone-100 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button class="mt-8 text-white uppercase py-4 text-base font-light px-10 border border-white hover:bg-white hover:bg-opacity-10">Get started</button>
                    </div>
                </div>
                </div>
                <div class="bg-[#dbe3da] py-20">
                <div class="max-w-screen-lg mx-auto flex justify-between items-center">
                    <div class="max-w-xl">
                    <h2 class="font-black text-sky-950 text-3xl mb-4">As the leading experts in this field, we're in over 90 countries</h2>
                    <p class="text-base text-sky-950">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <button class="text-sky-950 uppercase py-3 text-base px-10 border border-sky-950 hover:bg-sky-950 hover:bg-opacity-10">Get started</button>
                </div>
                </div>
                <div class="py-12 relative overflow-hidden bg-white">
                <div class="grid grid-cols-2 max-w-screen-lg mx-auto">
                    <div class="w-full flex flex-col items-end pr-16">
                    <img src= {olive1} class="w-full mr-20 mt-10" />

                    <div class="h-full mt-auto overflow-hidden relative">
                        {/* <img src="https://picsum.photos/800/600" class="h-full w-full object-contain" alt=""> */}
                    </div>
                    </div>

                    <div class="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-sky-950 before:top-0 before:left-0">
                    <div class="relative z-20 pl-12">
                        <h2 class="text-[#dbe3da] font-black text-5xl leading-snug mb-10">Finpoint is here to help you</h2>
                        <p class="text-white text-sm">
                        Purus in massa tempor nec. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Faucibus ornare suspendisse sed nisi lacus sed viverra. Diam in arcu cursus euismod quis viverra nibh cras pulvinar.
                        </p>
                        <button class="mt-8 text-white uppercase py-3 text-sm px-10 border border-white hover:bg-white hover:bg-opacity-10">Talk with expert</button>
                    </div>
                    </div>
                </div>
                </div>

                <div class="py-4 relative overflow-hidden bg-white">
                <div class="grid grid-cols-2 max-w-screen-lg mx-auto">
                    

                    <div class="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-[#dbe3da] before:top-0 before:right-0">
                    <div class="relative z-20 pl-12">
                        <h2 class="text-sky-950 font-black text-5xl leading-snug mb-10">Finpoint is here to help you</h2>
                        <p class="text-sky-950 text-sm">
                        Purus in massa tempor nec. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Faucibus ornare suspendisse sed nisi lacus sed viverra. Diam in arcu cursus euismod quis viverra nibh cras pulvinar.
                        </p>
                        <button class="mt-8 text-sky-950 uppercase py-3 text-sm px-10 border border-sky-950 hover:bg-white hover:bg-opacity-10">Talk with expert</button>
                    </div>
                    </div>
                    <div class="w-full flex flex-col pl-16">
                    <img src= {olive3} class="ml-36 mt-10" />
                    <div class="h-full mt-auto overflow-hidden relative">
                        {/* <img src="https://picsum.photos/800/600" class="h-full w-full object-contain" alt=""> */}
                    </div>
                    </div>

                </div>
                </div>

                <div class="py-12 relative overflow-hidden bg-white">
                <div class="grid grid-cols-2 max-w-screen-lg mx-auto">
                    <div class="w-full flex flex-col items-end pr-16">
                    <img src= {olive4} class="w-full mr-20 mt-10" />
                    <div class="h-full mt-auto overflow-hidden relative">
                        {/* <img src="https://picsum.photos/800/600" class="h-full w-full object-contain" alt=""> */}
                    </div>
                    </div>

                    <div class="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-sky-950 before:top-0 before:left-0">
                    <div class="relative z-20 pl-12">
                        <h2 class="text-[#dbe3da] font-black text-5xl leading-snug mb-10">Finpoint is here to help you</h2>
                        <p class="text-white text-sm">
                        Purus in massa tempor nec. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Faucibus ornare suspendisse sed nisi lacus sed viverra. Diam in arcu cursus euismod quis viverra nibh cras pulvinar.
                        </p>
                        <button class="mt-8 text-white uppercase py-3 text-sm px-10 border border-white hover:bg-white hover:bg-opacity-10">Talk with expert</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
        
    )
}