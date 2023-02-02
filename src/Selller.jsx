import React from 'react'
import Footer from './components/Footer';
const Selller = () => {
  return (
    <div>
      <section class="text-gray-800 body-font relative bg-slate-200">
        <div class="container  py-24 mx-auto  ">

          <div class="box-border container w-1/2 text-left  mx-auto mb-12">
            <h1 class=" text-5xl font-bold title-font mb-4 text-gray-900 sm:text-4xl">Primary Information</h1>
          </div>
          <div class="box-border container py-12 px-6 mx-auto  md:box-content  w-1/2 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-slate-100">
            <div class="lg:w-5/6 md:w-2/3 mx-auto ">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="name" class="leading-7 text-2xl text-black font-bold">Name</label>
                    <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                  </div>

                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="country" class="leading-7 text-2xl text-black font-bold mt-4 mr-4" >Select Gender </label>
                    <select id="gender" name="gender" class="text-2xl mt-4  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    </select>
                    </div>
                </div>

                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="country" class="leading-7 text-2xl text-black font-bold mt-4">Description of Product</label><br />
                    <textarea class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="country" class="leading-7 text-2xl text-black font-bold mt-4">Price</label><br />
                    <input type="text" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>



                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="country" class="leading-7 text-2xl text-black font-bold mt-4">Image File</label><br />
                    <input type="file" placeholder='file' class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>

               
                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="country" class="leading-7 text-2xl text-black font-bold mt-4">Colour</label><br />
                    <input type="text"  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>

                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="country" class="leading-7 text-2xl text-black font-bold mt-4">Size</label><br />
                    <input type="text" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>

               

                <div class="p-2 w-full">
                  <button class="mt-4 flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>





      </section>

      <Footer />
    </div>
  )
}

export default Selller
